import styles from "./DarkButton.module.css";

// Wrapper to style dark/transparent buttons
const DarkButton = (props) => {
  return <button type={props.type} onClick={props.onClick} className={styles["dark-button"]}>{props.text}</button>;
};
export default DarkButton;
