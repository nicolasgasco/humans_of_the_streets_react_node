import { useEffect, useState } from "react";
import "./CountrySelector.css";

const CountrySelector = (props) => {
  const [countries, setCountries] = useState([]);

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
    return <option value={country}>{country}</option>;
  });

  return (
    <div>
      <label for="countries">Country: </label>
      <select
        id="countries"
        onChange={(e) => {
          props.handleCurrentCountry(e.target.value);
        }}
      >
        <option value="All">All countries</option>
        {showCountries}
      </select>
    </div>
  );
};

export default CountrySelector;
