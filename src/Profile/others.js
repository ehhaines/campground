import React from "react";
import "./profile.css";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const OthersComponent = () => {
    const profile = useSelector(state => state.profile);

    return(

        <div className="container margin-top">
            <div className="row">
                <div className="col">
                    <div>
                        <Link to="/">
                            <div className="float-start"><i className="bi bi-arrow-left-short fs-4 text-black">Back</i></div>
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
                </div>
            </div>


            <div>
                <h3 className="m-0 fw-bold">{profile.username}</h3>
                <br></br>
                <div className="text-secondary pb-2">
                    <i className="bi bi-geo-alt"></i>{profile.location}
                    <i className="bi bi-calendar ms-2"></i>{profile.dateJoined}
                    <i className="bi bi-balloon ms-2"></i>{profile.numOfTrips}
                </div>
                <br></br>
                <div>
                    <span className="fw-bold">Favorite Parks</span>
                    <br></br>
                    <span className="text-secondary">{profile.favoriteParks}</span>
                </div>
            </div>
        </div>
    );
}

export default OthersComponent;

