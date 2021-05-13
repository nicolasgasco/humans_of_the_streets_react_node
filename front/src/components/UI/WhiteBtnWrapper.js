import "./WhiteBtnWrapper.css";

// Wrapper to style white/transparent buttons
const WhiteBtnWrapper = (props) => {
  const classes = "whitebtn-wrapper " + props.className;
  return <div className={classes}>{props.children}</div>;
};
export default WhiteBtnWrapper;
