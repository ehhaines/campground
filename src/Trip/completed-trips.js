import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findAllTripsThunk } from "./trips-thunks";
import LoadSVG from "../Spin-1s-200px.svg";
import { useNavigate } from "react-router";

const CompletedTripsComponent = (user) => {

  const {trips, tripsLoading} = useSelector(state => state.trips);

  const releventTrips = () => trips.filter(trip => trip.user === user.user);
  const completedTrips = () => releventTrips().filter(trip => trip.isCompleted);

  const dispatch = useDispatch();

  const nav = useNavigate();

  useEffect(() => {
    dispatch(findAllTripsThunk())
  }, []);

  return(
    <div>
      {tripsLoading &&
        <div className="text-center">
          <img src={LoadSVG} alt="...Loading..." />
        </div>
      }
      {!tripsLoading &&
        <div>
          <ul className="list-group mt-3">
            {
              completedTrips().map(trip => 
                <li className="list-group-item" key={`${trip.parkCode}${trip.startDate}${trip.endDate}`}>
                  <span className="text-secondary h5" style={{"cursor": "pointer"}} onClick={() => nav(`/details/${trip.parkCode}`)}>{trip.parkName}</span> <span className="float-end text-secondary">{trip.startDate} - {trip.endDate}</span>
                </li>)
            }
          </ul>
          {completedTrips().length === 0 && <div className="text-secondary">No trips to show.</div>}
        </div>
      }
    </div>
  );
}

export default CompletedTripsComponent;