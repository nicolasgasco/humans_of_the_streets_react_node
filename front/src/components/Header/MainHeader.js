import MainNav from "./MainNav";
import "./MainHeader.css";
import AnimatedLogo from "./AnimatedLogo";

// Big header for homepage
const MainHeader = (props) => {
  // Two different returns for mobile and desktop/tablet version
  if (window.innerWidth <= 600) {
    return (
      <header className="main-header">
        <div className="picture-container">
          <AnimatedLogo />
          <MainNav toggleLoginFormVisibility={props.toggleLoginFormVisibility} />
        </div>
      </header>
    );
  } else {
    return (
      <header className="main-header">
        <div className="picture-container">
          <AnimatedLogo />
        </div>
        <MainNav toggleLoginFormVisibility={props.toggleLoginFormVisibility} />
      </header>
    );
  }
};

export default MainHeader;
