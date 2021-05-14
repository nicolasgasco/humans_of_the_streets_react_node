import ProfileNav from "../UI/ProfileNav";
import MainWrapper from "../UI/Wrappers/MainWrapper";

// Main container where stories are shown
const ProfileContent = () => {
  return (
    <MainWrapper>
      <h2>Your profile</h2>
      <h3>Navigate around the website</h3>
      <ProfileNav />
      <h3>Modify your data</h3>
    </MainWrapper>
  );
};

export default ProfileContent;
