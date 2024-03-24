import React from "react";
import sprite from "assets/Images/sprite.svg";
import "./CardLocation.css";

const CardLocation = ({ location }) => {
  return (
    <div className="card-location-wrapper">
      <svg className="card-location-icon">
        <use href={`${sprite}#map-pin-2`} aria-label="pin icon"></use>
      </svg>
      <p className="card-location-city">
        {location.split(",")[1]}, {location.split(",")[0]}
      </p>
    </div>
  );
};

export default CardLocation;