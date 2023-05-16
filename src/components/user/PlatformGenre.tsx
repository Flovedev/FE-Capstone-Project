import { Container } from "react-bootstrap";
import { useAppSelector } from "../../redux/hooks";
import SearchList from "../searchList/SearchList";
import { useEffect } from "react";

const PlatformGenre = () => {
  const platformGenreName = useAppSelector((state) => state.search.title);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <h4>Best of {platformGenreName}</h4>
      <SearchList />
    </Container>
  );
};

export default PlatformGenre;
