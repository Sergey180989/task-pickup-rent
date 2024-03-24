import React from "react";
import "./ModalCard.css";
import { CardTitle } from "../CardTitle/CardTitle";
import { CardReview } from "../CardReview/CardReview";
import { CardLocation } from "../CardLocation/CardLocation";
import { CardPrice } from "../CardPrice/CardPrice";
import { CardPicture } from "../CardPicture/CardPicture";
import { CardDescription } from "../CardDescription/CardDescription";

const ModalCard = ({ onToggle, cardInfo }) => {
  console.log(cardInfo);

  const { name, rating, reviews, location, price, gallery, description } =
    cardInfo;

  return (
    <div className="custom-modal-wrap">
      <div className="layout">
        <CardTitle title={name} />
        <div className="review-location-wrap">
          <CardReview rating={rating} reviews={reviews} />
          <CardLocation location={location} />
        </div>
        <CardPrice price={price} />
        <ul className="image-wrapper">
          {gallery.map((img) => (
            <li key={img} className="image-item">
              <CardPicture img={img} name={"car picture"} />
            </li>
          ))}
        </ul>
        <CardDescription
          description={description}
          style={{ width: "902px" }}
          wrap={{ textWrap: "wrap" }}
        />
        <div className="feature-review-wrapper">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            dolore!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;