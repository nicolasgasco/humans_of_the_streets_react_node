import { useEffect, useState } from "react";
import ShowSingleStory from "./ShowSingleStory";
import "./ShowStories.css";

const ShowStories = ({ results }) => {
  const showResults = results.map((result) => {
    return (
      <ShowSingleStory story={result} />
    )
  });

  return (
    <div>
      <h2>Stories: </h2>
      <div className="results-container">{showResults}</div>
    </div>
  );
};

export default ShowStories;
