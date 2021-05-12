import { useEffect, useState } from "react";
import CitySelector from "./CitySelector";
import "./CountryCitySelector.css";
import CountrySelector from "./CountrySelector";

const CountryCitySelector = (props) => {
  const [currentCountry, setCurrentCountry] = useState(null);
  const [currentCity, setCurrentCity] = useState(null);

  useEffect(() => {
    props.handleSearchLocale({ country: currentCountry, city: currentCity });
  }, [currentCountry, currentCity]);

  const handleCurrentCountry = (country) => {
    if (country === "All") {
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
    <div class="country-city-selector">
      <CountrySelector handleCurrentCountry={handleCurrentCountry} />
      {currentCountry !== "All" ? (
        <CitySelector
          handleCurrentCity={handleCurrentCity}
          country={currentCountry}
        />
      ) : null}
    </div>
  );
};

export default CountryCitySelector;
