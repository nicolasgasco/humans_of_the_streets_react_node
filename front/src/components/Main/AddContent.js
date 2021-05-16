import UserPane from "../UI/UserPane";
import MainWrapper from "../UI/Wrappers/MainWrapper";
import AddStoryForm from "./AddStoryForm/AddStoryForm";

// Main tag to add a new story
const AddContent = (props) => {
  return (
    <>
      <UserPane
        linksToShow={[
          ["Your profile", "/profile"],
          ["Browse stories", "/browse"],
          ["Homepage", "/"],
        ]}
        userPaneVisibility={props.showUserPane}
        toggleUserPaneVisibility={props.toggleUserPaneVisibility}
      />
      <MainWrapper>
        <AddStoryForm />
      </MainWrapper>
    </>
  );
};

export default AddContent;
