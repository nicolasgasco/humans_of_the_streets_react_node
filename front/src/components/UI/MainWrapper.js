import "./MainWrapper.css";

const MainWrapper = (props) => {
  const classes = "main-wrapper " + props.className;
  return <main className={classes}>{props.children}</main>;
};
export default MainWrapper;
