import { useAppSelector } from "../../redux/hooks";
import SingleGenre from "./SingleGenre";
import { IGenre } from "../../redux/interfaces/IGame";

const Genres = () => {
  const allGenres = useAppSelector((state) => state.genres.allGenres);

  return (
    <>
      {allGenres.map((genre: IGenre, index: number) => (
        <SingleGenre data={genre} key={index} />
      ))}
    </>
  );
};

export default Genres;
