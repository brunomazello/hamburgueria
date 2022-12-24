import styles from "./index.css";
import hamburguer from "../../../img/hamburguer-2.png";

function index() {
  return (
    <div className="info__container" id="cardapio">
      <div className="info__text">
        <h1>Sabor, Experiência e Hambúrguer!</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quam
          iusto sed aut sunt rerum sequi voluptates illo quaerat quod delectus
          saepe exercitationem voluptas dolor sit, suscipit nostrum expedita
          temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quam quod modi quos magni, doloremque fugit, repudiandae iusto velit
          quaerat suscipit nisi accusantium veritatis quo ad, architecto culpa
          repellat soluta? Omnis!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, et
          voluptatum enim praesentium natus corrupti recusandae veniam similique
          itaque maiores blanditiis architecto esse harum reprehenderit, quidem
          dolore porro explicabo possimus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          maiores ab eligendi, illum ipsam doloribus? Fugit illum illo
          voluptatum voluptatibus repellat debitis ducimus cum distinctio. Cum
          odit excepturi itaque ipsum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          recusandae dolore tenetur accusamus alias quod esse, facilis assumenda
          deserunt at eligendi sapiente consectetur culpa ad! Vero in a amet
          doloremque.
        </p>
      </div>
      <div className="hamburguer-img">
        <img src={hamburguer} alt="" />
      </div>
    </div>
  );
}
export default index;
