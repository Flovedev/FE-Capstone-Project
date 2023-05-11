import { useNavigate } from "react-router-dom";
import { GET_SINGLE_GAME, getGame } from "../../redux/actions";
import { useAppDispatch } from "../../redux/hooks";
import { IGame, IGenre, IPlatform } from "../../redux/interfaces/IGame";
import SmallPlatforms from "../main/SmallPlatforms";
import noImage from "../../assets/No_Image_Available.jpg";
import SmallGenre from "../main/SmallGenre";
import { Col, Row } from "react-bootstrap";
import Over from "../main/Over";

interface IProps {
  data: IGame;
}

const SingleSearch = (props: IProps) => {
  const currentUserToken = localStorage.getItem("accessToken");
  // console.log(props.data);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch({ type: GET_SINGLE_GAME, payload: "" });
    dispatch(getGame(props.data.id));
    navigate("/game");
  };

  const fixedRating = Math.round(props.data.rating);

  const coverUrl = props.data.cover?.url;
  const updatedUrl = coverUrl?.replace("/t_thumb", "/t_logo_med");

  const propToSend = {
    id: props.data.id,
    name: props.data.name,
    cover: updatedUrl,
    rating: fixedRating,
  };

  return (
    <Row className="singleSearch my-2">
      <Col
        className="d-flex pointer"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          e.preventDefault();
          handleClick();
        }}
      >
        <Col sm={2} className=" d-flex  justify-content-center">
          {fixedRating ? (
            <span className="rating px-2 mt-1 mb-0">{fixedRating}/100</span>
          ) : (
            ""
          )}

          {props.data.cover ? (
            <img src={updatedUrl} alt="Game cover" className="searchImg m-2" />
          ) : (
            <img src={noImage} alt="No cover" className="searchImg mx-2 my-3" />
          )}
        </Col>
        <Col className="py-2">
          <div className="d-flex border-bottom border-secondary">
            <h4 className="flex-grow-1 ml-1 mb-1">{props.data.name}</h4>
          </div>
          <div className="d-flex border-bottom border-secondary py-1">
            {props.data.genres
              ? props.data.genres?.map((e: IGenre) => (
                  <SmallGenre data={e} key={e.id} />
                ))
              : "No genres provided"}
          </div>
          <div className="d-flex flex-wrap">
            {props.data.platforms
              ? props.data.platforms?.map((e: IPlatform) => (
                  <SmallPlatforms data={e} key={e.id} />
                ))
              : "No platform provided"}
          </div>
        </Col>
      </Col>
      <Col sm={2} className="d-flex align-items-center">
        {currentUserToken ? <Over data={propToSend} /> : ""}
      </Col>
    </Row>
  );
};

export default SingleSearch;
