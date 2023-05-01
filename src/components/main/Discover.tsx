import testinCarousel from "../../assets/testingCarousel.jpg";
import { useAppSelector } from "../../redux/hooks";
import { IGame } from "../../redux/interfaces/IGame";
import SingleDiscover from "./SingleDiscover";

const Discover = () => {
  const discover = useAppSelector((state) => state.discover.games);
  console.log(discover);

  return (
    <section>
      {discover.map((e: IGame) => (
        <SingleDiscover data={e} key={e.id} />
      ))}
    </section>
  );
};

export default Discover;
