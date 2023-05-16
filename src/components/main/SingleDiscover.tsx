import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { IGame } from "../../redux/interfaces/IGame";
import { useState } from "react";
import { GET_SINGLE_GAME, getGame } from "../../redux/actions";

interface IProps {
  data: IGame;
}

const SingleDiscover = (props: IProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch({ type: GET_SINGLE_GAME, payload: "" });
    dispatch(getGame(props.data.id));
    navigate("/game");
  };

  const coverUrl = props?.data.cover?.url;
  const updatedUrl = coverUrl?.replace("/t_thumb", "/t_1080p");
  const [display, setDisplay] = useState(false);

  return (
    <>
      <img
        src={updatedUrl}
        alt="Game cover"
        onMouseEnter={() => setDisplay(true)}
        onMouseLeave={() => setDisplay(false)}
        onClick={() => {
          handleClick();
        }}
      />
      {display && (
        <div className="discoverDescription">
          <div className="d-flex">
            <p className="flex-grow-1">{props.data.name}</p>
            <span>{Math.round(props.data.rating)}/100</span>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleDiscover;
