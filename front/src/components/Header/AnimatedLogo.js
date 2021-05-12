import "./AnimatedLogo.css";

const AnimatedLogo = () => {
  return (
    <div className="animated-title">
      <div className="text-top">
        <div>
          <span>Humans</span>
          <span>of the Streets</span>
        </div>
      </div>
      <div className="text-bottom">
        <div style={{ "font-size": "1.8rem" }}>Read their stories...</div>
      </div>
    </div>
  );
};

export default AnimatedLogo;
