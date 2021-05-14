import ShowSingleStory from "./ShowSingleStory";
import "./ShowStories.css";

// Container showing more single stories
const ShowStories = ({ results }) => {
  const showResults = results.map((result) => {
    // Show only good results
    if (result.approved !== "false") {
      return <ShowSingleStory key={result._id} story={result} />;
    }
  });

  return <div className="results-container">{showResults}</div>;
};

export default ShowStories;
