import React from "react";
import { Link } from "react-router-dom";
import "./CardReview.css";

const CardReview = ({ rating, reviews }) => {
  return (
    <div className="review-wrapper">
      <svg className="review-icon">
        <use href="sprite.svg#star" aria-label="star icon"></use>
      </svg>
      <Link to="/" className="reviews-link">
        {rating} ({reviews.length} Reviews)
      </Link>
    </div>
  );
};

export default CardReview;