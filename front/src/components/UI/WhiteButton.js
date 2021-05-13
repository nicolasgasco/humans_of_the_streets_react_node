import "./WhiteButton.css";

// Wrapper to style white/transparent buttons
const WhiteButton = (props) => {
  const classes = "white-button " + props.className;
  return <button type={props.type} onClick={props.onClick} className={classes}>{props.children}</button>;
};
export default WhiteButton;
