import { Button, Form, FormControl, Modal } from "react-bootstrap";
import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { putMe } from "../../redux/actions";
import { AiOutlineEdit } from "react-icons/ai";

interface IProps {
  data: string | undefined;
}

const InfoModal = (props: IProps) => {
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState(props.data);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className="speech-bubble d-flex align-items-center"
        onClick={handleShow}
      >
        <p className="px-2 mb-0 flex-grow-1">{props.data}</p>
        <AiOutlineEdit size={20} className="mr-2" />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit your bio?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            className="d-flex"
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(putMe({ info: info }));
              handleClose();
            }}
          >
            <FormControl
              value={info}
              onChange={(e) => setInfo(e.target.value)}
              maxLength={30}
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
            <Button variant="secondary" type="submit" className="ml-2">
              Update
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default InfoModal;
