import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../reducers/profile-reducer";
import "../Profile/profile.css";

const EditProfile = () => {
    const navigate = useNavigate();
    const profile = useSelector(state => state.profile);
    const dispatch = useDispatch();

    const [name, setName] = useState(profile.username);
    const [email, setEmail] = useState(profile.email);
    const [phone, setPhone] = useState(profile.phone);
    const [location, setLocation] = useState(profile.location);
    const birthdayData = profile.dateOfBirth.split('/')
    const [birthday, setBirthday] = useState(birthdayData[2] + "-" + birthdayData[0] + '-' + birthdayData[1]);

    const updateProfileHandler = () => {
        dispatch(updateProfile({name, email, phone, location, birthday}));
        navigate('/profile');
    }
    return (
        <div>
        <div className="row margin-top">
            <div className="float-start text-black fw-bold fs-4 ms-2">Edit Profile</div>
        </div>

            <div className="position-relative mt-2">
                <div className="row">
                    <img className="w-auto" style={{"opacity": "0.9"}} src="/images/route1.jpg" alt="..."/>
                </div>
                <div className="row">
                    <div className="col-4">
                        <img className="position-relative rounded-circle" style={{left: 20, top: -50, "opacity": "0.9"}} width="100px" height="100px" src="/images/yellowstone1.png" alt="..."/>
                    </div>
                    <div className="col-8"></div>
                </div>
                <div>
                    <input type="file" className="ms-4"/>
                    <button className="text-secondary text-success border rounded-2">update profile picture</button>
                </div>
                <br></br>
                <div>
                    <input type="file" className="ms-4"/>
                    <button className="text-secondary text-success border rounded-2 ">update background picture</button>
                </div>
            </div>
            <br></br>

            <form>
                <div className="form-group ms-3 me-3 fw-bold">
                    <label htmlFor="inputName">Name</label>
                    <input type="text" className="form-control" id="inputName" placeholder="Name"
                           value={name} onChange={(e) => {
                        setName(e.target.value)
                    }}/>
                </div>

                <div className="form-group pt-4 ms-3 me-3 fw-bold">
                    <label htmlFor="inputEmail">Email</label>
                    <input type="text" className="form-control" id="inputEmail" placeholder="Email"
                           value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }}/>
                </div>

                <div className="form-group pt-4 ms-3 me-3 fw-bold">
                    <label htmlFor="inputPhone">Phone</label>
                    <input type="text" className="form-control" id="inputPhone" placeholder="Phone"
                           value={phone} onChange={(e) => {
                        setPhone(e.target.value)
                    }}/>
                </div>

                <div className="form-group pt-4 ms-3 me-3 fw-bold">
                    <label htmlFor="inputLocation">Location</label>
                    <input type="text" className="form-control" id="inputLocation" placeholder="Location"
                           value={location} onChange={(e) => setLocation(e.target.value)}
                    />
                </div>

                <div className="form-group pt-4 ms-3 me-3 fw-bold">
                    <label htmlFor="inputBirthday">Birth date</label>
                    <input type="date" className="form-control" id="inputBirthday" placeholder="Location"
                           value={birthday} onChange={(e) => setBirthday(e.target.value)}
                    />
                </div>
            </form>
            <br></br>
            <div className="row mt-4">
                <div className="col-3 ms-3">
                    <Link to="/profile/advanced">
                        <i className="h1 bi bi-arrow-right-short fs-4 text-black">switch to advanced account</i>
                    </Link>
                </div>

                <div className="col-8">
                    <Link to="/profile">
                        <i className="btn btn-dark rounded-pill float-end">Cancel</i>
                    </Link>
                </div>
                <div className="col pe-5">
                    <button
                        className="btn btn-dark rounded-pill float-end"
                        onClick={updateProfileHandler}
                    >
                        Save
                    </button>
                </div>
            </div>
            <br></br>

        </div>
    )
}

export default EditProfile;