import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { IOver } from "../../redux/interfaces/IUser";
import Over from "../main/Over";
import { GET_SINGLE_GAME, getGame } from "../../redux/actions";
import noImage from "../../assets/No_Image_Available.jpg";

interface IProps {
  data: IOver;
}

const SingleUserGame = (props: IProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch({ type: GET_SINGLE_GAME, payload: "" });
    dispatch(getGame(props.data.id));
    navigate("/game");
  };

  return (
    <div className="singleSearch d-flex align-items-center my-2 pr-4">
      <div
        className="d-flex align-items-center flex-grow-1 pointer"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          e.preventDefault();
          handleClick();
        }}
      >
        <div className="position-relative">
          {props.data.rating && (
            <h6 className="rating px-1">{props.data.rating}/100</h6>
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
        <h3 className="flex-grow-1 ml-2">{props.data.name}</h3>
      </div>
      <Over data={props.data} />
    </div>
  );
};

export default SingleUserGame;
