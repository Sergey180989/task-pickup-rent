import React from "react";
import "./CardFeatureList.css";
import sprite from "assets/Images/sprite.svg";

export const CardFeatureList = ({ details, quantity }) => {
  return (
    <ul className="card-feature-list">
      {Object.keys(details).map(
        (item, index) =>
          index < quantity && (
            <li key={item} className="card-feature-list-item">
              <svg className="card-feature-list-icon">
                <use href={`${sprite}#${item}`} />
              </svg>
              <span className="card-feature-list-text">{details[item]}</span>
            </li>
          )
      )}
    </ul>
  );
};