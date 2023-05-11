import { Col, Container, Row } from "react-bootstrap";
import InfoImg from "../../assets/info.jpg";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import InfoOver from "./InfoOver";

const Info = () => {
  const [display, setDisplay] = useState(true);

  return (
    <>
      {display ? (
        <Container fluid className="info px-0">
          <Row>
            <img src={InfoImg} alt="Info background" className="infoImg" />
            <Col className="position-relative">
              <div className="infoText position-absolute p-2">
                <p className="justify-content-center mb-0">
                  Track your games easily with{" "}
                  <span className="infoSpan">GAMES OVER</span>.
                </p>
                <p>Try out our controller!</p>
              </div>
            </Col>
            <Col>
              <AiFillCloseCircle
                className="float-right mr-2"
                onClick={() => {
                  setDisplay(false);
                }}
              />
              <div className="position-abosulute">
                <InfoOver />
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        <div
          className="float-right"
          onClick={() => {
            setDisplay(true);
          }}
        >
          <p>Info</p>
        </div>
      )}
    </>
  );
};

export default Info;
