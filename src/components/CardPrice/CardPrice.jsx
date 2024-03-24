import React from "react";
import "./CardPrice.css";

const CardPrice = ({ price }) => {
  return <h1 className="card-price">€{price},00</h1>;
};

export default CardPrice;