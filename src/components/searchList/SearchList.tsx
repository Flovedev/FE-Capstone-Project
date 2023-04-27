import { Container } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import SingleSearch from "./SingleSearch";

const SearchList = () => {
  const dispatch = useAppDispatch();
  let allSearch = useAppSelector((state) => state.search.allSearch);

  return (
    <Container>
      {allSearch?.map((item: any, index: number) => (
        <SingleSearch data={item} key={index} />
      ))}
    </Container>
  );
};

export default SearchList;
