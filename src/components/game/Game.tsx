import { Container, Row, Col } from "react-bootstrap";
import { useAppSelector } from "../../redux/hooks";
import { IGame } from "../../redux/interfaces/IGame";
import Screenshot from "./Screenshots";
import { IUrls } from "../../redux/interfaces/IUrls";
import Companies from "./Companies";
import SingleSimilar from "./SingleSimilar";
import SingleGenre from "../main/SingleGenre";
import { IGenres } from "../../redux/interfaces/IGenres";

const Game = () => {
  const currentGame = useAppSelector(
    (state): IGame => state.game.singleGame[0]
  );
  console.log(currentGame);
  const coverUrl = currentGame?.cover?.url;
  const updatedUrl = coverUrl?.replace("/t_thumb", "/t_1080p");
  return (
    currentGame && (
      <Container className="gameInfo">
        <Row className="mt-5 p-4">
          <Col sm={3}>
            <img src={updatedUrl} alt="Game cover" className="gameImage" />
          </Col>
          <Col sm={9}>
            <div className="d-flex align-items-center">
              <h2 className="flex-grow-1">{currentGame.name}</h2>
              <h6>{parseInt(currentGame.rating)}/100</h6>
            </div>
            <div className="d-flex">
              {currentGame.genres.map((e: any) => (
                <SingleGenre data={e} key={e.id} />
              ))}
            </div>
            <Companies data={currentGame.involved_companies} />
          </Col>
        </Row>
        <Row className="imagesDisplayer mt-5 p-2">
          {currentGame.screenshots.map((e: any) => (
            <Screenshot data={e} key={e.id} />
          ))}
        </Row>
        <Row className="gameDescription mt-5 p-3">
          <p>{currentGame.summary}</p>
        </Row>
        <Row className="mt-5 p-2 flex-column">
          <h5 className="m-1">Similar games:</h5>
          <div className="d-flex flex-wrap mt-2 justify-content-center">
            {currentGame.similar_games.map((e: any) => (
              <SingleSimilar data={e} key={e.id} />
            ))}
          </div>
        </Row>
        <Row className="mt-5 p-3 d-flex flex-column">
          <h6>Languages:</h6>
          <div className="d-flex">
            {currentGame.language_supports ? (
              currentGame.language_supports?.map((e, index) => (
                <p className="m-1 p-1" key={index}>
                  {e.language.name}
                </p>
              ))
            ) : (
              <p className="ml-2 mb-0">Unknowns</p>
            )}
          </div>
        </Row>
      </Container>
    )
  );
};

export default Game;
