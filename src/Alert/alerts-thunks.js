import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAlert, findAlertsByPark, findAlertsByRanger, resolveAlert } from "./alerts-service";

export const findAlertsByParkThunk = createAsyncThunk(
  'findAlertsByPark',
  (park) => findAlertsByPark(park)
);

export const findAlertsByRangerThunk = createAsyncThunk(
  'findAlertsByRanger',
  (ranger) => findAlertsByRanger(ranger)
);

export const resolveAlertThunk = createAsyncThunk(
  'resolveAlert',
  (alert) => resolveAlert(alert)
);

export const createAlertThunk = createAsyncThunk(
  'createAlert',
  (alert) => createAlert(alert)
);