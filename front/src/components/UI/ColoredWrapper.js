import "./ColoredWrapper.css";

const ColoredWrapper = (props) => {
  const classes = "colored-wrapper " + props.className;
  return <div className={classes}>{props.children}</div>;
};
export default ColoredWrapper;
