import { createAsyncThunk } from "@reduxjs/toolkit";
import { completeTrip, createTrip, deleteTrip, findAllTrips } from "./trips-service";

export const createTripThunk = createAsyncThunk(
  'CreateTrip',
  (trip) => createTrip(trip)
);

export const findAllTripsThunk = createAsyncThunk(
  'FindAllTrips',
  () => findAllTrips()
);

export const deleteTripThunk = createAsyncThunk(
  'DeleteTrip',
  (tripID) => deleteTrip(tripID)
);

export const completeTripThunk = createAsyncThunk(
  'CompleteTrip',
  (tripID) => completeTrip(tripID)
);
