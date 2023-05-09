import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useAppSelector } from "../../redux/hooks";
import {
  IGame,
  IGenre,
  IPlatform,
  IScreenshot,
  ISimilar,
} from "../../redux/interfaces/IGame";
import Companies from "./Companies";
import SingleSimilar from "./SingleSimilar";
import SingleGenre from "../main/SingleGenre";
import Video from "./Video";
import ImageModal from "./ImageModal";
import UAVideo from "../../assets/video-unavailable.jpg";
import SmallPlatforms from "../main/SmallPlatforms";
import Over from "../main/Over";
import noImage from "../../assets/No_Image_Available.jpg";

const Game = () => {
  const currentGame = useAppSelector(
    (state): IGame => state.game.singleGame[0]
  );
  console.log(currentGame);
  const coverUrl = currentGame?.cover?.url;
  const updatedUrl = coverUrl?.replace("/t_thumb", "/t_720p");

  const artworkUrl = currentGame?.artworks?.[0]?.url;
  const updatedArtworkUrl = artworkUrl?.replace("/t_thumb", "/t_1080p");

  let maxFirst6;

  if (currentGame?.screenshots?.length < 6) {
    maxFirst6 = currentGame?.screenshots;
  } else {
    maxFirst6 = currentGame?.screenshots?.slice(0, 6);
  }

  if (!currentGame) {
    return (
      <Container
        style={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <Spinner animation="grow" variant="success" />
      </Container>
    );
  }

  const uniqueMap = new Map();
  if (currentGame?.language_supports) {
    for (const obj of currentGame.language_supports) {
      if (!uniqueMap.has(obj.language.name)) {
        uniqueMap.set(obj.language.name, obj);
      }
    }
  }
  const uniqueArr = Array.from(uniqueMap.values());

  const fixedRating = parseInt(currentGame.rating);

  const propToSend = {
    id: currentGame.id,
    name: currentGame.name,
    cover: updatedUrl,
    rating: fixedRating,
  };
  // console.log(propToSend);

  return (
    currentGame && (
      <>
        {currentGame.artworks && (
          <img className="bg-image" src={updatedArtworkUrl} alt="Background" />
        )}

        <Container className="gameInfo">
          <Row className="mt-5 p-4">
            <Col sm={3}>
              {fixedRating ? (
                <h6 className="rating px-2 py-1 mr-2">{fixedRating}/100</h6>
              ) : (
                ""
              )}

              {updatedUrl ? (
                <img src={updatedUrl} alt="Game cover" className="gameImage" />
              ) : (
                <img src={noImage} alt="Game cover" className="gameImage" />
              )}
            </Col>
            <Col sm={9}>
              <div className="d-flex border-bottom border-secondary align-items-center">
                <h2 className="flex-grow-1">{currentGame.name}</h2>
                <Over data={propToSend} />
              </div>
              <div className="d-flex border-bottom border-secondary py-1">
                {currentGame.genres?.map((e: IGenre) => (
                  <SingleGenre data={e} key={e.id} />
                ))}
              </div>
              <Row className="d-flex">
                <Col className="mt-2">
                  <p className="mb-0">Platforms:</p>
                  <div className="d-flex flex-wrap">
                    {currentGame?.platforms.map((e: IPlatform) => (
                      <SmallPlatforms data={e} key={e.id} />
                    ))}
                  </div>
                </Col>
                <Col>
                  <Companies data={currentGame.involved_companies} />
                </Col>
              </Row>
            </Col>
          </Row>
          {currentGame.screenshots && (
            <Row className="imagesDisplayer mt-5 p-2">
              {currentGame.videos ? (
                <Video data={currentGame.videos} />
              ) : (
                <img
                  src={UAVideo}
                  alt="Video unavailable"
                  className="UAVideo"
                />
              )}

              <Col className="p-0 pl-4">
                {maxFirst6?.map((e: IScreenshot) => (
                  <ImageModal data={e} key={e.id} />
                ))}
              </Col>
            </Row>
          )}
          <Row className="gameDescription mt-5 p-3">
            <p>{currentGame.summary}</p>
          </Row>
          <Row className="mt-5 p-2 flex-column">
            <h5 className="m-1">Similar games:</h5>
            <div className="d-flex flex-wrap mt-2 justify-content-center">
              {currentGame.similar_games.map((e: ISimilar) => (
                <SingleSimilar data={e} key={e.id} />
              ))}
            </div>
          </Row>
          <Row className="mt-5 p-3 d-flex flex-column">
            <h6>Languages:</h6>
            <Col className="d-flex flex-wrap justify-content-center align-items-center">
              {uniqueArr.length > 0 ? (
                uniqueArr.map((e, index) => (
                  <p className="m-1 p-1 border border-secondary" key={index}>
                    {e.language.name}
                  </p>
                ))
              ) : (
                <p className="ml-2 mb-0">Not provided</p>
              )}
            </Col>
          </Row>
        </Container>
      </>
    )
  );
};

export default Game;
