import { useNavigate } from "react-router-dom";
import { GET_SINGLE_GAME, getGame } from "../../redux/actions";
import { useAppDispatch } from "../../redux/hooks";

interface IProps {
  data: any;
}

const SingleSearch = (props: IProps) => {
  // console.log(props.data);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch({ type: GET_SINGLE_GAME, payload: "" });
    dispatch(getGame(props.data.id));
    navigate("/game");
  };

  return (
    <div
      className="singleSearch"
      onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}
    >
      <p>{props.data.name}</p>
    </div>
  );
};

export default SingleSearch;
