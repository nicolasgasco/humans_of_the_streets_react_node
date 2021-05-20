import { useEffect, useState } from "react";
import EditStoryUI from "../UI/EditStoryUI/EditStoryUI";
import ShowSingleStory from "./ShowSingleStory";

// Container showing stories submitted by a specific user
const ShowSubmittedStories = (props) => {
  const [currentUserID, setCurrentUserID] = useState(
    sessionStorage.getItem("user")
  );
  let [filteredStories, setFilteredStories] = useState(() => {
    fetch(`/api/humans/user/${currentUserID}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.foundStories) {
          setFilteredStories(result.results);
        }
      })
      .catch(function (error) {
        console.log("An error occurred: " + error.message);
      });
  });

  useEffect(() => {
    if (props.storyToDelete.storyToDelete.delete) {
      const newFilteredStories = filteredStories.filter((story) => {
        return story._id !== props.storyToDelete.storyToDelete.id;
      });
      setFilteredStories(newFilteredStories);
    }
  }, [props.storyToDelete.storyToDelete.delete, filteredStories, props.storyToDelete.storyToDelete.id]);

  let showFilteredStories;
  if (filteredStories) {
    showFilteredStories = filteredStories.map((story) => {
      return (
        <ShowSingleStory
          key={`story-${story._id}`}
          story={story}
          editStoryUI={
            <EditStoryUI
              id={story._id}
              handleStoryToDelete={props.handleStoryToDelete}
              handleModalMessage={props.handleModalMessage}
            />
          }
        />
      );
    });
  }

  return (
    <div>
      <h3>Your submitted stories</h3>
      <div className="results-container">{showFilteredStories}</div>
    </div>
  );
};

export default ShowSubmittedStories;
