import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import {
  GET_PLATFORM_GAMES,
  GET_PLATFORM_NAME,
  getPlatformGames,
} from "../../redux/actions";
import { IPlatform } from "../../redux/interfaces/IGame";

interface IProps {
  data: IPlatform;
}

const SmallPlatforms = (props: IProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleGenreClick = () => {
    dispatch({ type: GET_PLATFORM_NAME, payload: props.data.name });
    dispatch({ type: GET_PLATFORM_GAMES, payload: "" });
    dispatch(getPlatformGames(props.data.id));
    navigate("/platform");
  };

  return (
    <div
      className="singleGenre m-1 p-1 d-flex align-items-center pointer"
      onClick={() => {
        handleGenreClick();
      }}
    >
      {props.data.abbreviation ? (
        <p className="mb-0">{props.data.abbreviation}</p>
      ) : (
        <p className="mb-0">{props.data.name}</p>
      )}
    </div>
  );
};

export default SmallPlatforms;
