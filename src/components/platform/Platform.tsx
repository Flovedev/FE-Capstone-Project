import { Container } from "react-bootstrap";
import { useAppSelector } from "../../redux/hooks";
import { IGame } from "../../redux/interfaces/IGame";
import SingleSearch from "../searchList/SingleSearch";

const Platform = () => {
  const platformName = useAppSelector((state) => state.platformGames.platform);
  const platformGames = useAppSelector((state) => state.platformGames.game);
  // console.log(platformGames);

  return (
    <Container>
      <h4>Best of {platformName}</h4>
      {platformGames &&
        platformGames?.map((e: IGame) => <SingleSearch data={e} key={e.id} />)}
    </Container>
  );
};

export default Platform;
