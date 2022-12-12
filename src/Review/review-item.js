import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faFrown } from "@fortawesome/free-solid-svg-icons";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import { deleteReviewThunk, updateReviewThunk } from "./reviews-thunks";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

// const sampleUser = "sample_user_2";

const ReviewItemComponent = ({review}) => {

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;

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

  const [isEditing, setIsEditing] = useState(false);
  const [editReviewText, setEditReviewText] = useState(review.review);
  const [sliderValue, setSliderValue] = useState(review.rating);

  const {currentUser} = useSelector((state) => state.users);


  const nav = useNavigate();
  const dispatch = useDispatch();

  return(
    <li className="list-group-item">
      <div className="row mt-1 mb-3">
        <div className="col-10 h5">
          <span style={{"cursor": "pointer"}} onClick={() => {
            if (currentUser) {
              if (review.user === currentUser.username){
                nav("/profile");
              } else {
                nav(`/profile/${review.user}`);
              }
            } else {
              nav(`/profile/${review.user}`);
            }
          }}>{review.user}</span> - <span className="text-secondary h6">{review.dateReviewed}</span> {currentUser && (review.user === currentUser.username && 
          <button className="btn my-0 mx-1 p-0 ms-1" onClick={() => {dispatch(deleteReviewThunk(review))}}>
            <FontAwesomeIcon icon={faTrash} color="red"/>
          </button>)}
          {currentUser && (review.user === currentUser.username && <button className="btn my-0 mx-1 p-0 ms-1" onClick={() => {setIsEditing(true)}}>
            <FontAwesomeIcon icon={faPenToSquare} color="blue"/>
          </button>)}
        </div>
        {!isEditing && <div className="col h5 text-end me-2" style={{
          "color": `rgb(${calculateR(review.rating)}, ${calculateG(review.rating)}, 0)`
        }}>{review.rating}</div>}
        {(!isEditing && review.dateEdited) && <i className="text-secondary" style={{"fontSize": "12px"}}>Edited {review.dateEdited}</i>}
      </div>
      {isEditing &&
      <div>
        <div>
          <label htmlFor="rating" className="form-label">Rate this park (1=<FontAwesomeIcon icon={faFrown} color="crimson"/>;  10=<FontAwesomeIcon icon={faSmile} color="limegreen"/>):</label>
          <span className="h4 ms-3" style={{
            "color": `rgb(${calculateR(sliderValue)}, ${calculateG(sliderValue)}, 0)`
          }}> {sliderValue}</span>
        </div>
        <div>
          <input id="rating" type="range" className="form-range col-9" min="0" max="10" step="1" value={sliderValue} onChange={
            (e) => setSliderValue(e.target.value)
          }/>
        </div>
      </div>
      }
      {(review.review && !isEditing) && <div className="text-secondary">"{review.review}"</div>}
      {isEditing && <div className="form-group">
        <label htmlFor="reviewTextarea">Edit your review:</label>
        <textarea className="form-control mb-3" id="reviewTextarea" rows="3" value={editReviewText} onChange={
          (e) => setEditReviewText(e.target.value)
        }></textarea>
      </div>}
      {isEditing &&
        <div>
          <button className="btn btn-outline-danger" onClick={() => {setIsEditing(false)}}>Cancel</button>
          <button className="btn btn-outline-primary float-end" onClick={() => {
            dispatch(updateReviewThunk({
              ...review,
              review: editReviewText,
              rating: parseInt(sliderValue),
              dateEdited: today
            }));
            setIsEditing(false);
          }}>Submit</button>
        </div>
      }
    </li>
  );
}

export default ReviewItemComponent;