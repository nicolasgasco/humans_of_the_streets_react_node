import "./AnimatedLogo.css";

// This animated logo requires this structure to work
const AnimatedLogo = () => {
  return (
    <div className="animated-title">
      <div className="text-top">
        <div>
          <span className="main-text">Humans</span>
          <span className="main-text"><span className="of-the-span">of the</span> Streets</span>
        </div>
      </div>
      <div className="text-bottom">
        <div ><p className="read-stories-sub">Read their stories...</p></div>
      </div>
    </div>
  );
};

export default AnimatedLogo;
