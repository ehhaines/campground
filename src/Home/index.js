import React from "react";
import { useSelector } from "react-redux";
import "../offset.css";

const HomeComponent = () => {

  const {currentUser} = useSelector(state => state.users);

  return(
      <div className="eh-center w-100 eh-background" style={{backgroundImage: `url("images/campground_homepage.jpg")`}}>
        <div className="container position-relative">
          {currentUser && <h1 className="text-success fw-bold fst-italic">Hi, {currentUser.firstName}!</h1>}
          {!currentUser && <h1 className="text-success fw-bold fst-italic">Welcome to Campground!</h1>}
        </div>
      </div>
  );
}

export default HomeComponent;