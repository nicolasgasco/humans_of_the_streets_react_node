import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import LoadingGif from "./img/loading.gif";
import "./StoriesSlideshow.css";

const StoriesSlideshow = () => {
  const [homeStories, setHomeStories] = useState(() => {
    fetch(`/api/humans`)
      .then((res) => res.json())
      .then((result) => {
        setHomeStories(result.results.slice(0, 4));
      })
      .catch(function (error) {
        console.log("An error occurred: " + error.message);
      });
  });

  let showCarouselItems;
  if (!homeStories) {
    showCarouselItems = (
      <Carousel.Item key={"loading"}>
        <img
          className="d-block w-100 carousel-img"
          src={LoadingGif}
          alt="Loading animation"
        />
        <Carousel.Caption>
          <h3 style={{ color: "black" }}>Loading...</h3>
        </Carousel.Caption>
      </Carousel.Item>
    );
  } else {
    showCarouselItems = homeStories.map((story) => {
      return (
        <Carousel.Item key={story._id}>
          <img
            className="d-block w-100 carousel-img"
            src={story.img}
            alt="First slide"
          />
          <Carousel.Caption className="carousel-caption">
            <h3 style={{color: "white"}}>{`${story.name} ${story.surname} (${story.age})`}</h3>
            <p style={{fontSize: "1.2rem", textAlign: "center"}}>{story.interview.advice}</p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
  }

  return (
    <Carousel indicators={false} fade={true} interval={4000} className="carousel-container">
      {showCarouselItems}
    </Carousel>
  );
};

export default StoriesSlideshow;
