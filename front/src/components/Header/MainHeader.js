import MainLogo from "./MainLogo";
import MainNav from "./MainNav";
import "./MainHeader.css";
import { useState, useEffect } from "react";
import StandardButton from "../Buttons/StandardButton";
import AnimatedLogo from "./AnimatedLogo";

function MainHeader() {
  // Two different headers for mobile and desktop/tablet version
  if (window.innerWidth <= 600) {
    return (
      <>
        <header className="main-header">
          <div className="main-header">
            <AnimatedLogo />
          </div>
          <MainNav />
        </header>
        <p>Version movil</p>
      </>
    );
  } else {
    return (
      <>
        <header>
          <div className="main-header">
            <AnimatedLogo />
          </div>
          <MainNav />
        </header>
        <p>Version escritorio</p>
      </>
    );
  }
}

export default MainHeader;
