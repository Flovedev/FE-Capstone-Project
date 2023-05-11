import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { deleteMe } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

const DeleteModal = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    navigate("/");
    dispatch(deleteMe());
  };

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Delete account
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete your account?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You are about to delete your account, this will be permanent. Are you
          sure?{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => {
              handleDelete();
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModal;
