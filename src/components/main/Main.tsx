import Discover from "./Discover";
import Genres from "./Genres";
import NavBar from "./NavBar";
import { Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import { getGenres } from "../../redux/actions";
import { useAppDispatch } from "../../redux/hooks";

const Main = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, []);
  return (
    <>
      <NavBar />
      <Container fluid className="mainSection py-3">
        <h1>Discover:</h1>

        <Row className="justify-content-center">
          <Discover />
        </Row>
        <h1>Genres:</h1>
        <Row>
          <Genres />
        </Row>
        <h1>Platforms:</h1>
      </Container>
    </>
  );
};

export default Main;
