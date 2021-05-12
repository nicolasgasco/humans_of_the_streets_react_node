import { useEffect, useState } from "react";
import "./CitySelector.css";

const CitySelector = (props) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
		console.log(props.country)
    if (props.country !== "All" && props.country !== null) {
      fetch(`/api/locations/cities/${props.country}`)
        .then((res) => res.json())
        .then((result) => {
          setCities(result.results.sort());
        });
    }
  }, [props.country]);

  const showCities = cities.map((city) => {
    return <option value={city}>{city}</option>;
  });

  return (
    <div>
      <label for="cities">City: </label>
      <select
        id="cities"
        onChange={(e) => {
          props.handleCurrentCity(e.target.value);
        }}
      >
        <option value="all" selected="selected">All cities</option>
        {showCities}
      </select>
    </div>
  );
};

export default CitySelector;
