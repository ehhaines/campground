import React from "react";
import { useSelector } from "react-redux";
import "../offset.css";

const HomeComponent = () => {

  const {currentUser} = useSelector(state => state.users);

  return(
    <div className="container position-relative eh-offset">
      {currentUser && <h1>Hi, {currentUser.firstName}!</h1>}
      {!currentUser && <h1>Welcome to Campground!</h1>}
    </div>
  );
}

export default HomeComponent;