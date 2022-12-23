import hamburguerIMG from "../../../img/hamburguer.png";
import background from "../../../img/bg-2.png";

function index(props) {
  return (
    <div
      className="home__container"
      style={{
        backgroundImage: `url(${background})`,
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <img src={hamburguerIMG} alt="" />
      <div className="home__desc">
        <h1>{props.titulo}</h1>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default index;
