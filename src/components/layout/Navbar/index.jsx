import styles from "../Navbar/index.css";
import hamburgueriaLOGO from "../../../img/hamburgueria-logo.png";

function index() {
  return (
    <nav className="nav__container">
      <img src={hamburgueriaLOGO} alt="" />
      <ul className="nav__menu">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Cardápio</a>
        </li>
        <li>
          <a href="">Contato</a>
        </li>
      </ul>
    </nav>
  );
}

export default index;
