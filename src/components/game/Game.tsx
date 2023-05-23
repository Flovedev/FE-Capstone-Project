import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
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
import { AiFillCloseCircle } from "react-icons/ai";
import { BsInfoSquare } from "react-icons/bs";
import { useState, useEffect } from "react";
import { changeBG } from "../../redux/actions";
import { ToastContainer, toast } from "react-toastify";

const Game = () => {
  const dispatch = useAppDispatch();
  const currentUserToken = localStorage.getItem("accessToken");
  const labelLocal = localStorage.getItem("bgLabel");
  const [displayLabel, setDisplayLabel] = useState(labelLocal);
  const currentGame = useAppSelector(
    (state): IGame => state.game.singleGame[0]
  );

  const coverUrl = currentGame?.cover?.url;
  const updatedUrl = coverUrl?.replace("/t_thumb", "/t_720p");

  const artworkUrl = currentGame?.artworks?.[0]?.url;
  const updatedArtworkUrl = artworkUrl?.replace("/t_thumb", "/t_1080p");

  let maxFirst6;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentGame]);

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

  const fixedRating = Math.round(currentGame.rating);

  const propToSend = {
    id: currentGame.id,
    name: currentGame.name,
    cover: updatedUrl,
    rating: fixedRating,
    release_date: currentGame.release_dates?.[0].human,
    platforms: currentGame.platforms,
    genres: currentGame.genres,
  };

  const notify = () => toast("Profile background updated!");

  return (
    currentGame && (
      <>
        {currentGame.artworks && (
          <>
            <img
              className="bg-image"
              src={updatedArtworkUrl}
              alt="Background"
            />
            <div className="backgroundLabel px-1 d-flex align-items-center">
              {displayLabel === "no" ? (
                <BsInfoSquare
                  size={24}
                  className="p-1"
                  onClick={() => {
                    localStorage.removeItem("bgLabel");
                    setDisplayLabel("yes");
                  }}
                />
              ) : (
                currentUserToken && (
                  <>
                    <span
                      className="mb-0 mr-1"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(changeBG(updatedArtworkUrl));
                        notify();
                      }}
                    >
                      Use this image for your profile background!
                    </span>
                    <ToastContainer theme="dark" />
                    <AiFillCloseCircle
                      onClick={() => {
                        localStorage.setItem("bgLabel", "no");
                        setDisplayLabel("no");
                      }}
                    />
                  </>
                )
              )}
            </div>
          </>
        )}

        <Container className="gameInfo">
          <Row className="mt-5 p-4">
            <Col md={4} xl={3}>
              {fixedRating ? (
                <h6 className="rating px-2 py-1 mr-2">{fixedRating}/100</h6>
              ) : (
                ""
              )}
              {currentGame.release_dates && (
                <h6 className="releaseDate px-2 py-1 mr-2">
                  {currentGame.release_dates?.[0].human}
                </h6>
              )}

              {updatedUrl ? (
                <div className="d-flex align-items-center justify-content-between">
                  <ImageModal data={currentGame.cover} />
                </div>
              ) : (
                <img src={noImage} alt="Game cover" className="gameImage" />
              )}
            </Col>
            <Col md={8} xl={9}>
              <div className="d-flex border-bottom border-secondary align-items-center">
                <h2 className="flex-grow-1">{currentGame.name}</h2>
                <div className="d-flex">
                  {currentUserToken ? <Over data={propToSend} /> : ""}
                </div>
              </div>
              <div className="d-flex border-bottom border-secondary py-1 flex-wrap">
                {currentGame.genres?.map((e: IGenre) => (
                  <SingleGenre data={e} key={e.id} />
                ))}
              </div>
              <Row className="d-flex">
                {currentGame.platforms && (
                  <Col className="mt-2">
                    <p className="mb-0">Platforms:</p>
                    <div className="d-flex flex-wrap">
                      {currentGame?.platforms?.map((e: IPlatform) => (
                        <SmallPlatforms data={e} key={e.id} />
                      ))}
                    </div>
                  </Col>
                )}
                <Col>
                  <Companies data={currentGame.involved_companies} />
                </Col>
              </Row>
            </Col>
          </Row>
          {currentGame.language_supports && (
            <Row className="mt-5 p-3 d-flex flex-column">
              <h6>Supported languages:</h6>
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
          )}
          {currentGame.screenshots && (
            <Row className="d-none d-sm-flex imagesDisplayer mt-5 p-2 align-items-center">
              <Col xl={7}>
                {currentGame.videos ? (
                  <Video data={currentGame.videos} />
                ) : (
                  <img
                    src={UAVideo}
                    alt="Video unavailable"
                    className="UAVideo"
                  />
                )}
              </Col>

              <Col xl={5} className="p-0 pl-4">
                {maxFirst6?.map((e: IScreenshot) => (
                  <ImageModal data={e} key={e.id} />
                ))}
              </Col>
            </Row>
          )}
          {currentGame.summary && (
            <Row className="gameDescription mt-5 p-3">
              <p>{currentGame.summary}</p>
            </Row>
          )}

          {currentGame.similar_games && (
            <Row className="mt-5 p-2 flex-column">
              <h5 className="m-1">Similar games:</h5>
              <div className="d-flex flex-wrap mt-2 justify-content-center">
                {currentGame.similar_games?.map((e: ISimilar) => (
                  <SingleSimilar data={e} key={e.id} />
                ))}
              </div>
            </Row>
          )}
        </Container>
      </>
    )
  );
};

export default Game;
