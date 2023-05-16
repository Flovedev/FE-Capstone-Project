import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import {
  GET_TITLE_NAME,
  SET_SEARCH_LIST,
  getGenreGames,
} from "../../redux/actions";
import { IGenre } from "../../redux/interfaces/IGame";

interface IProps {
  data: IGenre;
}

const SingleGenre = (props: IProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleGenreClick = () => {
    dispatch({ type: GET_TITLE_NAME, payload: props.data.name });
    dispatch({ type: SET_SEARCH_LIST, payload: "" });
    dispatch(getGenreGames(props.data.id));
    navigate("/platformGenre");
  };

  return (
    <div
      className="genres m-1 p-1"
      onClick={() => {
        handleGenreClick();
      }}
    >
      {props.data.name}
    </div>
  );
};

export default SingleGenre;
