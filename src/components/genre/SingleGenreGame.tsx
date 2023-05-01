import { Row } from "react-bootstrap";
import { IGame } from "../../redux/interfaces/IGame";

interface IProps {
  data: IGame;
}

const SingleGenreGame = (props: IProps) => {
  console.log(props);
  return (
    <Row>
      <img src={props.data.cover.url} alt="Game cover" />
    </Row>
  );
};

export default SingleGenreGame;
