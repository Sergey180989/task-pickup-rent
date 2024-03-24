import React from "react";
import "./CardItem.css";
import sprite from "assets/Images/sprite.svg";
import { CardPicture } from "../CardPicture/CardPicture";
import { CardTitle } from "../CardTitle/CardTitle";
import { CardDescription } from "../CardDescription/CardDescription";
import { CardFeatureList } from "../CardFeatureList/CardFeatureList";
import { CardLocation } from "../CardLocation/CardLocation";
import { CardPrice } from "../CardPrice/CardPrice";
import { CardReview } from "../CardReview/CardReview";
import { Button } from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { changeFavorite } from "../../redux/slice";
import { selectFavorite } from "../../redux/selector";
import { useState } from "react";
import { ModalCard } from "../ModalCard/ModalCard";

const CardItem = ({ card }) => {
  const dispatch = useDispatch();
  const favorite = useSelector(selectFavorite);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFavorite = (card) => {
    dispatch(changeFavorite(card));
  };

  const toggleModal = (card) => {
    setIsModalOpen((prevState) => !prevState);
    setSelectedCard(card);
  };

  return (
    <div className="card-item-wrapper">
      <CardPicture img={card.gallery[0]} name={card.name} />
      <div className="card-info-container">
        <div className="card-header-container">
          <CardTitle title={card.name} />
          <div className="price-container" onClick={() => handleFavorite(card)}>
            <CardPrice price={card.price} />
            <button className="btn">
              <Icon>
                <use
                  href={
                    favorite.some((item) => item._id === card._id)
                      ? `${sprite}#heart-liked`
                      : `${sprite}#heart`
                  }
                  aria-label="heart icon"
                ></use>
              </Icon>
            </button>
          </div>
        </div>
        <div className="review-location-wrap">
          <CardReview rating={card.rating} reviews={card.reviews} />
          <CardLocation location={card.location} />
        </div>
        <CardDescription description={card.description} />
        <CardFeatureList details={card.details} quantity={6} />
        <Button text={"Show more"} onClick={() => toggleModal(card)} />
      </div>
      {isModalOpen && (
        <ModalCard onToggle={toggleModal} cardInfo={selectedCard} />
      )}
    </div>
  );
};

export default CardItem;