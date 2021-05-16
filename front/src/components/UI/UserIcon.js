import "./UserIcon.css";

const UserIcon = (props) => {
  if (props.session) {
    return (
      <button onClick={props.toggleUserPaneVisibility} className="user-icon"></button>
    );
  } else {
    return null;
  }

}

export default UserIcon;
