import { Link } from "react-router-dom";
import "./StandardButton.css";

function StandardButton(props) {
  return (
    <button className="btn fourth">{props.text}</button>
  );
}

export default StandardButton;
