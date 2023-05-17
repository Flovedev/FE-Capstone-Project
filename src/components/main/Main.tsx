import Discover from "./Discover";
import Genres from "./Genres";
import { Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import { getDiscover, getGenres, getPlatforms } from "../../redux/actions";
import { useAppDispatch } from "../../redux/hooks";
import Platforms from "./Platforms";
import Info from "./Info";
import { getMe } from "../../redux/actions";
import Cookies from "js-cookie";

const Main = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getGenres());
    dispatch(getPlatforms());
    dispatch(getDiscover());
    const tokenCookie = Cookies.get("accessToken");
    if (tokenCookie) {
      localStorage.setItem("accessToken", tokenCookie);
      dispatch(getMe());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Info />
      <Container fluid className="mainSection py-3">
        <h1>Discover:</h1>
        <Row className="justify-content-center my-4">
          <Discover />
        </Row>
        <Genres />
        <Platforms />
      </Container>
    </>
  );
};

export default Main;
