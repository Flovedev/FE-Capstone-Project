import { Col } from "react-bootstrap";
import { useAppDispatch } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";
import {
  GET_PLATFORM_NAME,
  SET_SEARCH_LIST,
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
    dispatch({ type: SET_SEARCH_LIST, payload: "" });
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
