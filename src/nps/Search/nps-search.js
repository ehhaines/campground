import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { findParksBySearchTermThunk } from "../nps-thunk";
import "./nps.css";
import { useNavigate } from "react-router";

const NpsSearch = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const nav = useNavigate();

  useEffect(() => {
    dispatch(findParksBySearchTermThunk(searchTerm))
  }, []);

  return(
    <div>
      <div className="form-group eh-center w-100 eh-background" style={{
        backgroundImage: `linear-gradient(to bottom, rgba(226, 229, 224, 0.3), rgba(226, 229, 224, 0.3)),
        url('images/hallet.jpg')`}}>
        <input className="form-control form-control-lg eh-sizing"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }} 
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            console.log("keypressed");
            nav(`/search/${searchTerm}`);
          }
        }}
        value={searchTerm} placeholder="Search for a national park"></input>
      </div>
    </div>
  )
}

export default NpsSearch;