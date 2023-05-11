import { Button } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { overRequest } from "../../redux/actions";
import { IOver } from "../../redux/interfaces/IUser";

interface IProps {
  data: IOver;
}

const Over = (props: IProps) => {
  const dispatch = useAppDispatch();

  const currentUser = useAppSelector((state) => state.users.userInfo);
  const currentUserToken = localStorage.getItem("accessToken");
  //   console.log(props.data);
  //   console.log(currentUser);
  //   console.log(currentUserToken);
  return (
    <div className="d-flex flex-column align-items-center overButtons pb-2">
      <div
        className="pointer mb-1"
        onClick={(e) => {
          e.preventDefault();
          dispatch(overRequest("favourites", props.data));
        }}
      >
        {currentUser?.games?.favourites?.some(
          (e: IOver) => e.id === props.data.id
        ) ? (
          <AiFillStar size={40} color="yellow" />
        ) : (
          <AiOutlineStar size={40} color="grey" />
        )}
      </div>
      <div className="d-flex">
        <div
          onClick={(e) => {
            e.preventDefault();
            dispatch(overRequest("pending", props.data));
          }}
        >
          {currentUser?.games?.pending?.some(
            (e: IOver) => e.id === props.data.id
          ) ? (
            <Button variant="warning" className="py-0 pr-1 pl-4 pb-1">
              toPlay
            </Button>
          ) : (
            <Button variant="secondary" className="py-0 pr-1 pl-4 pb-1">
              toPlay
            </Button>
          )}
        </div>
        <div
          className="ml-1"
          onClick={(e) => {
            e.preventDefault();
            dispatch(overRequest("over", props.data));
          }}
        >
          {currentUser?.games?.over?.some(
            (e: IOver) => e.id === props.data.id
          ) ? (
            <Button variant="success" className="py-0 pl-1 pb-1 pr-4">
              Over!!
            </Button>
          ) : (
            <Button variant="secondary" className="py-0 pl-1 pb-1 pr-4">
              Over!!
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Over;
