import React, {useEffect} from "react";
import "./profile.css";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {logoutThunk} from "./users-thunks";
import CompletedTripsComponent from "../Trip/completed-trips";
import {findAllTripsThunk} from "../Trip/trips-thunks";
import LoadSVG from "../Spin-1s-200px.svg";
import {useNavigate} from "react-router";

const ProfileComponent = () => {
    const {currentUser} = useSelector(state => state.users);
    const {trips, tripsLoading} = useSelector(state => state.trips);

    const releventTrips = () => trips.filter(trip => trip.user === currentUser._id);
    const completedTrips = () => releventTrips().filter(trip => trip.isCompleted);
    const dispatch = useDispatch();
    const nav = useNavigate();
    useEffect(() => {
        dispatch(findAllTripsThunk())
    }, []);
    const handleLogout = () => {
        dispatch(logoutThunk())
    }
    return(
        <div>
            {tripsLoading &&
                <div className="text-center">
                    <img src={LoadSVG} alt="...Loading..." />
                </div>
            }
        {currentUser && !tripsLoading &&
        <div className="container margin-top">
            <div className="row">
                <div className="col">
                    <div>
                        <h3 className="mt-2 fw-bold float-start">{currentUser.username}</h3>
                        <Link to="/login" onClick={handleLogout}>
                            <button className="float-end btn">
                                <i className="btn btn-outline-primary fw-bold rounded-pill float-end mt-3">Log out</i>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="position-relative mt-2">
                <img className="w-100" src="/images/route1.jpg" alt="..."/>
                <div className="row">
                    <div className="col-4">
                        <img className="position-relative rounded-circle" style={{left: 20, top: -50}} width="100px" height="100px" src="/images/yellowstone1.png" alt="..."/>
                    </div>
                    <div className="col-8">
                        <Link to="/edit-profile" className="clearfix">
                            <button className="btn btn-outline-success fw-bold rounded-pill float-end mt-3">
                                Edit Profile
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="m-0 fw-bold">{currentUser.username}</h3>
                <div className="text-secondary pb-2">
                    <i className="bi bi-geo-alt"></i>{currentUser.location}
                    <i className="bi bi-calendar ms-2"></i>{currentUser.dateJoined}
                    <i className="bi bi-balloon ms-2"></i>{currentUser.numOfTrips}
                </div>
                <p className="m-0 text-secondary">Email:{currentUser.email}</p>
                <p className="m-0 text-secondary">Phone:{currentUser.phone}</p>
                <p className="m-0 text-secondary">Born:{currentUser.dateOfBirth}</p>
                <br></br>
                <div>
                    <span className="fw-bold">Trips Planned:</span>
                    <div>
                        <ul className="list-group mt-3">
                            {
                                releventTrips().map(trip =>
                                    <li className="list-group-item" key={`${trip.parkCode}${trip.startDate}${trip.endDate}`}>
                                        <span className="text-secondary h5" style={{"cursor": "pointer"}} onClick={() => nav(`/details/${trip.parkCode}`)}>{trip.parkName}</span> <span className="float-end text-secondary">{trip.startDate} - {trip.endDate}</span>
                                    </li>)
                            }
                        </ul>
                    </div>
                    <br></br>
                    <span className="fw-bold">Completed Trips:</span>
                    <div>
                        <ul className="list-group mt-3">
                            {
                                completedTrips().map(trip =>
                                    <li className="list-group-item" key={`${trip.parkCode}${trip.startDate}${trip.endDate}`}>
                                        <span className="text-secondary h5" style={{"cursor": "pointer"}} onClick={() => nav(`/details/${trip.parkCode}`)}>{trip.parkName}</span> <span className="float-end text-secondary">{trip.startDate} - {trip.endDate}</span>
                                    </li>)
                            }
                        </ul>
                        {completedTrips().length == 0 && <div className="text-secondary">No trips to show.</div>}
                    </div>

                    <br></br>
                    <span className="text-secondary">{currentUser.tripsPlanned}</span>
                    <br></br><br></br>
                    <span className='fw-bold'>Friends</span>
                    <br></br>
                    <span className="text-secondary">{currentUser.friendsList}</span>
                </div>
                <br></br>
                <br></br>
            </div>
        </div>}
        </div>
    );
}

export default ProfileComponent;

