import { Button, Col, Form, FormControl, Row } from "react-bootstrap";
import SingleUserGame from "./SingleUserGame";
import { IOver } from "../../redux/interfaces/IUser";
import { useState, useRef } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

interface IProps {
  data: IOver[];
  name: string;
  state: boolean;
}

const SingleSection = (props: IProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [over, setOver] = useState(props.state);
  const avoidMutation = [...props.data];
  const ratingOrdered = avoidMutation.sort((a, b) => b.rating - a.rating);
  const pageSize = 10;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const totalPages = Math.ceil(ratingOrdered.length / pageSize);

  const topRef = useRef<HTMLDivElement>(null);

  const handlePageClick = (page: any) => {
    setCurrentPage(page);
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={"userSectionButton mt-5"} ref={topRef}>
      <div
        className="d-flex align-items-center"
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
          <Col>
            <div className="d-flex">
              <Form className="ml-2">
                <FormControl placeholder="Filter..." />
              </Form>
            </div>
            <div>
              {ratingOrdered.slice(startIndex, endIndex).map((e: IOver) => (
                <SingleUserGame data={e} key={e.id} />
              ))}
            </div>
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
          </Col>
        ) : (
          ""
        )}
      </Row>
    </div>
  );
};

export default SingleSection;
