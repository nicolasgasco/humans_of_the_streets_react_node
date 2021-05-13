import { useEffect, useState } from "react";
import "./CountrySelector.css";

// Selector to filter stories by country
const CountrySelector = (props) => {
  const [countries, setCountries] = useState([]);

  // Fetching all available countries
  useEffect(() => {
    fetch("/api/locations/countries")
      .then((res) => res.json())
      .then((result) => {
        setCountries(result.results.sort());
      })
      .catch(function (error) {
        console.log("An error occurred: " + error.message);
      });
  }, []);

  const showCountries = countries.map((country) => {
    return <option key={country} value={country}>{country}</option>;
  });

  return (
    <div>
      <label htmlFor="countries">Country: </label>
      <select
        id="countries"
        onChange={(e) => {
          props.handleCurrentCountry(e.target.value);
        }}
      >
        <option value="all">All countries</option>
        {showCountries}
      </select>
    </div>
  );
};

export default CountrySelector;
