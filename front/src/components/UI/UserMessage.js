import "./UserMessage.css";
const UserMessage = (props) => {
  const cancelButton = (
    <button
      onClick={() => {
        props.onClick("");
      }}
      className="modal-button left-button"
    >
      Cancel
    </button>
  );

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
    <div className="modal">
      <div className="modal-content">
        <p className="modal-text">{props.text}</p>
        <div className="button-container">
          {props.cancelButton ? cancelButton : null}
          <button onClick={okUserMessage} className="modal-button">
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserMessage;
