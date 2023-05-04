import { IPlatforms } from "../../redux/interfaces/IPlatforms";
import noImage from "../../assets/No_Image_Available.jpg";
import { Col } from "react-bootstrap";
import { useAppDispatch } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";
import {
  GET_PLATFORM_GAMES,
  GET_PLATFORM_NAME,
  getPlatformGames,
} from "../../redux/actions";

interface IProps {
  data: IPlatforms;
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

  const logoUrl = props.data.platform_logo?.url;
  const updatedUrl = logoUrl?.replace("/t_thumb", "/t_logo_med");

  return (
    <Col
      sm={2}
      className="singleGenre m-1 p-1 d-flex align-items-center pointer"
      onClick={() => {
        handleGenreClick();
      }}
    >
      {props.data.platform_logo === undefined ? (
        <img src={noImage} alt="Missing logo" className="platformImage" />
      ) : (
        <img src={updatedUrl} alt="Platform logo" className="platformImage" />
      )}

      <p className="mb-0 ml-2">{props.data.name}</p>
    </Col>
  );
};

export default SinglePlatform;
