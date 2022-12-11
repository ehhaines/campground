import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteReviewThunk } from "./reviews-thunks";
import { useDispatch } from "react-redux";

const sampleUser = "sample_user_2";

const ReviewItemComponent = ({review}) => {

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

  const dispatch = useDispatch();

  return(
    <li className="list-group-item">
      <div className="row mt-1 mb-3">
        <div className="col-10 h5">
          {review.user} - <span className="text-secondary h6">{review.dateReviewed}</span> {review.user === sampleUser && 
          <button className="btn m-0 p-0 ms-1" onClick={() => {dispatch(deleteReviewThunk(review))}}>
            <FontAwesomeIcon icon={faTrash} color="red"/>
          </button>}
        </div>
        <div className="col h5 text-end me-2" style={{
          "color": `rgb(${calculateR(review.rating)}, ${calculateG(review.rating)}, 0)`
        }}>{review.rating}</div>
      </div>
      {review.review && <div className="text-secondary">"{review.review}"</div>}
    </li>
  );
}

export default ReviewItemComponent;