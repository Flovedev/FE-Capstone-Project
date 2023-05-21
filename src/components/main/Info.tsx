import { Col, Container, Row } from "react-bootstrap";
import UpArrow from "../../assets/up-arrow.png";
import UpArrow2 from "../../assets/up-arrow2.png";
import UpArrow3 from "../../assets/up-arrow3.png";
import DownArrow from "../../assets/down-arrow.png";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import InfoOver from "./InfoOver";
import { BsInfoSquare } from "react-icons/bs";
import infoBG from "../..//assets/info.jpg";

const Info = () => {
  const [display, setDisplay] = useState(true);

  return (
    <>
      {display ? (
        <Container
          fluid
          className="info pl-0 d-none d-xl-block position-relative"
        >
          <img className="infoImg" src={infoBG} alt="Info background" />
          <Row>
            <Col className="d-flex justify-content-center align-items-center">
              <div className="infoText p-2">
                <p className="justify-content-center mb-0">
                  Track your games easily with{" "}
                  <span className="infoSpan">GAMES OVER</span>.
                </p>
                <p className="mb-0">Try out our controller!</p>
              </div>
            </Col>
            <Col className="pr-1">
              <div className="position-relative infoContainer">
                <AiFillCloseCircle
                  size={25}
                  className=" mt-1 pointer infoCross position-absolute"
                  onClick={() => {
                    setDisplay(false);
                  }}
                />
                <InfoOver />
                <div className="position-absolute infoFav d-flex flex-column align-items-end">
                  <p className="mb-0">
                    Add your favorites games by clicking in the star!
                  </p>
                  <img
                    src={DownArrow}
                    alt="Up arrow"
                    className="arrow mt-2 mr-2"
                  />
                </div>
                <div className="position-absolute infoPending d-flex flex-column align-items-end">
                  <img src={UpArrow2} alt="Up arrow" className="arrow mb-1" />
                  <p className="mb-0 ">
                    currently playing it or pending to do it?
                  </p>
                </div>
                <div className="position-absolute infoOvers d-flex flex-column align-items-start">
                  <img src={UpArrow3} alt="Up arrow" className="arrow" />
                  <p className="mb-0 ">is the game over?</p>
                </div>
                <div className="position-absolute infoLogin d-flex flex-column align-items-center mr-3">
                  <img src={UpArrow} alt="Up arrow" className="arrow mb-2" />
                  <p className="mb-0 ">Login to start!</p>
                </div>
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
