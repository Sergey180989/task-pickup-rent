import React from "react";
import "./CardPicture.css";

const CardPicture = ({ img, name }) => {
  return (
    <div className="card-picture-wrapper">
      <img src={img} alt={name} className="card-picture-img" />
    </div>
  );
};

export default CardPicture;