import {
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer flex flex-col items-center justify-center border-t text-xl shadow-2xl md:flex-row md:justify-around">
      <Link className="my__link mb-2 capitalize md:mb-0" to={"/"}>
        milk lovers
      </Link>
      <ul className="flex justify-center">
        <li>
          <a
            className="my__link p-2"
            href="https://github.com/Luega"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineGithub className="text- inline me-2" />
          </a>
        </li>
        <li>
          <a
            className="my__link p-2"
            href="https://linkedin.com/in/martinelliluca"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineLinkedin className="inline me-2" />
          </a>
        </li>
        <li>
          <a
            className="my__link p-2"
            href="mailto:lucamartinelli.developer@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineMail className="inline me-2" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
