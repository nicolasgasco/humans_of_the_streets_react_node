import styles from "./WhiteButton.module.css";

// Wrapper to style white/transparent buttons
const WhiteButton = (props) => {
  return <button type={props.type} onClick={props.onClick} className={`${styles["white-button"]} ${props.className}`}>{props.text}</button>;
};
export default WhiteButton;
