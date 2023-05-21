import { Button, Container, Spinner } from "react-bootstrap";
import { useAppSelector } from "../../redux/hooks";
import { useState, useEffect } from "react";
import SingleUser from "./SingleUser";
import { IUser } from "../../redux/interfaces/IUser";

const UserList = () => {
  const allSearch = useAppSelector((state) => state.usersList.allUsers);

  const [currentPage, setCurrentPage] = useState(1);
  const avoidMutation = [...allSearch];
  const pageSize = 10;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const totalPages = Math.ceil(avoidMutation.length / pageSize);

  const handlePageClick = (page: any) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!allSearch) {
    return (
      <Container
        style={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <Spinner animation="grow" variant="success" />
      </Container>
    );
  }

  return (
    <Container className="mt-3 flex-grow-1">
      {allSearch.length === 0 && <h3>Not found!</h3>}
      {allSearch &&
        avoidMutation
          .slice(startIndex, endIndex)
          .map((e: IUser) => <SingleUser data={e} key={e._id} />)}

      {totalPages > 1 && (
        <div>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              variant={"secondary"}
              className="m-1"
              key={page}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </Button>
          ))}
        </div>
      )}
    </Container>
  );
};

export default UserList;
