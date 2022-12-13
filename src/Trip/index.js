import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findAllTripsThunk } from "./trips-thunks";

const TripsComponent = () => {

  const {trips, tripsLoading} = useSelector(state => state.trips);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findAllTripsThunk())
  }, []);

  return(
    <div>
      All trips!
    </div>
  );
}

export default TripsComponent;