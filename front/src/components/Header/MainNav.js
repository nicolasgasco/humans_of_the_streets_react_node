import { Link } from "react-router-dom";
import "./MainNav.css";

const MainNav = (props) => {
  return (
    <nav className="main-nav">
      <Link to="/browse/"><div>Browse</div></Link>
      {props.session ? (
        <Link to="/profile/"><div>Profile</div></Link>
      ) : (
        <button onClick={props.toggleLoginFormVisibility}>Login</button>
      )}
    </nav>
  );
};

export default MainNav;
