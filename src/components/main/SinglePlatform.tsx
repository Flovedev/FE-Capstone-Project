import noImage from "../../assets/No_Image_Available.jpg";
import { Col } from "react-bootstrap";
import { useAppDispatch } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";
import {
  GET_PLATFORM_GAMES,
  GET_PLATFORM_NAME,
  getPlatformGames,
} from "../../redux/actions";
import { IPlatform } from "../../redux/interfaces/IGame";

interface IProps {
  data: IPlatform;
}

const SinglePlatform = (props: IProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleGenreClick = () => {
    dispatch({ type: GET_PLATFORM_NAME, payload: props.data.name });
    dispatch({ type: GET_PLATFORM_GAMES, payload: "" });
    dispatch(getPlatformGames(props.data.id));
    navigate("/platform");
  };

  return (
    <Col
      sm={2}
      className="platforms m-1 p-1 d-flex align-items-center pointer"
      onClick={() => {
        handleGenreClick();
      }}
    >
      <p className="mb-0 ml-2">{props.data.name}</p>
    </Col>
  );
};

export default SinglePlatform;
