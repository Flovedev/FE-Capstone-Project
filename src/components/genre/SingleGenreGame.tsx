import { Row, Col } from "react-bootstrap";
import { IGame } from "../../redux/interfaces/IGame";
import { useAppDispatch } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";
import { GET_SINGLE_GAME, getGame } from "../../redux/actions";

interface IProps {
  data: IGame;
}

const SingleGenreGame = (props: IProps) => {
  //   console.log(props);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch({ type: GET_SINGLE_GAME, payload: "" });
    dispatch(getGame(props.data.id));
    navigate("/game");
  };

  return (
    <Row
      className="singleSimilar m-3"
      onClick={() => {
        handleClick();
      }}
    >
      <Col className="d-flex">
        <img
          src={props.data.cover.url}
          alt="Game cover"
          className="genreGameImage m-2"
        />
        <div className="genreGameSummary">
          <div className="d-flex flex-grow-1">
            <h5 className="flex-grow-1 mt-1">{props.data.name}</h5>
            <span>{parseInt(props.data.rating)}/100</span>
          </div>
          <p className="mb-0">{props.data.summary}</p>
        </div>
      </Col>
    </Row>
  );
};

export default SingleGenreGame;
