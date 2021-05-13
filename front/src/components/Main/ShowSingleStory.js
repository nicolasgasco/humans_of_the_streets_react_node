import CardWrapper from "../UI/CardWrapper";
import NoImage from "./img/no_image.jpg";
import "./ShowSingleStory.css";

// Card for showing one single result
const ShowSingleStory = ({ story }) => {
  return (
    <CardWrapper key={story._id} className="story-container">
      <img
        src={story.img || NoImage}
        alt={`${story.name} ${story.surname}`}
      />
      <div className="story-text-container">
        <h3>
          {story.name} {story.surname} ({story.age}, {story.gender})
        </h3>
        <p>
          <b>From: </b>
          {story.from.city} ({story.from.country})
        </p>
        <p>
          <b>Currently in: </b>
          {story.currently_in.city} ({story.currently_in.country})
        </p>
        <p>
          <b>Story: </b>
          {story.interview.story}
        </p>
        <p>
          <b>Advice: </b>
          {story.interview.advice}
        </p>
        <p>
          <b>Dream: </b>
          {story.interview.dream}
        </p>
      </div>
    </CardWrapper>
  );
};

export default ShowSingleStory;
