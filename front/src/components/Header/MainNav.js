import { Link } from "react-router-dom";
import StandardButton from "../Buttons/StandardButton";

function MainNav() {
    return (
        <nav className="main-nav">
            <div><Link>Browse stories</Link></div>
            <StandardButton text="Login" />
        </nav>
    );
  }
  
  export default MainNav;
  