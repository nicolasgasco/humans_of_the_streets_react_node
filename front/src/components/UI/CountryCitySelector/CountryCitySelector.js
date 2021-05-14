import { useEffect, useState } from "react";
import CitySelector from "./CitySelector";
import "./CountryCitySelector.css";
import CountrySelector from "./CountrySelector";

// Selector to filter stories per country and/or city
const CountryCitySelector = (props) => {
  const [currentCountry, setCurrentCountry] = useState(null);
  const [currentCity, setCurrentCity] = useState(null);

  // Sending information up
  useEffect(() => {
    console.log(currentCity)
    props.handleSearchLocale({ country: currentCountry, city: currentCity });
  }, [currentCountry, currentCity]);

  const handleCurrentCountry = (country) => {

    if (country === "all") {
      setCurrentCountry(null);
      setCurrentCity(null);
    } else {
      setCurrentCountry(country);
      setCurrentCity(null);
    }
  };

  const handleCurrentCity = (city) => {
    setCurrentCity(city);
  };

  return (
    <div className="country-city-selector">
      <CountrySelector handleCurrentCountry={handleCurrentCountry} />
      {currentCountry ? (
        <CitySelector
          handleCurrentCity={handleCurrentCity}
          country={currentCountry}
        />
      ) : null}
    </div>
  );
};

export default CountryCitySelector;
