import { Button } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IGame } from "../../redux/interfaces/IGame";
import { favouritesRequest } from "../../redux/actions";

interface IProps {
  data: IGame["id"];
}

const Over = (props: IProps) => {
  const dispatch = useAppDispatch();

  const currentUser = useAppSelector((state) => state.users.userInfo);
  const currentUserToken = useAppSelector((state) => state.users.token);
  //   console.log(props.data);
  //   console.log(currentUser);
  //   console.log(currentUserToken);
  return (
    <div className="d-flex flex-column align-items-center overButtons">
      {currentUser?.games.favourites.includes(props.data.toString()) ? (
        <AiFillStar
          size={40}
          color="yellow"
          className="pointer ml-1"
          onClick={(e) => {
            e.preventDefault();
            dispatch(favouritesRequest(currentUserToken, props.data));
          }}
        />
      ) : (
        <AiOutlineStar
          size={40}
          color="grey"
          className="pointer ml-1"
          onClick={(e) => {
            e.preventDefault();
            dispatch(favouritesRequest(currentUserToken, props.data));
          }}
        />
      )}

      <div className="d-flex">
        {currentUser?.games.pending.includes(props.data) ? (
          <Button variant="warinng" className="py-0 mr-1">
            toPlay
          </Button>
        ) : (
          <Button variant="secondary" className="py-0 mr-1">
            toPlay
          </Button>
        )}

        {currentUser?.games.over.includes(props.data) ? (
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
