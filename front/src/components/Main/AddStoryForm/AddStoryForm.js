import { useState } from "react";
import DarkButton from "../../UI/DarkButton";
import WhiteButton from "../../UI/WhiteButton";
import ColoredWrapper from "../../UI/Wrappers/ColoredWrapper";
import "./AddStoryForm.css";

const AddStoryForm = (props) => {
  let [story, setStory] = useState({
    story: {
      name: "",
      surname: "",
      age: "",
      gender: "female",
      email: "",
      telephone_number: "",
      from_city: "",
      from_country: "",
      current_city: "",
      current_country: "",
      spot: "",
      story: "",
      advice: "",
      dream: "",
      share_contact: false,
    },
  });
  const [storySubmitted, setStorySubmitted] = useState(false);

  const submitStory = (e) => {
    e.preventDefault();
    e.target.checkValidity();

    story = story.story;
    const newStory = {
      name: story.name,
      surname: story.surname,
      age: story.age,
      gender: story.gender,
      where_to_find: {
        spot: story.spot,
      },
      from: {
        city: story.from_city,
        country: story.from_country,
      },
      currently_in: {
        city: story.current_city,
        country: story.current_country,
      },
      interview: {
        story: story.story,
        advice: story.advice,
        dream: story.dream,
      },
      contact: {
        email: story.email,
        telephone_number: story.telephone_number,
        share_contact: story.share_contact,
      },
      approved: "false",
      img: story.img,
    };

    fetch("/api/humans/new", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(newStory),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.results.length != 0) {
          setStorySubmitted(true);
        }
      })
      .catch(function (error) {
        console.log("An error occurred: " + error.message);
      });
  };

  const handleStory = (value, field) => {
    setStory((prevState) => {
      let story = Object.assign({}, prevState.story);
      story[field] = value.trim();
      return { story };
    });
  };

  if (storySubmitted) {
    return (
      <ColoredWrapper className="story-submitted">
        <h2 className="story-submitted__header">
          Your story was successfully submitted.
        </h2>
        <WhiteButton
          className="story-submitted__button"
          onClick={() => {
            setStorySubmitted(false);
          }}
          text="Add a new one"
        />
      </ColoredWrapper>
    );
  }

  return (
    <div>
      <h2>Add a new story</h2>
      <div className="addstory-container">
        <h3>Interviewee info:</h3>
        <form className="addstory-form" onSubmit={submitStory}>
          <h4>Personal data:</h4>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={story.name}
              onChange={(e) => {
                handleStory(e.target.value, "name");
              }}
            />
          </div>
          <div>
            <label htmlFor="surname">Surname: </label>
            <input
              type="text"
              name="surname"
              id="surname"
              required
              value={story.surname}
              onChange={(e) => {
                handleStory(e.target.value, "surname");
              }}
            />
          </div>
          <div className="shorter-input">
            <label htmlFor="age">Age: </label>
            <input
              type="number"
              name="age"
              id="age"
              min="18"
              max="120"
              required
              value={story.age}
              onChange={(e) => {
                handleStory(e.target.value, "age");
              }}
            />
          </div>
          <div className="shorter-input">
            <label htmlFor="gender">Gender: </label>
            <select
              type="number"
              name="gender"
              id="gender"
              required
              value={story.gender}
              onChange={(e) => {
                handleStory(e.target.value, "gender");
              }}
            >
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
          </div>
          <h4>Contact:</h4>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={story.name}
              onChange={(e) => {
                handleStory(e.target.value, "email");
              }}
            />
          </div>
          <div>
            <label htmlFor="telephone">Telephone: </label>
            <input
              type="tel"
              name="telephone"
              id="telephone"
              required
              value={story.telephone_number}
              onChange={(e) => {
                handleStory(e.target.value, "telephone_number");
              }}
            />
          </div>
          <h4>From:</h4>
          <div>
            <label htmlFor="from-city">City: </label>
            <input
              type="text"
              name="from-city"
              id="from-city"
              required
              value={story.from_city}
              onChange={(e) => {
                handleStory(e.target.value, "from_city");
              }}
            />
          </div>
          <div>
            <label htmlFor="from-country">Country: </label>
            <input
              type="text"
              name="from-country"
              id="from-country"
              required
              value={story.from_city}
              onChange={(e) => {
                handleStory(e.target.value, "from_country");
              }}
            />
          </div>
          <h4>Living in:</h4>
          <div>
            <label htmlFor="current-city">City: </label>
            <input
              type="text"
              name="current-city"
              id="current-city"
              required
              value={story.current_city}
              onChange={(e) => {
                handleStory(e.target.value, "current_city");
              }}
            />
          </div>
          <div>
            <label htmlFor="current_country">Country: </label>
            <input
              type="text"
              name="current_country"
              id="current_country"
              required
              value={story.current_country}
              onChange={(e) => {
                handleStory(e.target.value, "current_country");
              }}
            />
          </div>
          <div>
            <label htmlFor="spot">Where usually found: </label>
            <textarea
              name="spot"
              id="spot"
              required
              value={story.spot}
              onChange={(e) => {
                handleStory(e.target.value, "spot");
              }}
            />
          </div>
          <h4>Interview:</h4>
          <div>
            <label htmlFor="story">Story: </label>
            <textarea
              name="story"
              id="story"
              rows="4"
              required
              value={story.spot}
              onChange={(e) => {
                handleStory(e.target.value, "story");
              }}
            />
          </div>
          <div>
            <label htmlFor="advice">Advice: </label>
            <textarea
              name="advice"
              id="advice"
              rows="2"
              required
              value={story.spot}
              onChange={(e) => {
                handleStory(e.target.value, "advice");
              }}
            />
          </div>
          <div>
            <label htmlFor="dream">Dream: </label>
            <textarea
              name="dream"
              id="dream"
              rows="2"
              required
              value={story.spot}
              onChange={(e) => {
                handleStory(e.target.value, "dream");
              }}
            />
          </div>
          <h4>Image:</h4>
          <div>
            <label htmlFor="img">Image link: </label>
            <input
              type="text"
              name="img"
              id="img"
              rows="2"
              required
              value={story.img}
              onChange={(e) => {
                handleStory(e.target.value, "img");
              }}
            />
          </div>
          <h4>Consent:</h4>
          <div>
            <p>
              Does the interviewee agreed to sharing their contact information?
            </p>
            <div
              className="shorter-input"
              onChange={(e) => {
                handleStory(e.target.value, "share_contact");
              }}
            >
              <input
                type="radio"
                id="share-yes"
                name="share-consent"
                value="true"
              />
              <label htmlFor="share-yes">Yes</label>
              <input
                type="radio"
                id="share-no"
                name="share-consent"
                value="false"
                checked
              />
              <label htmlFor="share-no">No</label>
            </div>
          </div>
          <DarkButton
            type="submit"
            className="newstory-button"
            text="Submit story"
          />
        </form>
      </div>
    </div>
  );
};

export default AddStoryForm;
