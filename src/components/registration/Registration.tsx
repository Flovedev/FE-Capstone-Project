import { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { registerUser } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import GoogleButton from "react-google-button";

const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    repeat: "",
  });
  const [passwordError, setPasswordError] = useState(false);

  const handleRegister = () => {
    if (newUser.password !== newUser.repeat) {
      setPasswordError(true);
    } else {
      dispatch(registerUser(newUser));
      navigate("/");
    }
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
              placeholder="Enter password"
              value={newUser.password}
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword2">
            <Form.Label>Repeat password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password again"
              value={newUser.repeat}
              onChange={(e) =>
                setNewUser({ ...newUser, repeat: e.target.value })
              }
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            {passwordError ? (
              <Button variant="danger" type="submit">
                Passwords don't match
              </Button>
            ) : (
              <Button variant="info" type="submit">
                Register
              </Button>
            )}
          </div>
        </Form>
      </Row>
      <Row className="justify-content-center">
        <a href={`${process.env.REACT_APP_BE_URL}/users/googleLogin`}>
          <GoogleButton />
        </a>
      </Row>
    </Container>
  );
};

export default Registration;
