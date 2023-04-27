import Discover from "./Discover";
import Genres from "./Genres";
import NavBar from "./NavBar";
import { Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import { getGenres, getPlatforms } from "../../redux/actions";
import { useAppDispatch } from "../../redux/hooks";
import Platforms from "./Platforms";
import Footer from "./Footer";

const Main = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getPlatforms());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
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
        <Platforms />
      </Container>
    </>
  );
};

export default Main;
