import { Col, Container, Row } from "react-bootstrap";
import InfoImg from "../../assets/info.jpg";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import InfoOver from "./InfoOver";
import { BsInfoSquare } from "react-icons/bs";

const Info = () => {
  const [display, setDisplay] = useState(true);

  return (
    <>
      {display ? (
        <Container fluid className="info pl-0">
          <Row>
            <Col>
              <img src={InfoImg} alt="Info background" className="infoImg" />
              <div className="infoText p-2 position-absolute">
                <p className="justify-content-center mb-0">
                  Track your games easily with{" "}
                  <span className="infoSpan">GAMES OVER</span>.
                </p>
                <p className="mb-0">Try out our controller!</p>
              </div>
            </Col>
            <Col>
              <AiFillCloseCircle
                size={20}
                className="float-right m-2 pointer"
                onClick={() => {
                  setDisplay(false);
                }}
              />
              <div className="position-relative">
                <p className="position-absolute mb-0 infoFav">
                  Add your favorites games by clicking in the star!
                </p>
                <InfoOver />
                <p className="position-absolute mb-0 infoPending">
                  currently playing it or pending to do it?
                </p>
                <p className="position-absolute mb-0 infoOvers">
                  is the game over?
                </p>
                <p className="position-absolute mb-0 infoLogin">
                  Login to start!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        <div className="d-flex justify-content-end">
          <BsInfoSquare
            size={20}
            className="m-2 pointer"
            onClick={() => {
              setDisplay(true);
            }}
          />
        </div>
      )}
    </>
  );
};

export default Info;
