import { useNavigate } from "react-router-dom";
import { GET_SINGLE_GAME, getGame } from "../../redux/actions";
import { useAppDispatch } from "../../redux/hooks";
import { IGame } from "../../redux/interfaces/IGame";
import SmallPlatforms from "../main/SmallPlatforms";
import noImage from "../../assets/No_Image_Available.jpg";
import SmallGenre from "../main/SmallGenre";

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

  return (
    <div
      className="singleSearch d-flex align-items-center my-2"
      onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}
    >
      {props.data.cover ? (
        <img src={props.data.cover?.url} alt="Game cover" className="mx-2" />
      ) : (
        <img src={noImage} alt="No cover" className="mx-2 my-3" />
      )}

      <div className="flex-grow-1 p-1">
        <div className="d-flex">
          <h4 className="flex-grow-1 ml-1">{props.data.name}</h4>
          <span className="mr-2">{parseInt(props.data.rating)}/100</span>
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
      </div>
    </div>
  );
};

export default SingleSearch;
