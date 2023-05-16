import { Container } from "react-bootstrap";
import { useAppSelector } from "../../redux/hooks";
import SearchList from "../searchList/SearchList";
import { useEffect } from "react";

const PlatformGenre = () => {
  const platformGenreName = useAppSelector((state) => state.search.title);

  return (
    <Container>
      <h4>Best of {platformGenreName}</h4>
      <SearchList />
    </Container>
  );
};

export default PlatformGenre;
