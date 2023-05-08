import { IOver } from "../../redux/interfaces/IUser";

interface IProps {
  data: IOver;
}

const SingleUserGame = (props: IProps) => {
  return (
    <div>
      <p>Just one :D</p>
    </div>
  );
};

export default SingleUserGame;
