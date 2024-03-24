import React from "react";
import "./FilterButton.css";

const FilterButton = ({
  sprite,
  id,
  text,
  width,
  height,
  type,
  checked,
  onChange,
}) => {
  return (
    <label className="filter-button-text">
      <input
        type={type}
        checked={checked}
        onChange={onChange}
        className="filter-button-item"
      />
      <svg
        className="filter-button-icon"
        style={{
          width,
          height,
        }}
      >
        <use href={`${sprite}#${id}`} aria-label="icon"></use>
      </svg>
      <span className="filter-button-span">{text}</span>
    </label>
  );
};

export default FilterButton;