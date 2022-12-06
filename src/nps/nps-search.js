import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findParksBySearchTermThunk } from "./nps-thunk";
import "./nps.css";

const NpsSearch = () => {

  const [isSearchResults, setIsSearchResults] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const {parks, loading} = useSelector((state) => state.nps)
  const dispatch = useDispatch();

  return(
    <div className="form-group eh-center w-100 eh-background" style={{
      backgroundImage: `linear-gradient(to bottom, rgba(226, 229, 224, 0.3), rgba(226, 229, 224, 0.3)),
      url('images/hallet.jpg')`}}>
      <input className="form-control form-control-lg w-50"
      onChange={(e) => {
        setSearchTerm(e.target.value);
      }} 
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          dispatch(findParksBySearchTermThunk(searchTerm))
        }
      }}
      value={searchTerm} placeholder="Search for a national park"></input>
      <div>
        {loading && <span>Loading...</span>}
        {!loading && <ul>
          {
            parks.map((park) => 
              <li key={park.parkCode}>
                {park.fullName}
              </li>
            )
          }
        </ul>}
      </div>
    </div>
  )
}

export default NpsSearch;