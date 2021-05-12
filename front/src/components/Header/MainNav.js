import { Link } from 'react-router-dom';
import './MainNav.css';

const MainNav = () => {
    return (
        <nav className="main-nav">
            <Link to="/browse/">Browse</Link>
            <Link>Join</Link>
        </nav>
    );
  }
  
  export default MainNav;
  