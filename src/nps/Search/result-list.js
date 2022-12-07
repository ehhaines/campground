import React from "react";
import { useSelector } from "react-redux";
import ResultItem from "./result-item";

const ResultList = () => {

  const parks = useSelector(
    (state) => state.nps.parks
  );

  return(
    <div style={{"zIndex": 2, "maxHeight": "500px"}}>
      <ul className="list-group">
        {
          parks.map(park =>
            <ResultItem 
            key={park.parkCode}
            park={park}/>
          )
        }
      </ul>
    </div>
  );
}

export default ResultList;