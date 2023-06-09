import { AiFillGithub, AiOutlineCopyrightCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer d-flex flex-column align-items-center mt-5 mb-3">
      <h6 className="mt-3">CONTACT ME:</h6>
      <div className="d-flex mb-1">
        <a href="https://github.com/Flovedev">
          <div className="m-1 mx-3">
            <AiFillGithub size={40} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/florencio-villanueva-111876261/">
          <div className="m-1 mx-3">
            <BsLinkedin size={40} />
          </div>
        </a>
      </div>
      <p className="mb-0">flove.dev@gmail.com</p>
      <div className="d-flex align-items-center mt-2">
        <AiOutlineCopyrightCircle />
        <span className="mx-2">2023</span>
        <p className="mb-0">Florencio Villanueva</p>
      </div>
    </div>
  );
};

export default Footer;
