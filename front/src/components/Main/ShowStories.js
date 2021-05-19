import CardWrapper from "../UI/Wrappers/CardWrapper";
import ShowSingleStory from "./ShowSingleStory";
import "./ShowStories.css";

// Container showing more single stories
const ShowStories = ({ results }) => {
  const showResults = results.map((result) => {
    // Show only good results
    // Need both because of an old design flaw
    if (result.approved !== false && result.approved !== "false") {
      return <ShowSingleStory key={result._id} story={result} />;
    }
  });

  if (results.length > 0) {
    return <div className="results-container">{showResults}</div>;
  } else {
    return (
      <div className="results-container">
        <CardWrapper className="something-went-wrong">
          <h3>Ops! Something went wrong :(</h3>
          <p>Try refreshing the page. We're sorry for the inconvenience.</p>
        </CardWrapper>
      </div>
    );
  }
};

export default ShowStories;
