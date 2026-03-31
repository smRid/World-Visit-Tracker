import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries }) => {
  const [visited, setVisited] = useState(false);

  console.log(handleVisitedCountries);
  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedCountries(country);
  };
  return (
    <div className={`country ${visited && "country-visited"}`}>
      <div className="country-content">
        <img
          src={country.flags.flags.png}
          alt={country.flags.flags.alt}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://flagcdn.com/w320/${country.cca3.cca3.substring(0, 2).toLowerCase()}.png`;
          }}
        ></img>
        <h3>Name: {country.name.common}</h3>
        <h4>Capital: {country.capital.capital}</h4>
        <p>Continent: {country.region.region}</p>
        <p>Population: {country.population.population}</p>
        <p>
          Area: {country.area.area}{" "}
          {country.area.area > 30000 ? "Big Country" : "Small Country"}
        </p>
      </div>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;

/*

*/
