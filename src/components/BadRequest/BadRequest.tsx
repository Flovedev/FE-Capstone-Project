import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const BadRequest = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
      <h1 className="mb-5">404 page not found</h1>
      <h5>THANK YOU!</h5>
      <p className="mb-5">BUT OUR LINK IS IN ANOTHER CASTLE!</p>
      <Button variant="success" onClick={() => navigate("/")}>
        HOME
      </Button>
    </div>
  );
};

export default BadRequest;
