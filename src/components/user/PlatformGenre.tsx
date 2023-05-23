import { Container } from "react-bootstrap";
import { useAppSelector } from "../../redux/hooks";
import SearchList from "../searchList/SearchList";

const PlatformGenre = () => {
  const platformGenreName = useAppSelector((state) => state.search.title);

  return (
    <Container className="mt-3">
      <h3>Best of {platformGenreName}</h3>
      <SearchList />
    </Container>
  );
};

export default PlatformGenre;
