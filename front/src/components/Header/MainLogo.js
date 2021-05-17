import { Link } from "react-router-dom";
import classes from "./MainLogo.module.css";

// Regular logo for pages other than home
const MainLogo = () => {
  return (
    <div>
      <Link to="/"><h1 className={classes["main-logo"]}>
        Humans <span>of</span><br /><span>the</span> Streets
      </h1></Link>
    </div>
  );
}

export default MainLogo;
