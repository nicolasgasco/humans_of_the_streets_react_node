import { Link } from "react-router-dom";
import ColoredWrapper from "../UI/ColoredWrapper";
import MainWrapper from "../UI/MainWrapper";

const HomeContent = () => {
  return (
    <MainWrapper>
      <ColoredWrapper>
        <h1>Read the stories of those who live on the street</h1>
        <p>
          Join a community of volunteers dedicated to helping homeless people
          around the world.
        </p>
        <p>You can start making a difference right now.</p>
      </ColoredWrapper>
    </MainWrapper>
  );
};

export default HomeContent;
