import { Link } from "react-router-dom";
import "./MainLogo.css";

const MainLogo = () => {
  return (
    <div>
      <Link to="/"><h1 className="main-logo">
        Humans <span>of</span><br /><span>the</span> Streets
      </h1></Link>
    </div>
  );
}

export default MainLogo;
