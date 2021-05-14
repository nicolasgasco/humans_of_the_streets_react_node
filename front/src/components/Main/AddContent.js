import MainWrapper from "../UI/Wrappers/MainWrapper";
import AddStoryForm from "./AddStoryForm/AddStoryForm";

// Main tag to add a new story
const AddContent = () => {
  return (
    <MainWrapper>
      <AddStoryForm />
    </MainWrapper>
  );
};

export default AddContent;
