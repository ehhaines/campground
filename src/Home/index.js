import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "../offset.css";
import { findAllTripsThunk } from "../Trip/trips-thunks";
import "./home.css";

const HomeComponent = () => {

    const {trips, tripsLoading} = useSelector(state => state.trips);

    const nav = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findAllTripsThunk());
    }, [dispatch]);

    const {currentUser} = useSelector(state => state.users);
    return(
    <div>
        <div className="eh-center eh-background pos-background" style={{backgroundImage: `url("images/campground_homepage.jpg")`}}>
            <div className="eh-background w-100 eh-center p-1">
                <h1 className="text-success w-auto fst-italic" style={{"backgroundColor": "rgb(41, 43, 44, 0.75)"}}>{!currentUser && <span>Welcome to Campground!</span>}{currentUser && <span>Welcome, {currentUser.firstName}!</span>}</h1>
            </div>
        </div>
        <div className="pos-descriptionColor p-3">
            <p className="pos-descriptionText fst-italic display-6 my-3 py-3">
            Campground is a site dedicated for people who love the outdoors!<br></br><br></br>
            Here you can:
            find your <b className="display-4">Favorite Parks</b>,
            bring your <b className="display-4">Best Buddies</b>,
            plan your <b className="display-4">Wonderful Trips</b>,
            and connect with <b className="display-4">Mother Nature!</b>
            </p>
        </div>
        <div className="bg-dark py-3">
            <span className="pos-descriptionText fst-italic text-secondary display-6 py-3 my-3">Check out these parks:</span>
        </div>
        <div>
            <div className="col-4 text-end w-100" onClick={() => nav("/details/acad")} style={{"cursor": "pointer", backgroundImage: `url("images/acadia.jpg")`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "100vw", height: "150px"}}><span className="h5 my-3 p-3" style={{"textShadow": "#FFFFFF 3px 0 10px"}}>Acadia National Park</span></div>
            <div className="col-4 text-end w-100" onClick={() => nav("/details/grsm")} style={{"cursor": "pointer", backgroundImage: `url("images/meigsfalls.jpg")`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "100vw", height: "150px"}}><span className="h5 my-3 p-3" style={{"textShadow": "#FFFFFF 3px 0 10px"}}>Great Smoky Mountains National Park</span></div>
            <div className="col-4 text-end w-100" onClick={() => nav("/details/ever")} style={{"cursor": "pointer", backgroundImage: `url("images/everglades.jpg")`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "100vw", height: "150px"}}><span className="h5 my-3 p-3" style={{"textShadow": "#FFFFFF 3px 0 10px"}}>Everglades National Park</span></div>
            <div className="col-4 text-end w-100" onClick={() => nav("/details/glac")} style={{"cursor": "pointer", backgroundImage: `url("images/fishercap.jpg")`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "100vw", height: "150px"}}><span className="h5 my-3 p-3" style={{"textShadow": "#FFFFFF 3px 0 10px"}}>Glacier National Park</span></div>
            <div className="col-4 text-end w-100" onClick={() => nav("/details/yell")} style={{"cursor": "pointer", backgroundImage: `url("images/prismatic.jpg")`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "100vw", height: "150px"}}><span className="h5 my-3 p-3" style={{"textShadow": "#FFFFFF 3px 0 10px"}}>Yellowstone National Park</span></div>
            <div className="col-4 text-end w-100" onClick={() => nav("/details/arch")} style={{"cursor": "pointer", backgroundImage: `url("images/arches.jpg")`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "100vw", height: "150px"}}><span className="h5 my-3 p-3" style={{"textShadow": "#FFFFFF 3px 0 10px"}}>Arches National Park</span></div>
        </div>
        {currentUser && 
            <div>
                <div className="bg-dark py-3">
                    <span className="pos-descriptionText fst-italic text-secondary display-6 py-3 my-3">Your upcoming trips:</span>
                </div>
                {trips.length > 0 && (trips.filter(t => t.user === currentUser._id && !t.isCompleted).length > 0 &&
                    <ul className="list-group">
                        {trips.filter(t => t.user === currentUser._id && !t.isCompleted).map(t => 
                            <li className="list-group-item my-3 border-0" key={t._id}>
                                <div><span className="h5 text-secondary" onClick={() => nav(`/details/${t.parkCode}`)} style={{"cursor": "pointer"}}>{t.parkName}</span><span className="float-end text-secondary">{t.startDate} to {t.endDate}</span></div>
                                <div className="text-secondary">{t.notes}</div>
                            </li>
                        )}
                    </ul>)
                }
                {trips.length > 0 && (trips.filter(t => t.user === currentUser._id && !t.isCompleted).length === 0 &&
                    <div className="text-center display-6 text-secondary my-3 py-3">
                        You have no upcoming trips
                    </div>
                )}
            </div>
        }
        <div className="bg-dark text-secondary text-center display-6 py-3"><span className="my-3 py-3" style={{"color": "rgb(178, 129, 4)"}}>Campground</span></div>
    </div>
    );
}

export default HomeComponent;