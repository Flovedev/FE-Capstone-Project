import { Col } from "react-bootstrap";
import { useAppDispatch } from "../../redux/hooks";
import { GET_SINGLE_GAME, getGame } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

interface IProps {
  data: any;
}

const SingleSimilar = (props: IProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const coverUrl = props.data.cover.url;
  const updatedUrl = coverUrl?.replace("/t_thumb", "/t_logo_med");

  const handleClick = () => {
    dispatch({ type: GET_SINGLE_GAME, payload: "" });
    dispatch(getGame(props.data.id));
    navigate("/game");
  };

  return (
    <Col
      sm={2}
      className="singleSimilar m-1 p-3"
      onClick={() => {
        handleClick();
      }}
    >
      <div className="d-flex">
        <img src={updatedUrl} alt="Game screenshot" className="similarImages" />
        <div className="d-flex flex-column align-items-center ml-2">
          <p className="mb-0">Rate</p>
          <span>{parseInt(props.data.rating)}</span>
        </div>
      </div>
      <p className="mt-2 mb-0">{props.data.name}</p>
    </Col>
  );
};

export default SingleSimilar;
