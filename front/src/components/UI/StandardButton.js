import { Link } from "react-router-dom";
import classes from "./StandardButton.module.css";

function StandardButton(props) {
  return (
    <Link to={props.to}><div className={`${classes["standard-button"]} ${props.className}`}>{props.text}</div></Link> 
  );
}

export default StandardButton;
