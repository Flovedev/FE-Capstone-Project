import { IGame } from "../../redux/interfaces/IGame";
import { useState } from "react";

interface IProps {
  data: IGame;
}

const SingleDiscover = (props: IProps) => {
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
      />
      {display && (
        <div className="discoverDescription">
          <div className="d-flex">
            <p className="flex-grow-1">{props.data.name}</p>
            <span>{parseInt(props.data.rating)}/100</span>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleDiscover;
