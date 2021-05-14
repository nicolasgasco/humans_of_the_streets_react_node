import "./UserIcon.css";

const UserIcon = (props) => {
  if (props.session) {
    return (
      <button className="user-icon"></button>
    );
  } else {
    return null;
  }

}

export default UserIcon;
