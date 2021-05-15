import { useEffect, useState } from "react";
import EditStoryUI from "../UI/EditStoryUI/EditStoryUI";
import ShowSingleStory from "./ShowSingleStory";
import "./ShowSubmittedStories.css";

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
      console.log(newFilteredStories);
      setFilteredStories(newFilteredStories);
    }
  }, [props.storyToDelete.storyToDelete.delete]);

  let showFilteredStories;
  if (filteredStories) {
    showFilteredStories = filteredStories.map((story) => {
      return (
        <ShowSingleStory
          story={story}
          editStoryUI={
            <EditStoryUI
              id={story._id}
              handleStoryToDelete={props.handleStoryToDelete}
              handleModalMessage={props.handleModalMessage}
              handleStoryToDelete={props.handleStoryToDelete}
            />
          }
        />
      );
    });
  }

  return (
    <div>
      <h2>Your submitted stories</h2>
      <div>{showFilteredStories}</div>
    </div>
  );
};

export default ShowSubmittedStories;
