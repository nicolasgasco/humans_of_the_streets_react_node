import { useEffect, useState } from "react";
import "./CitySelector.css";

// City selector to filter results according to city
const CitySelector = (props) => {
  const [cities, setCities] = useState([]);

  // Get all cities of a specific country
  useEffect(() => {
    console.log(props.country);
    if (props.country !== "all" && props.country !== null) {
      fetch(`/api/locations/cities/${props.country}`)
        .then((res) => res.json())
        .then((result) => {
          setCities(result.results.sort());
        })
        .catch(function (error) {
          console.log("An error occurred: " + error.message);
        });
    }
  }, [props.country]);

  const showCities = cities.map((city) => {
    return (
      <option key={city} value={city}>
        {city}
      </option>
    );
  });

  return (
    <div>
      <label htmlFor="cities">City: </label>
      <select
        defaultValue="all"
        id="cities"
        onChange={(e) => {
          props.handleCurrentCity(e.target.value);
        }}
      >
        <option value="all">All cities</option>
        {showCities}
      </select>
    </div>
  );
};

export default CitySelector;
