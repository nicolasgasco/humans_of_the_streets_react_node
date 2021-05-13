import ShowSingleStory from "./ShowSingleStory";
import "./ShowStories.css";

// Container showing more single stories
const ShowStories = ({ results }) => {
  const showResults = results.map((result) => {
    return <ShowSingleStory key={result._id} story={result} />;
  });

  return (
    <div>
      <h2>Stories: </h2>
      <div className="results-container">{showResults}</div>
    </div>
  );
};

export default ShowStories;
