import { createAsyncThunk } from "@reduxjs/toolkit";
import { completeTrip, createTrip, deleteTrip, findAllTrips } from "./trips-service";

export const createTripThunk = createAsyncThunk(
  'CreateTrip',
  async (trip) => await createTrip(trip)
);

export const findAllTripsThunk = createAsyncThunk(
  'FindAllTrips',
  async () => await findAllTrips()
);

export const deleteTripThunk = createAsyncThunk(
  'DeleteTrip',
  async (tripID) => {
      await deleteTrip(tripID)
      return tripID
  }

);

export const completeTripThunk = createAsyncThunk(
  'CompleteTrip',
  async (tripID) => await completeTrip(tripID)
);
