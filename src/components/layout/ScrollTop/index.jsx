import styles from "../ScrollTop/index.css";
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
    <div className="scrolltop_container">
      <span class="material-symbols-outlined">
        <Link
          activeClass="active"
          to="inicio"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          keyboard_control_key
        </Link>
      </span>
    </div>
  );
}

export default index;
