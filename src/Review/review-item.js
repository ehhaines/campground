import React from "react";

const calculateR = (rating) => {
  if (rating >= 5) {
    return (10 - rating) / 5 * 255
  } else {
    return 255
  }
}

const calculateG = (rating) => {
  if (rating >= 5) {
    return 210
  } else {
    return rating / 5 * 210
  }
}

const ReviewItemComponent = ({review}) => {
  return(
    <li className="list-group-item">
      <div className="row mt-1 mb-3">
        <div className="col-8 h5">{review.user} - <span className="text-secondary h6">{review.dateReviewed}</span></div>
        <div className="col h5 text-end me-3" style={{
          "color": `rgb(${calculateR(review.rating)}, ${calculateG(review.rating)}, 0)`
        }}>{review.rating}</div>
      </div>
      <div className="text-secondary">"{review.review}"</div>
    </li>
  );
}

export default ReviewItemComponent;