import { useAppSelector } from "../../redux/hooks";
import SingleGenre from "./SingleGenre";
import { IGenre } from "../../redux/interfaces/IGame";
import { useState } from "react";
import { Row } from "react-bootstrap";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const Genres = () => {
  const allGenres = useAppSelector((state) => state.genres.allGenres);
  const [display, setDisplay] = useState(true);

  return (
    <div className="userSectionButton my-4">
      <div
        className="d-flex align-items-center userSectionTItle mb-2"
        onClick={() => {
          setDisplay(!display);
        }}
      >
        <h1 className="flex-grow-1 ml-3">Genres:</h1>
        {display ? (
          <AiFillCaretDown className="mr-3" />
        ) : (
          <AiFillCaretUp className="mr-3" />
        )}
      </div>

      <Row
        className={`justify-content-center smoothDisplay mb-2 mx-3 ${
          display ? "" : "hidden"
        }`}
      >
        {display
          ? allGenres.map((genre: IGenre, index: number) => (
              <SingleGenre data={genre} key={index} />
            ))
          : ""}
      </Row>
    </div>
  );
};

export default Genres;
