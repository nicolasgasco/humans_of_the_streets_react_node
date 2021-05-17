import classes from "./UserMessage.module.css";

const UserMessage = (props) => {
  const cancelButton = (
    <button
      onClick={() => {
        props.onClick("");
      }}
      className={`${classes["modal-button"]} ${classes["left-button"]}`}
    >
      Cancel
    </button>
  );

  const closeUserMessage = () => {
    props.onClick(null);
  };

  const okUserMessage = () => {
    // Send id to delete
    if (props.handleStoryToDelete) {
      props.handleStoryToDelete((prevState) => {
        let storyToDelete = Object.assign({}, prevState.storyToDelete);
        storyToDelete["delete"] = true;
        return { storyToDelete };
      });
    }
    // Close window message
    props.onClick(null);
  };

  return (
    <div
      onClick={closeUserMessage}
      className={`${classes.modal} ${props.className}`}
    >
      <div className={`${classes["modal-content"]}`}>
        <p className={`${classes["modal-text"]}`}>{props.text}</p>
        <div className={`${classes["button-container"]}`}>
          {props.cancelButton ? cancelButton : null}
          <button
            onClick={okUserMessage}
            className={`${classes["modal-button"]}`}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserMessage;
