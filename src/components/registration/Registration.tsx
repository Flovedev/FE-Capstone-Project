import { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { registerUser } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";

const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleRegister = () => {
    dispatch(registerUser(newUser));
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center pb-5">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister();
          }}
        >
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="username"
              placeholder="Enter username"
              value={newUser.username}
              onChange={(e) =>
                setNewUser({ ...newUser, username: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Old password"
              value={newUser.password}
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
            />
          </Form.Group>

          <div className="d-flex justify-content-end">
            <Button variant="info" type="submit">
              Register
            </Button>
          </div>
        </Form>
      </Row>
    </Container>
  );
};

export default Registration;
