import { Button, Container, Row, Form } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IUser } from "../../redux/interfaces/IUser";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
import { putMe } from "../../redux/actions";
import { toast } from "react-toastify";

const Profile = () => {
  const dispatch = useAppDispatch();
  const currentUser: IUser = useAppSelector((state) => state.users.userInfo);
  const [updatedUser, setUpdatedUser] = useState({
    username: currentUser.username,
    email: currentUser.email,
  });
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleEdit = () => {
    toast.success("Hola");
    if (
      oldPassword.length > 0 ||
      newPassword.length > 0 ||
      repeatPassword.length > 0
    ) {
      if (
        oldPassword.length > 3 ||
        newPassword.length > 3 ||
        repeatPassword.length > 3
      ) {
        if (newPassword !== repeatPassword) {
          console.log("new and repeat are different!");
        } else {
          if (newPassword === oldPassword) {
            console.log("new and old are the same!");
          } else {
            console.log("user and pass updated");
            dispatch(putMe({ ...updatedUser, password: newPassword }));
          }
        }
      } else {
        console.log("Minimo 3");
      }
    } else {
      console.log("user updated");
      dispatch(putMe(updatedUser));
    }
  };

  return (
    <Container className="my-5" style={{ height: "60vh" }}>
      <Row className="justify-content-center pb-5">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handleEdit();
          }}
        >
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="username"
              placeholder="Enter username"
              value={updatedUser.username}
              onChange={(e) =>
                setUpdatedUser({ ...updatedUser, username: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={updatedUser.email}
              onChange={(e) =>
                setUpdatedUser({ ...updatedUser, email: e.target.value })
              }
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          {currentUser.native && (
            <>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Update password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Old password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword2">
                <Form.Control
                  type="password"
                  placeholder="New password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword3">
                <Form.Control
                  type="password"
                  placeholder="Repeat password"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
              </Form.Group>
            </>
          )}

          <div className="d-flex justify-content-between mb-4">
            <DeleteModal />
            <Button variant="secondary" type="submit">
              Update
            </Button>
          </div>
        </Form>
      </Row>
    </Container>
  );
};

export default Profile;
