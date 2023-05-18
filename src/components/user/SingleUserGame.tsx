import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { IOver } from "../../redux/interfaces/IUser";
import Over from "../main/Over";
import { GET_SINGLE_GAME, getGame } from "../../redux/actions";
import noImage from "../../assets/No_Image_Available.jpg";
import SmallGenre from "../main/SmallGenre";
import SmallPlatforms from "../main/SmallPlatforms";
import { IGenre } from "../../redux/interfaces/IGame";

interface IProps {
  data: IOver;
}

const SingleUserGame = (props: IProps) => {
  const currentUserToken = localStorage.getItem("accessToken");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch({ type: GET_SINGLE_GAME, payload: "" });
    dispatch(getGame(props.data.id));
    navigate("/game");
  };

  return (
    <div className="singleSearch d-flex align-items-center my-2 pr-4 mx-2">
      <div
        className="d-flex align-items-center flex-grow-1 pointer"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          e.preventDefault();
          handleClick();
        }}
      >
        <div className="position-relative mr-2">
          {props.data.rating && (
            <h6 className="smallRating px-1">{props.data.rating}/100</h6>
          )}
          {props.data.release_date && (
            <span className="smallReleaseDate px-1 mb-0">
              {props.data.release_date}
            </span>
          )}

          {props.data.cover ? (
            <img
              src={props.data.cover}
              alt="Game cover"
              className="userGameImage m-1"
            />
          ) : (
            <img src={noImage} alt="No cover" className="userGameImage m-1" />
          )}
        </div>
        <div className="py-1 flex-grow-1 mr-5">
          <div className="d-flex border-bottom border-secondary">
            <h3 className="flex-grow-1 ml-2">{props.data.name}</h3>
          </div>
          <div className="d-none d-md-flex border-bottom border-secondary py-1 flex-wrap">
            {props.data.genres
              ? props.data.genres?.map((e: IGenre) => (
                  <SmallGenre data={e} key={e.id} />
                ))
              : "No genres provided"}
          </div>
          <div className="d-none d-md-flex flex-wrap">
            {props.data.platforms
              ? props.data.platforms?.map((e: any) => (
                  <SmallPlatforms data={e} key={e.id} />
                ))
              : "No platform provided"}
          </div>
        </div>
      </div>
      <div className="d-none d-md-block">
        {currentUserToken ? <Over data={props.data} /> : ""}
      </div>
    </div>
  );
};

export default SingleUserGame;
