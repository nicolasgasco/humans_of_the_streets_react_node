import "./CardWrapper.css";

const CardWrapper = (props) => {
  //   const classes = "card-wrapper " + props.className;
  const classes = "grid-item " + props.className;

  return <div class={classes}>{props.children}</div>;

  //   return <div className={classes}>{props.children}</div>;
};

export default CardWrapper;
