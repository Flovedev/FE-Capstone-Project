import { Button, Col, Dropdown, Form, FormControl, Row } from "react-bootstrap";
import SingleUserGame from "./SingleUserGame";
import { IOver } from "../../redux/interfaces/IUser";
import { useState, useRef } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { HiSortDescending, HiSortAscending } from "react-icons/hi";

interface IProps {
  data: IOver[];
  name: string;
  state: boolean;
}

const SingleSection = (props: IProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [over, setOver] = useState(props.state);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("Rating ascending");

  const avoidMutation = [...props.data];
  let finalList: any[] = [];

  if (sort === "Rating ascending") {
    finalList = avoidMutation.sort((a, b) => b.rating - a.rating);
  } else if (sort === "Rating descending") {
    finalList = avoidMutation.sort((a, b) => a.rating - b.rating);
  } else if (sort === "Name ascending") {
    finalList = avoidMutation.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "Name descending") {
    finalList = avoidMutation.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sort === "Release ascending") {
    finalList = avoidMutation.sort((a, b) => {
      const dateA = new Date(a.release_date);
      const dateB = new Date(b.release_date);
      return dateA.getTime() - dateB.getTime();
    });
  } else if (sort === "Release descending") {
    finalList = avoidMutation.sort((a, b) => {
      const dateA = new Date(a.release_date);
      const dateB = new Date(b.release_date);
      return dateB.getTime() - dateA.getTime();
    });
  }

  if (filter.length > 1) {
    finalList = finalList.filter((game) => {
      const normalizedGameName = game.name
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      const normalizedSearchTerm = filter
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      return normalizedGameName
        .toLowerCase()
        .includes(normalizedSearchTerm.toLowerCase());
    });
  }

  const pageSize = 10;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const totalPages = Math.ceil(finalList.length / pageSize);
  const topRef = useRef<HTMLDivElement>(null);

  const handlePageClick = (page: any) => {
    setCurrentPage(page);
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="userSectionButton mt-5" ref={topRef}>
      <div
        className="d-flex align-items-center userSectionTItle border-bottom border-dark"
        onClick={() => {
          setOver(!over);
        }}
      >
        <h2 className="ml-2 flex-grow-1">{props.name}</h2>
        {over ? (
          <AiFillCaretDown className="mr-3" />
        ) : (
          <AiFillCaretUp className="mr-3" />
        )}
      </div>

      <Row className={`smoothDisplay ${over ? "" : "hidden"}`}>
        {over ? (
          avoidMutation.length === 0 ? (
            <Col>
              <p className="ml-3 mt-2">Add some games!</p>
            </Col>
          ) : (
            <Col>
              <div className="d-flex mt-2">
                <div className="d-flex flex-grow-1">
                  <Form className="ml-2">
                    <FormControl
                      placeholder="Filter by name..."
                      value={filter}
                      onChange={(e) => {
                        setFilter(e.target.value);
                      }}
                    />
                  </Form>
                </div>
                <div className="d-flex align-items-center mr-2">
                  <p className="mb-0 ml-4">Sort by:</p>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="secondary"
                      id="dropdown-basic"
                      className="ml-1"
                    >
                      {sort}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => setSort("Rating descending")}
                      >
                        Rating {<HiSortDescending />}
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => setSort("Name descending")}>
                        Name {<HiSortDescending />}
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setSort("Release descending")}
                      >
                        Release {<HiSortDescending />}
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setSort("Rating ascending")}
                      >
                        Rating {<HiSortAscending />}
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => setSort("Name ascending")}>
                        Name {<HiSortAscending />}
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setSort("Release ascending")}
                      >
                        Release {<HiSortAscending />}
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div>
                {finalList?.slice(startIndex, endIndex).map((e: IOver) => (
                  <SingleUserGame data={e} key={e.id} />
                ))}
              </div>
              {totalPages > 1 && (
                <div>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <Button
                        variant={"secondary"}
                        className="m-1"
                        key={page}
                        onClick={() => handlePageClick(page)}
                      >
                        {page}
                      </Button>
                    )
                  )}
                </div>
              )}
            </Col>
          )
        ) : (
          ""
        )}
      </Row>
    </div>
  );
};

export default SingleSection;
