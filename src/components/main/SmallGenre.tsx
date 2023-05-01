import { IGenres } from "../../redux/interfaces/IGenres";

interface IProps {
  data: IGenres;
}

const SmallGenre = (props: IProps) => {
  return <div className="smallGenres m-1 p-1">{props.data.name}</div>;
};

export default SmallGenre;
