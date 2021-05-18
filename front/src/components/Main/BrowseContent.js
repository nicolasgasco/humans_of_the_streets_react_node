import { useEffect, useState } from "react";
import CountryCitySelector from "../UI/CountryCitySelector/CountryCitySelector";
import UserPane from "../UI/UserPane";
import MainWrapper from "../UI/Wrappers/MainWrapper";
import ShowStories from "./ShowStories";

// Main container where stories are shown
const BrowseContent = (props) => {
  const [searchLocale, setSearchLocale] = useState({});
  const [results, setResults] = useState([]);

  // API fetch to get the relevant stories
  useEffect(() => {
    let url;
    // Adapting URL to data provided by country/city selector
    if (searchLocale.country == null) {
      url = "/api/humans/";
    } else if (searchLocale.city == null || searchLocale.city == "all") {
      url = `/api/humans/${searchLocale.country}/all`;
    } else {
      url = `/api/humans/${searchLocale.country}/${searchLocale.city}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setResults(result.results);
      })
      .catch(function (error) {
        console.log("An error occurred: " + error.message);
      });
  }, [searchLocale]);

  // Getting city and country up here from below
  const handleSearchLocale = (locale) => {
    setSearchLocale({ city: locale.city, country: locale.country });
  };

  return (
    <>
      <UserPane
        linksToShow={[
          ["Your profile", "/profile"],
          ["Add story", "/add"],
          ["Homepage", "/"],
        ]}
        userPaneVisibility={props.showUserPane}
        toggleUserPaneVisibility={props.toggleUserPaneVisibility}
        logOutUser={props.logOutUser}
      />
      <MainWrapper>
        <h2>Read their stories</h2>
        <p>Choose a country and/or a city to start browsing their stories.</p>
        <CountryCitySelector handleSearchLocale={handleSearchLocale} />
        <ShowStories results={results} />
      </MainWrapper>
    </>
  );
};

export default BrowseContent;
