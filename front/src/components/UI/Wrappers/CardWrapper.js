import "./CardWrapper.css";

// Wrapper to format cards
const CardWrapper = (props) => {
  const classes = "grid-item " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default CardWrapper;
