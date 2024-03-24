import React, { useState } from 'react';
import './VehicleEquipment.css'; // Імпорт CSS-файлу для стилізації

export const VehicleEquipment = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div className="wrapper">
        <h3 className="title">Vehicle equipment</h3>
        <ul className="equipment-list">
          <li className="list-item">
            <input
              type="checkbox"
              value="AC"
              checked={selectedOption === "AC"}
              onChange={() => handleOptionChange("AC")}
              id="AC"
              className="filter-button-checkbox"
            />
            <label htmlFor="AC" className="filter-button-label">
              AC
            </label>
          </li>
          <li className="list-item">
            <input
              type="checkbox"
              value="transmission"
              checked={selectedOption === "transmission"}
              onChange={() => handleOptionChange("transmission")}
              id="transmission"
              className="filter-button-checkbox"
            />
            <label htmlFor="transmission" className="filter-button-label">
              Automatic
            </label>
          </li>
          <li className="list-item">
            <input
              type="checkbox"
              value="kitchen"
              checked={selectedOption === "kitchen"}
              onChange={() => handleOptionChange("kitchen")}
              id="kitchen"
              className="filter-button-checkbox"
            />
            <label htmlFor="kitchen" className="filter-button-label">
              Kitchen
            </label>
          </li>
          <li className="list-item">
            <input
              type="checkbox"
              value="TV"
              checked={selectedOption === "TV"}
              onChange={() => handleOptionChange("TV")}
              id="TV"
              className="filter-button-checkbox"
            />
            <label htmlFor="TV" className="filter-button-label">
              TV
            </label>
          </li>
          <li className="list-item">
            <input
              type="checkbox"
              value="shower"
              checked={selectedOption === "shower"}
              onChange={() => handleOptionChange("shower")}
              id="shower"
              className="filter-button-checkbox"
            />
            <label htmlFor="shower" className="filter-button-label">
              Shower/WC
            </label>
          </li>
        </ul>
      </div>
      <div className="wrapper">
        <h3 className="title">Vehicle type</h3>
        <ul className="equipment-list">
          <li className="list-item">
            <input
              type="radio"
              value="panelTruck"
              checked={selectedOption === "panelTruck"}
              onChange={() => handleOptionChange("panelTruck")}
              id="panelTruck"
              className="filter-button-radio"
            />
            <label htmlFor="panelTruck" className="filter-button-label">
              Van
            </label>
          </li>
          <li className="list-item">
            <input
              type="radio"
              value="fullyIntegrated"
              checked={selectedOption === "fullyIntegrated"}
              onChange={() => handleOptionChange("fullyIntegrated")}
              id="fullyIntegrated"
              className="filter-button-radio"
            />
            <label htmlFor="fullyIntegrated" className="filter-button-label">
              Fully Integrated
            </label>
          </li>
          <li className="list-item">
            <input
              type="radio"
              value="alcove"
              checked={selectedOption === "alcove"}
              onChange={() => handleOptionChange("alcove")}
              id="alcove"
              className="filter-button-radio"
            />
            <label htmlFor="alcove" className="filter-button-label">
              Alcove
            </label>
          </li>
        </ul>
      </div>
    </>
  );
};