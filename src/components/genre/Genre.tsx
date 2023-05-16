import { Container } from "react-bootstrap";
import { useAppSelector } from "../../redux/hooks";
import SearchList from "../searchList/SearchList";
import { useEffect } from "react";

const Genre = () => {
  const genreName = useAppSelector((state) => state.genreGames.genre);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <h2 className="mt-3">Best of {genreName}</h2>
      <SearchList />
    </Container>
  );
};

export default Genre;
