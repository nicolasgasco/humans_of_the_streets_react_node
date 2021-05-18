import { Link } from "react-router-dom";
import classes from "./ProfileNav.module.css";

const ProfileNav = (props) => {
  return (
    <nav className={classes["profile-nav"]}>
      <Link to="/browse/">
        <div>Browse stories</div>
      </Link>
      <Link to="/add/">
        <div>Add new story</div>
      </Link>
      <Link to="/" onClick={props.logOutUser}>
        <div className={classes["accented-button"]}>Logout</div>
      </Link>
    </nav>
  );
};

export default ProfileNav;
