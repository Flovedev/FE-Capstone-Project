import { Button } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useAppSelector } from "../../redux/hooks";
import { IGame } from "../../redux/interfaces/IGame";

interface IProps {
  data: IGame["id"];
}

const Over = (props: IProps) => {
  const currentUser = useAppSelector((state) => state.users.userInfo);
  console.log(props.data);
  console.log(currentUser);
  return (
    <div className="d-flex flex-column align-items-center overButtons">
      {currentUser.user.games.favourites.includes(props.data) ? (
        <AiFillStar size={40} color="yellow" />
      ) : (
        <AiOutlineStar size={40} color="grey" />
      )}

      <div className="d-flex">
        {currentUser.user.games.pending.includes(props.data) ? (
          <Button variant="warinng" className="py-0">
            toPlay
          </Button>
        ) : (
          <Button variant="secondary" className="py-0">
            toPlay
          </Button>
        )}

        {currentUser.user.games.over.includes(props.data) ? (
          <Button variant="success" className="py-0 pr-3">
            Over
          </Button>
        ) : (
          <Button variant="secondary" className="py-0 pr-3">
            Over
          </Button>
        )}
      </div>
    </div>
  );
};

export default Over;
