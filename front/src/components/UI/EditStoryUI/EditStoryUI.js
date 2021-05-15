import "./EditStoryUI.css";

const EditStoryUI = (props) => {
  const clickDelete = () => {
    props.handleModalMessage("Do you really want to delete this element?");
    props.handleStoryToDelete((prevState) => {
        let storyToDelete = Object.assign({}, prevState.storyToDelete);
        storyToDelete["id"] = props.id;
        return { storyToDelete };
      });
  };

  return (
    <div className="edit-story-UI">
      <button onClick={clickDelete} className="delete-button"></button>
    </div>
  );
};

export default EditStoryUI;
