import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import {
  GET_GENRE_GAMES,
  GET_GENRE_NAME,
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
    dispatch({ type: GET_GENRE_NAME, payload: props.data.name });
    dispatch({ type: GET_GENRE_GAMES, payload: "" });
    dispatch(getGenreGames(props.data.id));
    navigate("/genre");
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
