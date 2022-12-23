import styles from "../Home/index.css";
import Carrousel from "../Carrousel/";
import Info from "../Info/";
import Location from "../Location/";
import Footer from "../../layout/Footer";

function Index() {
  return (
    <>
      <Carrousel />
      <Info />
      <Location />
      <Footer />
    </>
  );
}
export default Index;
