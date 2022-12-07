import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTents } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const NavbarComponent = () => {
  return(
    <nav className="navbar fixed-top navbar-expand navbar-light eh-navbar-background">
      <div className="container-fluid">
        <div className="d-flex flex-grow-1">
            <a className="navbar-brand d-inline-block ms-3" href="/"> <FontAwesomeIcon icon={faTents}/> Campground </a>
        </div>
        <div className="collapse navbar-collapse flex-grow-1 text-right me-2" id="myNavbar">
            <ul className="navbar-nav ms-auto flex-nowrap">
                <li className="nav-item">
                    <a href="/search" className="nav-link m-2 menu-item nav-active"><FontAwesomeIcon icon={faMagnifyingGlass} size="lg"/> <span className="eh-visibility">Search</span></a>
                </li>
                <li className="nav-item">
                    <a href="/profile" className="nav-link m-2 menu-item"><FontAwesomeIcon icon={faUser} size="lg"/> <span className="eh-visibility">Profile</span></a>
                </li>

            </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;