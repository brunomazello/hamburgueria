import styles from "../Navbar/index.css";
import hamburgueriaLOGO from "../../../img/hamburgueria-logo.png";
import ScrollTop from "../ScrollTop";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

function index() {
  return (
    <nav className="nav__container">
      <img src={hamburgueriaLOGO} alt="" id="inicio" />
      <ul className="nav__menu">
        <li>
          <Link
            activeClass="active"
            to="inicio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="cardapio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Cardápio
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="local"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contato
          </Link>
        </li>
      </ul>
      <ScrollTop />
    </nav>
  );
}

export default index;
