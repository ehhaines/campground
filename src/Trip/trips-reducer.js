import { createSlice } from "@reduxjs/toolkit";
import { completeTripThunk, createTripThunk, deleteTripThunk, findAllTripsThunk } from "./trips-thunks";

const initialState = {
  trips: [],
  tripsLoading: false
}

const tripsReducer = createSlice({
  name: "trips",
  initialState,
  extraReducers: {
    [findAllTripsThunk.fulfilled]: (state, {payload}) => {
      state.trips = payload;
      state.tripsLoading = false;
    },
    [findAllTripsThunk.pending]: (state, action) => {
      state.trips = [];
      state.tripsLoading = true;
    },
    [createTripThunk.fulfilled]: (state, action) => {
      state.trips.unshift(action.payload)
    },
    [deleteTripThunk.fulfilled]: (state, action) => {
      state.trips = state.trips.filter(trip => trip._id !== action.payload._id)
    },
    [completeTripThunk.fulfilled]: (state, action) => {
      const replace = state.trips.findIndex(trip => trip._id === action.payload._id)
      state.trips[replace] = action.payload
    }
  }
});

export default tripsReducer.reducer;