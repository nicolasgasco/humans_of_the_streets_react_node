import { Link } from "react-router-dom";
import "./ProfileNav.css";

const ProfileNav = (props) => {
  return (
    <nav className="profile-nav">
      <Link to="/browse/">
        <div>Browse stories</div>
      </Link>
      <Link to="/add/">
        <div>Add new story</div>
      </Link>
      <Link to="/">
        <div>Homepage</div>
      </Link>
    </nav>
  );
};

export default ProfileNav;
