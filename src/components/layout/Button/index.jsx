import styles from "../Button/index.css";

export default function index(props) {
  return (
    <div className="btn-button_container">
      <button className="btn-button">
        <a href={props.url} target="_blank">
          {props.texto}
        </a>
      </button>
    </div>
  );
}
