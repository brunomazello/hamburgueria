import styles from "../Footer/index.css";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineWhatsApp,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footer_container">
      <footer>
        <a href="#" target="_blank" rel="noreferrer">
          <AiFillInstagram />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <AiFillFacebook />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <AiOutlineWhatsApp />
        </a>
      </footer>
      <h2>Todos os direitos reservados &copy;</h2>
    </div>
  );
};

export default Footer;
