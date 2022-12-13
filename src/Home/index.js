import React from "react";
import { useSelector } from "react-redux";
import "../offset.css";
import "./home.css";

const HomeComponent = () => {

  const {currentUser} = useSelector(state => state.users);
    if(currentUser){
        return(
            <div className="eh-center w-100 eh-background" style={{backgroundImage: `url("images/campground_homepage.jpg")`}}>
                <div className="h1 fw-bolder pos-fixedHi fst-italic">
                    Hi, {currentUser.username}!
                </div>
                <div className="eh-background w-100 eh-center" style={{backgroundImage: `linear-gradient(to bottom, rgba(226, 229, 224, 0.2), rgba(226, 229, 224, 0.2)), url("images/loggedinBackground.jpg")`}}>
                <h1 className="h1 fw-bold fst-italic pos-fixedInit">Start your journey by searching for the right parks!</h1>
                </div>
            </div>
        );
    } else {
        return(
            <div className="eh-center w-100 eh-background" style={{backgroundImage: `url("images/campground_homepage.jpg")`}}>
                <div className="h4 pos-fixed text-warning fst-italic">
                    Add your favorite parks<br></br>
                    Bring your best buddies<br></br>
                    Plan your wonderful trips<br></br>
                    Connect with Mother Nature!
                </div>
                <div className="eh-background w-100 eh-center" style={{backgroundImage: `url("images/campground_homepage.jpg")`}}>
                    <h1 className="text-success fw-bold fst-italic pos-fixedWelcome">Welcome to Campground!</h1>
                </div>
            </div>
        );
    }

}

export default HomeComponent;