import React from "react";
import "./profile.css";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile);

  return(

    <div className="container margin-top">
      <div className="row">
        <div className="col">
            <div>
                <Link to="/">
                    <div className="float-start"><i className="bi bi-arrow-left-short fs-4 text-black"></i></div>
                </Link>

                <div className="ms-5">
                    <h3 className="fw-bold m-0">username</h3>
                </div>
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
            <h3 className="m-0 fw-bold">username</h3>
            <p className="m-0 text-secondary">email</p>
            <p className="m-0 text-secondary">phone</p>
            <p className="m-0 text-secondary">birthday</p>
            <br></br>
            <div className="text-secondary pb-2">
                <i className="bi bi-geo-alt"></i>location
                <i className="bi bi-calendar ms-2"></i>dateJoined
                <i className="bi bi-balloon ms-2"></i>numOfTrips
            </div>
            <div>
                <span className="fw-bold">parkList </span>
                <br></br>
                <br></br>
                <span className="fw-bold">tripsPlanned</span>
                <br></br>
                <br></br>
                <span className='fw-bold'>friendList </span>
                <br></br>
                <span className="text-secondary">friends</span>
            </div>
        </div>
    </div>
  );
}

export default ProfileComponent;

