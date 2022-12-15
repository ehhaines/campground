import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findParksBySearchTermThunk } from "../nps-thunk";
import ResultList from "./result-list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import "./nps.css";
import LoadSVG from "../../Spin-1s-200px.svg";
import { useNavigate, useParams } from "react-router";

const NpsSearchResults = () => {

  const {parks, loading} = useSelector((state) => state.nps)
  const dispatch = useDispatch();

  const params = useParams();

  const nav = useNavigate();

  useEffect(() => {
    dispatch(findParksBySearchTermThunk(params.park))
  }, [dispatch, params.park]);

  return(
    <div>
      <div className="eh-center w-100 eh-background" style={{
        backgroundImage: "linear-gradient(to bottom, rgba(226, 229, 224, 0.3), rgba(226, 229, 224, 0.3)), url('/images/hallet.jpg')"}}>
        <div className="eh-sizing">
          {loading &&
          <div className="text-center">
            <img src={LoadSVG} alt="...Loading..." />
          </div>}
          {!loading && 
          <div className="position-relative overflow-auto rounded">
            <button className="bg-transparent border-0 position-absolute top-0 end-0 eh-button rounded-circle" style={{"zIndex": 3}}
            onClick={() => {
              nav("/search");
            }}
            >
              <FontAwesomeIcon icon={faX}/>
            </button>
            {parks && <ResultList className="position-absolute"/>}
            {parks.length === 0 && <div className="bg-light container border-rounded p-3">
              <h2 className="mt-3">Uh Oh!</h2>
              <p className="mb-3">We couldn't find any national parks that matched your query! Please revise your search and try again...(tips: make sure your query uses complete words and is spelled correctly)</p>
            </div>}
          </div>}
        </div>
      </div>
    </div>
  )
}

export default NpsSearchResults;