import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-solid-svg-icons";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import { createReviewsThunk } from "./reviews-thunks";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";

const sampleUser = "sample_user_2"

const CreateReview = () => {

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;

  const [sliderValue, setSliderValue] = useState(10);
  const [reviewText, setReviewText] = useState("");

  const dispatch = useDispatch();

  const calculateR = () => {
    if (sliderValue >= 5) {
      return (10 - sliderValue) / 5 * 255
    } else {
      return 255
    }
  }
  
  const calculateG = () => {
    if (sliderValue >= 5) {
      return 210
    } else {
      return sliderValue / 5 * 210
    }
  }

  const params = useParams();
  const thisPark = params.park;

  return(
    <div>
      <div>
        <label htmlFor="rating" className="form-label">Rate this park (1=<FontAwesomeIcon icon={faFrown} color="crimson"/>;  10=<FontAwesomeIcon icon={faSmile} color="limegreen"/>):</label>
        <span className="h4 ms-3" style={{
          "color": `rgb(${calculateR()}, ${calculateG()}, 0)`
        }}> {sliderValue}</span>
      </div>
      <div>
        <input id="rating" type="range" className="form-range col-9" min="0" max="10" step="1" value={sliderValue} onChange={
          (e) => setSliderValue(e.target.value)
        }/>
      </div>
      <div className="form-group">
        <label htmlFor="reviewTextarea">Write your review:</label>
        <textarea className="form-control mb-3" id="reviewTextarea" rows="3" value={reviewText} onChange={
          (e) => setReviewText(e.target.value)
        }></textarea>
      </div>
      <div className="text-end">
        <button className="btn btn-outline-primary mt-3 w-25 py-2" onClick={() => {
          dispatch(createReviewsThunk(
            {
              user: sampleUser,
              parkCode: thisPark,
              rating: sliderValue,
              dateReviewed: today,
              review: reviewText
            }
          ));
        }}>Submit</button>
      </div>
    </div>
  );
}

export default CreateReview;