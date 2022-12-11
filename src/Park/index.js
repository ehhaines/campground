import React, { useEffect } from "react";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "../offset.css";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { findParkByCodeThunk } from "./parks-thunks";

const ParkComponent = () => {

  const params = useParams();
  const thisPark = params.park;

  const {reviews, reviewsLoading} = useSelector((state) => state.reviews);
  const {npsPark, npsLoading} = useSelector((state) => state.nps);

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
    dispatch(findNpsParkByParkCodeThunk(thisPark))
  }, []);

  return(
    <div className="eh-offset">
      {npsLoading &&
      <div className="text-center">
      <img src={LoadSVG} alt="...Loading..." />
    </div>}
      {!npsLoading && <div>
        <div className="container">
          <div className="row my-3">
            <div className="col-md-4 text-center text-dark">
              <div className="eh-sticky">
                {npsPark.images && <img className="w-75 rounded mb-3" src={npsPark.images[0].url} alt=""/>}
                <div className="display-6 mb-1">{npsPark.fullName}</div>
                <div className="text-secondary"><FontAwesomeIcon icon={faLocationDot}/> Location: {npsPark.states}</div>
                {(!reviewsLoading && reviews.length > 0) && <div className="h4 mt-3"><span style={
                  {"color": `rgb(${calculateR(calcAvgRating())}, ${calculateG(calcAvgRating())}, 0)`}
                  }>{calcAvgRating()}</span> / 10
                </div>}
              </div>
            </div>
            <div className="col-md-8 text-secondary mb-3 pb-3">
              <div className="text-dark h5">Description:</div>
              <div>{npsPark.description}</div>
              <br></br><br></br>
              <div className="text-dark h5">Weather:</div>
              <div>{npsPark.weatherInfo}</div>
              <br></br><br></br>
              <div className="text-dark h5">Your friends are visiting {npsPark.name}... Plan <i>your</i> trip next!</div>
              <div>Placeholder for images of all of user's friends who have visited this park.</div>
              <br></br><br></br>
              <div className="text-dark h5">Reviews:</div>
              {reviews.length === 0 && <div className="text-secondary h5">...There are no reviews for this park...</div>}
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