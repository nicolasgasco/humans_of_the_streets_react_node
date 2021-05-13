import "./ColoredWrapper.css";

// Wrapper to add contrasting background
const ColoredWrapper = (props) => {
  const classes = "colored-wrapper " + props.className;
  return <div className={classes}>{props.children}</div>;
};
export default ColoredWrapper;
