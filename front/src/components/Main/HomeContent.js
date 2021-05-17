import "./HomeContent.css";
import ColoredWrapper from "../UI/Wrappers/ColoredWrapper";
import MainWrapper from "../UI/Wrappers/MainWrapper";
import StandardButton from "../UI/StandardButton";
import { Link } from "react-router-dom";
import StoriesSlideshow from "../UI/StoriesSlideshow";

// Text content shown on home
const HomeContent = () => {
  return (
    <MainWrapper>
      <div className="home-content__container">
        <div className="home-content">
          <h1 className="home-content__allcaps-header">Humans of the Street</h1>
          <h2 className="home-content__white-header">
            Read the stories of those who live on the street
          </h2>
          <div className="home-content__paragraph-text">
            <p>
              Join a community of volunteers dedicated to helping homeless
              people around the world.
            </p>
            <p>You can start making a difference right now.</p>
          </div>
          <StandardButton to="/browse/" text="Start&nbsp;browsing" />
        </div>
        <StoriesSlideshow />
      </div>
    </MainWrapper>
  );
};

export default HomeContent;
