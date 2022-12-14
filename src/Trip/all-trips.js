import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {completeTripThunk, deleteTripThunk, findAllTripsThunk} from "./trips-thunks";
import LoadSVG from "../Spin-1s-200px.svg";
import { useNavigate } from "react-router";

const RelevantTripsComponent = (user) => {

    const {trips, tripsLoading} = useSelector(state => state.trips);
    const relevantTrips = () => trips.filter(trip => trip.user === user.user);

    const dispatch = useDispatch();

    const nav = useNavigate();

    useEffect(() => {
        dispatch(findAllTripsThunk())
    }, []);
    const handleDeleteTrip = (tripID) => {
        dispatch(deleteTripThunk(tripID))
        dispatch(findAllTripsThunk())
    }
    const handleCheckBox = (tripID) => {
        dispatch(completeTripThunk(tripID))
        dispatch(findAllTripsThunk())
    }

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
                            relevantTrips().map(trip =>
                                <li className="list-group-item" key={`${trip.parkCode}${trip.startDate}${trip.endDate}`}>
                                    <input type="checkbox" className="m-lg-2" checked={trip.isCompleted}
                                           onChange={() => {handleCheckBox(trip._id)}}/>
                                    <span className="text-secondary h5" style={{"cursor": "pointer"}} onClick={() => nav(`/details/${trip.parkCode}`)}>{trip.parkName}</span>

                                    <span className="float-end text-secondary">{trip.startDate} - {trip.endDate} <i className="bi bi-x-lg m-lg-1" onClick={() => handleDeleteTrip(trip._id)}></i></span>
                                </li>)
                        }
                    </ul>
                    {relevantTrips().length === 0 && <div className="text-secondary">No trips to show.</div>}
                </div>
            }
        </div>
    );
}

export default RelevantTripsComponent;