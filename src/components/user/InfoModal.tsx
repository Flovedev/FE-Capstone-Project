import { Button, Form, FormControl, Modal } from "react-bootstrap";
import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { putMe } from "../../redux/actions";

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
      <p className="speech-bubble px-2" onClick={handleShow}>
        {props.data}
      </p>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit your bio?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(putMe({ info: info }));
              handleClose();
            }}
          >
            <FormControl
              value={info}
              onChange={(e) => setInfo(e.target.value)}
              maxLength={100}
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
            <Button type="submit" variant="info">
              Update
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default InfoModal;
