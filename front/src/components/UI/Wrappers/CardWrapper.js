import classes from "./CardWrapper.module.css";

// Wrapper to format cards
const CardWrapper = (props) => {
  return <div className={`${classes["grid-item"]} ${props.className}`}>{props.children}</div>;
};

export default CardWrapper;
