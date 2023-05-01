import { Container } from "react-bootstrap";
import { useAppSelector } from "../../redux/hooks";
import SingleSearch from "./SingleSearch";

const SearchList = () => {
  const allSearch = useAppSelector((state) => state.search.allSearch);

  return (
    <Container>
      {allSearch &&
        allSearch?.map((item: any, index: number) => (
          <SingleSearch data={item} key={index} />
        ))}
    </Container>
  );
};

export default SearchList;
