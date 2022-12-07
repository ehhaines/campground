import React from "react";
import "./result.css";

const ResultItem = ({park}) => {
  return(
    <a className="list-group-item" href={`/details/${park.parkCode}`}>
      <div className="row">
        <div className="col-3">
          <img src={park.images[0].url} alt={park.parkCode} width="80px" height="80px" className="rounded"/>
        </div>
        <div className="col-9">
          <div className="row eh-result-fullname">{park.fullName}</div>
          <div className="row eh-result-location text-secondary">{park.addresses[0].city}, {park.addresses[0].stateCode}</div>
        </div>
      </div>
    </a>
  );
}

export default ResultItem;