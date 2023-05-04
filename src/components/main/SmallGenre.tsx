import { IGenre } from "../../redux/interfaces/IGame";

interface IProps {
  data: IGenre;
}

const SmallGenre = (props: IProps) => {
  return <div className="smallGenres m-1 p-1">{props.data.name}</div>;
};

export default SmallGenre;
