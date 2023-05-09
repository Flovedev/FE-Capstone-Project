import { Col, Form, FormControl, Row } from "react-bootstrap";
import SingleUserGame from "./SingleUserGame";
import { IOver } from "../../redux/interfaces/IUser";
import { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

interface IProps {
  data: IOver[];
  name: string;
}

const SingleSection = (props: IProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [over, setOver] = useState(false);
  const avoidMutation = [...props.data];
  const ratingOrdered = avoidMutation.sort((a, b) => b.rating - a.rating);
  const pageSize = 10;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const totalPages = Math.ceil(ratingOrdered.length / pageSize);

  const handlePageClick = (page: any) => {
    setCurrentPage(page);
  };

  return (
    <div className="userSectionButton mt-5">
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
      {over && (
        <Row className="mt-5">
          <Col>
            <div className="d-flex">
              <Form>
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
                  <button key={page} onClick={() => handlePageClick(page)}>
                    {page}
                  </button>
                )
              )}
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default SingleSection;
