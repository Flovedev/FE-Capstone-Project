import { Col, Row } from "react-bootstrap";
import { useAppSelector } from "../../redux/hooks";
import { IGame } from "../../redux/interfaces/IGame";
import SingleDiscover from "./SingleDiscover";

const Discover = () => {
  const discover = useAppSelector((state) => state.discover.games);

  return (
    <Row className="justify-content-center my-4 pb-5 flex-column align-items-center">
      <h2 className="mb-4">FEATURED & RECOMMENDED</h2>
      <div className="position-relative">
        <section>
          {discover.map((e: IGame) => (
            <SingleDiscover data={e} key={e.id} />
          ))}
        </section>
      </div>
    </Row>
  );
};

export default Discover;
