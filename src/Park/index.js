import React from "react";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "../offset.css";
import "./index.css";

const park_sample = {
  fullName: "Acadia National Park",
  shortName: "Acadia",
  parkCode: "acad",
  description: "Acadia National Park protects the natural beauty of the highest rocky headlands along the Atlantic coastline of the United States, an abundance of habitats, and a rich cultural heritage. At 4 million visits a year, it's one of the top 10 most-visited national parks in the United States. Visitors enjoy 27 miles of historic motor roads, 158 miles of hiking trails, and 45 miles of carriage roads.",
  weather: "Located on Mount Desert Island in Maine, Acadia experiences all four seasons. Summer temperatures range from 45-90F (7-30C). Fall temperatures range from 30-70F (-1-21C). Typically the first frost is in mid-October and first snowfall begins in November and can continue through April with an average accumulation of 73 inches (185 cm). Winter temperatures range from 14-35F (-10 - 2C). Spring temperatures range from 30-70F (-1-21C).",
  city: "Bar Harbor",
  state: "ME",
  statesSpanned: "ME",
  image: "https://www.nps.gov/common/uploads/structured_data/3C7B45AE-1DD8-B71B-0B7EE131C7DFC2F5.jpg"
};

const rating_sample = 8.2;

const calculateR = () => {
  if (rating_sample >= 5) {
    return (10 - rating_sample) / 5 * 255
  } else {
    return 255
  }
}

const calculateG = () => {
  if (rating_sample >= 5) {
    return 210
  } else {
    return rating_sample / 5 * 210
  }
}

const ParkComponent = () => {
  // const params = useParams();
  // const thisPark = params.park;
  return(
    <div className="eh-offset">
      <div className="container">
        <div className="row my-3">
          <div className="col-4 text-center text-dark">
            <div className="eh-sticky">
              <img className="w-75 rounded mb-3" src={park_sample.image} alt=""/>
              <div className="display-6 mb-1">{park_sample.fullName}</div>
              {park_sample.statesSpanned.split(",").length > 1 &&
                <div className="text-secondary">Multiple states: {park_sample.statesSpanned}</div>
              }
              {park_sample.statesSpanned.split(",").length === 1 &&
                <div className="text-secondary"><FontAwesomeIcon icon={faLocationDot}/> {park_sample.city}, {park_sample.state}</div>
              }
              <div className="h4 mt-3"><span style={
                {"color": `rgb(${calculateR()}, ${calculateG()}, 0)`}
              }>{rating_sample}</span> / 10</div>
            </div>
          </div>
          <div className="col text-secondary mb-3 pb-3">
            <div className="text-dark h5">Description:</div>
            <div>{park_sample.description}</div>
            <br></br><br></br>
            <div className="text-dark h5">Weather:</div>
            <div>{park_sample.weather}</div>
            <br></br><br></br>
            <div className="text-dark h5">Your friends are visiting {park_sample.shortName}... Plan <i>your</i> trip next!</div>
            <div>Placeholder for images of all of user's friends who have visited this park.</div>
            <br></br><br></br>
            <div className="text-dark h5">Reviews:</div>
            <div>Placeholder for reviews of this park.</div>
          </div>
        </div>
      </div>
      <img className="w-100" src="/images/mountain.png" alt=""/>
    </div>
  );
}

export default ParkComponent;