import { useNavigate } from "react-router-dom";
import { GET_SINGLE_GAME, getGame } from "../../redux/actions";
import { useAppDispatch } from "../../redux/hooks";
import { IGame } from "../../redux/interfaces/IGame";
import SmallPlatforms from "../main/SmallPlatforms";
import noImage from "../../assets/No_Image_Available.jpg";
import SmallGenre from "../main/SmallGenre";
import { Col, Row } from "react-bootstrap";

interface IProps {
  data: IGame;
}

const SingleSearch = (props: IProps) => {
  // console.log(props.data);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch({ type: GET_SINGLE_GAME, payload: "" });
    dispatch(getGame(props.data.id));
    navigate("/game");
  };

  const coverUrl = props.data.cover?.url;
  const updatedUrl = coverUrl?.replace("/t_thumb", "/t_logo_med");

  return (
    <Row
      className="singleSearch  my-2"
      onClick={(e: any) => {
        e.preventDefault();
        handleClick();
      }}
    >
      <Col sm={2} className=" d-flex align-items-center justify-content-center">
        {props.data.cover ? (
          <img src={updatedUrl} alt="Game cover" className="searchImg m-2" />
        ) : (
          <img src={noImage} alt="No cover" className="mx-2 my-3" />
        )}
      </Col>
      <Col className="py-2">
        <div className="d-flex">
          <h4 className="flex-grow-1 ml-1 mb-0">{props.data.name}</h4>
          <span className="rating px-2 mb-0">
            {parseInt(props.data.rating)}/100
          </span>
        </div>
        <div className="d-flex">
          {props.data.genres?.map((e: any) => (
            <SmallGenre data={e} key={e.id} />
          ))}
        </div>
        <div className="d-flex">
          {props.data.platforms?.map((e: any) => (
            <SmallPlatforms data={e} key={e.id} />
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default SingleSearch;
