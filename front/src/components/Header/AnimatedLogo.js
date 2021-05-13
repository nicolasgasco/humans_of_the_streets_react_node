import "./AnimatedLogo.css";

// This animated logo requires this structure to work
const AnimatedLogo = () => {
  return (
    <div className="animated-title">
      <div className="text-top">
        <div>
          <span>Humans</span>
          <span><span style={{display: "inline", fontSize: "1.8rem", "color" : "black"}}>of the</span> Streets</span>
        </div>
      </div>
      <div className="text-bottom">
        <div ><p style={{ fontSize: "1.1rem", margin: "0" }}>Read their stories...</p></div>
      </div>
    </div>
  );
};

export default AnimatedLogo;
