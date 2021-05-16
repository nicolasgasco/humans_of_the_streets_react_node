import ProfileNav from "../UI/ProfileNav";
import MainWrapper from "../UI/Wrappers/MainWrapper";
import ShowSubmittedStories from "./ShowSubmittedStories";

// Main container where stories are shown
const ProfileContent = (props) => {
  return (
    <MainWrapper>
      <ProfileNav handleSession={props.handleSession} logOutUser={props.logOutUser}/>
      <h2>Your profile</h2>
      <h3>Modify your data</h3>
      <ShowSubmittedStories handleModalMessage={props.handleModalMessage} handleStoryToDelete={props.handleStoryToDelete} storyToDelete={props.storyToDelete}/>
    </MainWrapper>
  );
};

export default ProfileContent;
