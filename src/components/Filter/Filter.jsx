import React from "react";
import sprite from "../../assets/Images/sprite.svg";
import "./Filter.css";
import { Button } from "../Button/Button";
import { VehicleEquipment } from "../VehicleEquipment/VehicleEquipment";

const Filter = () => {
  return (
    <div className="filter-wrap">
      <form className="filter-form">
        <div className="location-wrap">
          <div className="location-input-wrapper">
            <label htmlFor="location" className="label">
              Location
            </label>
            <svg className="icon">
              <use href={`${sprite}#map-pin`} aria-label="pin icon"></use>
            </svg>
            <input
              type="text"
              id="location"
              className="location-input"
              placeholder="Enter location"
            />
          </div>
        </div>
        <p className="filter-text">Filters</p>
        <VehicleEquipment />
        <div className="button-wrapper">
          <Button text={"Search"} />
        </div>
      </form>
    </div>
  );
};

export default Filter;