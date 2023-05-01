import { Container } from "react-bootstrap";
import { useAppSelector } from "../../redux/hooks";
import SingleSearch from "./SingleSearch";
import { IGame } from "../../redux/interfaces/IGame";

const SearchList = () => {
  const allSearch = useAppSelector((state) => state.search.allSearch);

  return (
    <Container className="mt-3">
      {allSearch &&
        allSearch?.map((item: IGame) => (
          <SingleSearch data={item} key={item.id} />
        ))}
    </Container>
  );
};

export default SearchList;
