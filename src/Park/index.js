import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "../offset.css";
import "./index.css";
import ReviewsListComponent from "../Review";
import { useDispatch, useSelector } from "react-redux";
import { findParkByCodeThunk } from "./parks-thunks";
import { findNpsParkByParkCodeThunk } from "../nps/nps-thunk";
import LoadSVG from "../Spin-1s-200px.svg";
import { createTripThunk } from "../Trip/trips-thunks";
import { createAlertThunk, findAlertsByParkThunk } from "../Alert/alerts-thunks";
import AlertItem from "../Alert";
import { findModerationsByParkThunk } from "../Moderations/moderations-thunks";

const ParkComponent = () => {

  const params = useParams();
  const thisPark = params.park;

  const [isCreatingAlert, setIsCreatingAlert] = useState(false);
  const [isCreatingTrip, setIsCreatingTrip] = useState(false);
  const [tripCreated, setTripCreated] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [notes, setNotes] = useState("");
  const [alertBody, setAlertBody] = useState("");

  const {reviews, reviewsLoading} = useSelector((state) => state.reviews);
  const {npsPark, npsLoading} = useSelector((state) => state.nps);
  const {currentUser} = useSelector(state => state.users);
  const {alerts, alertsLoading} = useSelector(state => state.alerts);

  let today = new Date();
  today = today.toLocaleDateString();

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
    dispatch(findParkByCodeThunk(thisPark));
    dispatch(findNpsParkByParkCodeThunk(thisPark));
    dispatch(findAlertsByParkThunk(thisPark));
  }, []);

  return(
    <div className="eh-offset">
      {npsLoading &&
      <div className="text-center">
        <img src={LoadSVG} alt="...Loading..." />
      </div>
      }
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
                {currentUser && <div>
                  {!isCreatingTrip && <button className="btn btn-primary my-3" onClick={() => setIsCreatingTrip(true)}>Create trip</button>}
                  {isCreatingTrip &&
                    <div>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="start">Start</span>
                        </div>
                        <input type="text" className="form-control" aria-label="start" aria-describedby="start" placeholder="yyyy-mm-dd" value={startDate} onChange={e => setStartDate(e.target.value)}/>
                      </div>
                      <div className="input-group mb-1">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="end">End</span>
                        </div>
                        <input type="text" className="form-control" aria-label="end" aria-describedby="end" placeholder="yyyy-mm-dd" value={endDate} onChange={e => setEndDate(e.target.value)}/>
                      </div>
                      <div className="form-group mb-2">
                        <label htmlFor="notes">Notes:</label>
                        <textarea className="form-control" id="notes" rows="2" value={notes} onChange={e => setNotes(e.target.value)}></textarea>
                      </div>
                      <div>
                        <div><button className="btn btn-primary w-75 my-2" onClick={() => {dispatch(createTripThunk(
                          {
                            user: currentUser,
                            parkCode: npsPark.parkCode,
                            parkName: npsPark.fullName,
                            startDate: startDate,
                            endDate: endDate,
                            notes: notes,
                            isCompleted: false
                          }
                        ))
                        setIsCreatingTrip(false)
                        setTripCreated(true)
                        setStartDate("")
                        setEndDate("")
                        setNotes("")}}>Create</button></div>
                        <div><button className="btn btn-danger w-75 mb-3" onClick={() => setIsCreatingTrip(false)}>Cancel</button></div>
                      </div>
                    </div>
                  }
                  {tripCreated && <div className="text-secondary my-3">Your Trip has been created!</div>}
                </div>}
              </div>
            </div>
            <div className="col-md-8 text-secondary mb-3 pb-3">
              {!alertsLoading && <ul className="list-group mb-3">
                {
                  alerts.map(alert => <AlertItem alert={alert}/>)
                }
              </ul>}
              {currentUser && (currentUser.type === "RANGER" && 
                <div>
                  {!isCreatingAlert && 
                  <div className="text-center">
                    <button className="btn btn-danger" onClick={() => {setIsCreatingAlert(true)}}>Create alert</button>
                  </div>}
                  {isCreatingAlert && <div className="mb-3">
                    <div className="form-group">
                      <label htmlFor="notes">Alert body:</label>
                      <textarea className="form-control" id="notes" rows="2" value={alertBody} onChange={e => setAlertBody(e.target.value)}></textarea>
                    </div>
                    <div className="row mt-2">
                      <div className="text-center col-6">
                        <button className="btn btn-secondary w-75" onClick={() => {setIsCreatingAlert(false)}}>Cancel</button>
                      </div>
                      <div className="text-center col-6">
                        <button className="btn btn-danger w-75" onClick={() => {dispatch(createAlertThunk(
                          {
                            ranger: currentUser,
                            parkCode: npsPark.parkCode,
                            datePosted: today,
                            alert: alertBody
                          }
                        ))}}>Create</button>
                      </div>
                    </div>
                  </div>}
                </div>)
              }
              <div className="text-dark h5">Description:</div>
              <div>{npsPark.description}</div>
              <br></br><br></br>
              <div className="text-dark h5">Weather:</div>
              <div>{npsPark.weatherInfo}</div>
              <br></br><br></br>
              {currentUser && <div>
                <div className="text-dark h5">Your friends are visiting {npsPark.name}... Plan <i>your</i> trip next!</div>
                <div>Placeholder for images of all of user's friends who have visited this park.</div>
              </div>}
              <br></br><br></br>
              <div className="text-dark h5">Reviews:</div>
              {reviews.length === 0 && <div className="text-secondary h5">...There are no reviews for this park...</div>}
              <ReviewsListComponent/>
              <br></br><br></br>
            </div>
          </div>
        </div>
        <img className="w-100" src="/images/mountain2.png" alt=""/>
      </div>}
    </div>
  );
}

export default ParkComponent;