import Discover from "./Discover";
import Genres from "./Genres";
import { Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import {
  getDiscover,
  getGenres,
  getPlatforms,
  userLogin,
} from "../../redux/actions";
import { useAppDispatch } from "../../redux/hooks";
import Platforms from "./Platforms";

const Main = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getPlatforms());
    dispatch(getDiscover());
    dispatch(userLogin("flo@email.com", "1234"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container fluid className="mainSection py-3">
        <h1>Discover:</h1>

        <Row className="justify-content-center my-4">
          <Discover />
        </Row>
        <h1>Genres:</h1>
        <Row className="justify-content-center mx-5 px-5 my-4">
          <Genres />
        </Row>
        <h1>Platforms:</h1>
        <Row className="justify-content-center my-4">
          <Platforms />
        </Row>
      </Container>
    </>
  );
};

export default Main;
