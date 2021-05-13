import { Link } from "react-router-dom";
import "./StandardButton.css";

function StandardButton(props) {
  return (
    <Link to={props.link} className="standard-button">{props.text}</Link> 
  );
}

export default StandardButton;
