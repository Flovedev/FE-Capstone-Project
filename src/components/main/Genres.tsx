import { useAppSelector } from "../../redux/hooks";
import { IGenres } from "../../redux/interfaces/IGenres";
import SingleGenre from "./SingleGenre";

const Genres = () => {
  const allGenres = useAppSelector((state) => state.genres.allGenres);

  return (
    <>
      {allGenres.map((genre: IGenres, index: number) => (
        <SingleGenre data={genre} key={index} />
      ))}
    </>
  );
};

export default Genres;
