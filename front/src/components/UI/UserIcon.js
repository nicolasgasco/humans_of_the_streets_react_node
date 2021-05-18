import classes from "./UserIcon.module.css";

const UserIcon = (props) => {
  if (props.session) {
    return (
      <button onClick={props.toggleUserPaneVisibility} className={classes["user-icon"]}></button>
    );
  } else {
    return null;
  }

}

export default UserIcon;
