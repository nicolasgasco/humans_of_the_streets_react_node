import { Link } from 'react-router-dom';
import './MainNav.css';

const MainNav = (props) => {
    return (
        <nav className="main-nav">
            <Link to="/browse/">Browse</Link>
            <button onClick={props.toggleLoginFormVisibility}>Login</button>
        </nav>
    );
  }
  
  export default MainNav;
  