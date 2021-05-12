import { useEffect, useState } from "react";
import CountryCitySelector from "../UI/CountryCitySelector";
import MainWrapper from "../UI/MainWrapper";
import ShowStories from "./ShowStories";

const BrowseContent = () => {
  const [searchLocale, setSearchLocale] = useState({});
  const [results, setResults] = useState([])

  useEffect(() => {
    let url;
    if (searchLocale.country == null) {
      url = '/api/humans/';
    } else if (searchLocale.city == null || searchLocale.city == "All") {
      // Api is unfortunately a bit quirky, Null must be added here
      url = `/api/humans/${searchLocale.country}/Null`;
    } else {
      url = `/api/humans/${searchLocale.country}/${searchLocale.city}`;
    }

    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setResults(result.results);
      })
      .catch(function (error) {
        console.log("An error occurred: " + error.message);
      });
  }, [searchLocale]);

  const handleSearchLocale = (locale) => {
    setSearchLocale({ city: locale.city, country: locale.country });
  };

  return (
    <MainWrapper>
      <h2>Read their stories</h2>
      <p>Choose a country and/or a city to start browsing their stories.</p>
      <CountryCitySelector handleSearchLocale={handleSearchLocale} />
      <ShowStories results={results}/>
    </MainWrapper>
  );
};

export default BrowseContent;
