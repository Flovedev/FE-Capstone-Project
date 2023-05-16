import { Container } from "react-bootstrap";
import { useAppSelector } from "../../redux/hooks";
import SearchList from "../searchList/SearchList";
import { useEffect } from "react";

const Platform = () => {
  const platformName = useAppSelector((state) => state.platformGames.platform);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <h4>Best of {platformName}</h4>
      <SearchList />
    </Container>
  );
};

export default Platform;
