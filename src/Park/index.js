import React, { useEffect } from "react";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "../offset.css";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { findParkByCodeThunk } from "./parks-thunks";
import ReviewsListComponent from "../Review";

const ParkComponent = () => {

  const params = useParams();
  const thisPark = params.park;

  const {currentPark, loading} = useSelector((state) => state.parks);
  const {reviews, reviewsLoading} = useSelector((state) => state.reviews);

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

  const calcAvgRating = () => {
    let sum = 0;
    for (let i = 0; i < reviews.length; i++) {
      sum += reviews[i].rating;
    }
    let avg = sum / reviews.length;
    avg = Math.round(avg * 10) / 10;
    return avg;
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findParkByCodeThunk(thisPark))
  }, []);

  return(
    <div className="eh-offset">
      {!loading && <div>
        <div className="container">
          <div className="row my-3">
            <div className="col-md-4 text-center text-dark">
              <div className="eh-sticky">
                <img className="w-75 rounded mb-3" src={currentPark.image} alt=""/>
                <div className="display-6 mb-1">{currentPark.fullName}</div>
                <div className="text-secondary"><FontAwesomeIcon icon={faLocationDot}/> Location: {currentPark.statesSpanned}</div>
                {(!reviewsLoading && reviews) && <div className="h4 mt-3"><span style={
                  {"color": `rgb(${calculateR(calcAvgRating())}, ${calculateG(calcAvgRating())}, 0)`}
                  }>{calcAvgRating()}</span> / 10
                </div>}
              </div>
            </div>
            <div className="col-md-8 text-secondary mb-3 pb-3">
              <div className="text-dark h5">Description:</div>
              <div>{currentPark.description}</div>
              <br></br><br></br>
              <div className="text-dark h5">Weather:</div>
              <div>{currentPark.weather}</div>
              <br></br><br></br>
              <div className="text-dark h5">Your friends are visiting {currentPark.shortName}... Plan <i>your</i> trip next!</div>
              <div>Placeholder for images of all of user's friends who have visited this park.</div>
              <br></br><br></br>
              <div className="text-dark h5">Reviews:</div>
              <ReviewsListComponent/>
            </div>
          </div>
        </div>
        <img className="w-100" src="/images/mountain2.png" alt=""/>
      </div>}
    </div>
  );
}

export default ParkComponent;