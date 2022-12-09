import React from "react";
import "./profile.css";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {logoutThunk} from "./users-thunks";

const ProfileComponent = () => {
    const {currentUser} = useSelector(state => state.users);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logoutThunk())
    }

    return(

        <div className="container margin-top">
            <div className="row">
                <div className="col">
                    <div>
                        <div className="float-start">
                            <h3 className="fw-bold">{currentUser.username}</h3>
                        </div>
                        <Link to="/">
                            <button className="float-end btn" onClick={handleLogout}>
                                <i className="bi bi-arrow-left-short fs-4 text-black">Log out</i>
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
                            <button className="btn btn-light fw-bold rounded-pill float-end mt-3">
                                Edit Profile
                            </button>
                        </Link>
                    </div>
                </div>
            </div>


            <div>
                <h3 className="m-0 fw-bold">{currentUser.username}</h3>
                <p className="m-0 text-secondary">{currentUser.email}</p>
                <p className="m-0 text-secondary">{currentUser.phone}</p>
                <p className="m-0 text-secondary">{currentUser.dateOfBirth}</p>
                <br></br>
                <div className="text-secondary pb-2">
                    <i className="bi bi-geo-alt"></i>{currentUser.location}
                    <i className="bi bi-calendar ms-2"></i>{currentUser.dateJoined}
                    <i className="bi bi-balloon ms-2"></i>{currentUser.numOfTrips}
                </div>
                <br></br>
                <div>
                    <span className="fw-bold">Favorite Parks</span>
                    <br></br>
                    <span className="text-secondary">{currentUser.favoriteParks}</span>
                    <br></br><br></br>
                    <span className="fw-bold">TripsPlanned</span>
                    <br></br>
                    <span className="text-secondary">{currentUser.tripsPlanned}</span>
                    <br></br><br></br>
                    <span className='fw-bold'>Friends</span>
                    <br></br>
                    <span className="text-secondary">{currentUser.friendsList}</span>
                </div>
            </div>
        </div>
    );
}

export default ProfileComponent;

