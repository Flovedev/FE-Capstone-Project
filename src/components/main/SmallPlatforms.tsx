import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import {
  GET_TITLE_NAME,
  SET_SEARCH_LIST,
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
    dispatch({ type: GET_TITLE_NAME, payload: props.data.name });
    dispatch({ type: SET_SEARCH_LIST, payload: "" });
    dispatch(getPlatformGames(props.data.id));
    navigate("/platformGenre");
  };

  return (
    <div
      className="singlePlatform m-1 p-1 d-flex align-items-center pointer"
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
