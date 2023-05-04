import { useState } from "react";
import { Modal } from "react-bootstrap";
import { IScreenshot } from "../../redux/interfaces/IGame";

interface IProps {
  data: IScreenshot;
}

function ImageModal(props: IProps) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const coverUrl = props.data.url;
  const updatedUrl = coverUrl?.replace("/t_thumb", "/t_1080p");

  return (
    <>
      <img
        src={updatedUrl}
        alt="Game screenshot"
        className="screenshots pointer m-1"
        onClick={handleShow}
      />

      <Modal
        size="xl"
        show={show}
        onHide={handleClose}
        dialogClassName="screenshotsModal mt-5 pt-5"
      >
        <Modal.Body className="p-0">
          <img src={updatedUrl} alt="Game cover" className="modalImage" />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ImageModal;
