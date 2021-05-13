import './HomeContent.css';
import ColoredWrapper from "../UI/ColoredWrapper";
import MainWrapper from "../UI/MainWrapper";
import StandardButton from '../UI/StandardButton';

// Text content shown on home
const HomeContent = () => {
  return (
    <MainWrapper>
      <ColoredWrapper >
        <div className="home-content">
        <h1 className="home-content__allcaps-header">Humans of the Street</h1>
        <h2 className="home-content__white-header">Read the stories of those who live on the street</h2>
        <p>
          Join a community of volunteers dedicated to helping homeless people
          around the world.
        </p>
        <p>You can start making a difference right now.</p>
        <StandardButton link={"/browse/"} text={"Start browsing"}/>
        </div>
      </ColoredWrapper>
    </MainWrapper>
  );
};

export default HomeContent;
