import React, {useEffect, useState} from "react";
import "./profile.css";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {logoutThunk} from "./users-thunks";
import CompletedTripsComponent from "../Trip/completed-trips";
import {deleteTripThunk, findAllTripsThunk} from "../Trip/trips-thunks";
import LoadSVG from "../Spin-1s-200px.svg";
import {useNavigate} from "react-router";
import AllTrips from "../Trip/all-trips";
import RelevantTripsComponent from "../Trip/all-trips";
import { findFollowsByFollowerThunk, findFollowsByFollowingThunk } from "../Follows/follows-thunks";

const ProfileComponent = () => {
    const {currentUser} = useSelector(state => state.users);
    const {followers, following, followersLoading, followingLoading} = useSelector(state => state.follows);

    const dispatch = useDispatch();
    const nav = useNavigate();
    useEffect(() => {
        dispatch(findAllTripsThunk());
        dispatch(findFollowsByFollowerThunk(currentUser.username));
        dispatch(findFollowsByFollowingThunk(currentUser.username));
    }, []);
    const handleLogout = () => {
        dispatch(logoutThunk())
    }


    return(
        <div>
        {currentUser &&
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
                </div>
                <p className="m-0 text-secondary">Email:{currentUser.email}</p>
                <p className="m-0 text-secondary">Phone:{currentUser.phone}</p>
                <div className="text-secondary">Bio: {currentUser.bio}</div>
                <br></br>
                <div>

                    <span className="fw-bold">Trips Planned:</span>
                    <RelevantTripsComponent user = {currentUser._id}/>

                    <br></br>
                    <span className="text-secondary">{currentUser.tripsPlanned}</span>
                    <br></br><br></br>
                    <span className='fw-bold'>Followers</span>
                    <br></br>
                    <div className="mt-3">
                        {!followersLoading && <ul className="list-group">
                            {
                                followers.map(f => 
                                    <li className="list-group-item" style={{"cursor": "pointer"}} onClick={() => nav(`/profile/${f.follower}`)}>{f.follower}</li>
                                )
                            }
                        </ul>}
                    </div>
                    <br></br><br></br>
                    <span className='fw-bold'>Following</span>
                    <br></br>
                    <div className="mt-3">
                        {!followingLoading && <ul className="list-group">
                            {
                                following.map(f => 
                                    <li className="list-group-item" style={{"cursor": "pointer"}} onClick={() => nav(`/profile/${f.following}`)}>{f.following}</li>
                                )
                            }
                        </ul>}
                    </div>
                </div>
                <br></br>
                <br></br>
            </div>
        </div>}
        </div>
    );
}

export default ProfileComponent;

