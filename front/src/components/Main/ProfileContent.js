import ProfileNav from "../UI/ProfileNav";
import MainWrapper from "../UI/Wrappers/MainWrapper";
import ShowSubmittedStories from "./ShowSubmittedStories";
import ShowPersonalData from "./ShowPersonalData";
import AccordionProfile from "../UI/AccordionProfile";

// Main container where stories are shown
const ProfileContent = (props) => {
  const accordionComponents = [
    { title: "Your user data", body: <ShowPersonalData /> },
    {
      title: "Your submitted stories",
      body: (
        <ShowSubmittedStories
          handleModalMessage={props.handleModalMessage}
          handleStoryToDelete={props.handleStoryToDelete}
          storyToDelete={props.storyToDelete}
        />
      ),
    }
  ];
  return (
    <MainWrapper>
      <ProfileNav
        handleSession={props.handleSession}
        logOutUser={props.logOutUser}
      />
      <h2>Your profile</h2>
      <AccordionProfile components={accordionComponents} />
    </MainWrapper>
  );
};

export default ProfileContent;
