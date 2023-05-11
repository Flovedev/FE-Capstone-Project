import { useState } from "react";
import { Button } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const InfoOver = () => {
  const [favourite, setFavourite] = useState(false);
  const [pending, setPending] = useState(false);
  const [over, setOver] = useState(false);

  return (
    <div className="position-absolute d-flex flex-column align-items-center overButtons overInfo pb-2">
      <div
        className="pointer mb-1"
        onClick={(e) => {
          e.preventDefault();
          setFavourite(!favourite);
        }}
      >
        {favourite ? (
          <AiFillStar size={40} color="yellow" />
        ) : (
          <AiOutlineStar size={40} color="grey" />
        )}
      </div>
      <div className="d-flex">
        <div
          onClick={(e) => {
            e.preventDefault();
            setPending(!pending);
            setOver(false);
          }}
        >
          {pending ? (
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
            setOver(!over);
            setPending(false);
          }}
        >
          {over ? (
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

export default InfoOver;
