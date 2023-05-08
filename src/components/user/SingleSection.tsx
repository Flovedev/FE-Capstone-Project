import { Col, Form, FormControl, Row } from "react-bootstrap";
import SingleUserGame from "./SingleUserGame";
import { IOver } from "../../redux/interfaces/IUser";
import { useState } from "react";

interface IProps {
  data: IOver[];
  name: string;
}

const SingleSection = (props: IProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const ratingOrdered = props.data.sort((a, b) => b.rating - a.rating);
  const pageSize = 10;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const totalPages = Math.ceil(ratingOrdered.length / pageSize);

  const handlePageClick = (page: any) => {
    setCurrentPage(page);
  };

  return (
    <Row className="mt-5">
      <Col>
        <div className="d-flex">
          <h2 className="flex-grow-1">{props.name}</h2>
          <Form>
            <FormControl placeholder="Filter..." />
          </Form>
        </div>
        <div>
          {ratingOrdered.slice(startIndex, endIndex).map((e: IOver) => (
            <SingleUserGame data={e} key={e._id} />
          ))}
        </div>
        <div>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button key={page} onClick={() => handlePageClick(page)}>
              {page}
            </button>
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default SingleSection;
