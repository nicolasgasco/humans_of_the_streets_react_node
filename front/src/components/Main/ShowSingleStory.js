import { useEffect, useState } from "react";
import CardWrapper from "../UI/CardWrapper";
import NoImage from "./img/no_image.jpg";
import "./ShowSingleStory.css";

const ShowSingleStory = ({ story }) => {
  console.log(story);
  return (
    <CardWrapper className="story-container">
      <img
        src={story.img || NoImage}
        alt={`Picture of ${story.name} ${story.surname}`}
      />
      <div class="story-text-container">
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
