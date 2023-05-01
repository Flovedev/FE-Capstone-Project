import { Container } from "react-bootstrap";
import SingleGenreGame from "./SingleGenreGame";
import { useAppSelector } from "../../redux/hooks";
import { IGame } from "../../redux/interfaces/IGame";

const Genre = () => {
  const genreName = useAppSelector((state) => state.genreGames.genre);
  const genreGames = useAppSelector((state) => state.genreGames.game);

  return (
    <Container>
      <h4>Best of {genreName}</h4>
      {genreGames &&
        genreGames?.map((e: IGame) => <SingleGenreGame data={e} key={e.id} />)}
    </Container>
  );
};

export default Genre;
