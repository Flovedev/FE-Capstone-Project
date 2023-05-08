import { Container, Row, Col, FormControl, Form } from "react-bootstrap";
import { useAppSelector } from "../../redux/hooks";
import { IOver, IUser } from "../../redux/interfaces/IUser";
import SingleUserGame from "./SingleUserGame";

const User = () => {
  const currentUser: IUser = useAppSelector((state) => state.users.userInfo);

  return (
    <Container>
      <Row>
        <Col>
          <img src={currentUser.avatar} alt="User Avatar" />
        </Col>
        <Col>
          <h4>{currentUser.username}</h4>
          <h6>{currentUser.email}</h6>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="d-flex">
            <h5>Favourites</h5>
            <Form>
              <FormControl placeholder="Filter..." />
            </Form>
          </div>
          <div>
            {currentUser.games.favourites.map((e: IOver, i: number) => (
              <SingleUserGame data={e} key={i} />
            ))}
          </div>
        </Col>
      </Row>
      <Row>
        <h5>toPlay</h5>
        <Form>
          <FormControl placeholder="Filter..." />
        </Form>
      </Row>
      <Row>
        <h5>Over!!</h5>
        <Form>
          <FormControl placeholder="Filter..." />
        </Form>
      </Row>
    </Container>
  );
};

export default User;
