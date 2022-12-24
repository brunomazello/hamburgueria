import styles from "../Home/index.css";
import Carrousel from "../Carrousel/";
import Info from "../Info/";
import Location from "../Location/";
import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";

function Index() {
  return (
    <>
      <Navbar />
      <Carrousel />
      <Info />
      <Location />
      <Footer />
    </>
  );
}
export default Index;
