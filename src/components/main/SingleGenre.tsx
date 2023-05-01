import { IGenres } from "../../redux/interfaces/IGenres";

interface IProps {
  data: IGenres;
}

const SingleGenre = (props: IProps) => {
  return <div className="genres m-1 p-1">{props.data.name}</div>;
};

export default SingleGenre;
