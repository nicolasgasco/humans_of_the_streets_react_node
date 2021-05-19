import classes from "./AnimatedLogo.module.css";

// This animated logo requires this structure to work
const AnimatedLogo = () => {

  // Reload page if orientation is changed, otherwise amination doesn't show correctly
  window.onorientationchange = function () {
    var orientation = window.orientation;
    switch (orientation) {
      case 0:
      case 90:
      case -90:
        window.location.reload();
        break;
    }
  };

  return (
    <div className={classes["animated-title"]}>
      <div className={classes["text-top"]}>
        <div>
          <span className={classes["main-text"]}>Humans</span>
          <span className={classes["main-text"]}>
            <span className={classes["of-the-span"]}>of the</span> Streets
          </span>
        </div>
      </div>
      <div className={classes["text-bottom"]}>
        <div>
          <p className={classes["read-stories-sub"]}>Read their stories...</p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogo;
