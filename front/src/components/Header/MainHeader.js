import MainNav from "./MainNav";
import "./MainHeader.css";
import AnimatedLogo from "./AnimatedLogo";
import UserIcon from "../UI/UserIcon";
import { useEffect } from "react";

// Big header for homepage
const MainHeader = (props) => {
  useEffect(() => {
    // This is to offset the search bar on mobile devices
    // Get the viewport height and multiple it by 1% to get a value for a vh unit
    const vh = window.innerHeight * 0.01;
    // Det the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  // Two different returns for mobile and desktop/tablet version
  if (window.innerWidth <= 600) {
    return (
      <header className="main-header">
        <div className="picture-container">
          <AnimatedLogo />
        </div>
        <MainNav
          session={props.session}
          toggleLoginFormVisibility={props.toggleLoginFormVisibility}
        />
      </header>
    );
  } else {
    return (
      <header className="main-header">
        <div className="picture-container">
          <AnimatedLogo />
        </div>
        <MainNav
          session={props.session}
          toggleLoginFormVisibility={props.toggleLoginFormVisibility}
        />
      </header>
    );
  }
};

export default MainHeader;
