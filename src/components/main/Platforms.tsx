import { Row } from "react-bootstrap";
import { useAppSelector } from "../../redux/hooks";
import { IPlatform } from "../../redux/interfaces/IGame";
import { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

import SinglePlatform from "./SinglePlatform";

const Platforms = () => {
  const allPlatforms = useAppSelector((state) => state.platforms.allPlatforms);
  const [display, setDisplay] = useState(false);

  return (
    <div className="userSectionButton my-4">
      <div
        className="d-flex align-items-center userSectionTItle border-bottom border-dark"
        onClick={() => {
          setDisplay(!display);
        }}
      >
        <h2 className="flex-grow-1 ml-3">All platforms</h2>
        {display ? (
          <AiFillCaretDown className="mr-3" />
        ) : (
          <AiFillCaretUp className="mr-3" />
        )}
      </div>

      <Row
        className={`justify-content-center smoothDisplay ${
          display ? "" : "hidden"
        }`}
      >
        {display
          ? allPlatforms.map((platform: IPlatform, index: number) => (
              <SinglePlatform data={platform} key={index} />
            ))
          : ""}
      </Row>
    </div>
  );
};

export default Platforms;
