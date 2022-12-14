import { createSlice } from "@reduxjs/toolkit";
import { createAlertThunk, findAlertsByParkThunk, findAlertsByRangerThunk, resolveAlertThunk } from "./alerts-thunks";


const initialState = {
  alerts: [],
  alertsLoading: false
}

const alertsReducer = createSlice({
  name: "alerts",
  initialState,
  extraReducers: {
    [findAlertsByParkThunk.fulfilled]: (state, action) => {
      state.alerts = action.payload;
      state.alertsLoading = false;
    },
    [findAlertsByParkThunk.pending]: (state, action) => {
      state.alerts = [];
      state.alertsLoading = true;
    },
    [findAlertsByRangerThunk.fulfilled]: (state, action) => {
      state.alerts = action.payload;
      state.alertsLoading = false;
    },
    [findAlertsByRangerThunk.pending]: (state, action) => {
      state.alerts = [];
      state.alertsLoading = true;
    },
    [resolveAlertThunk.fulfilled]: (state, action) => {
      state.alerts = state.alerts.filter(alert => alert._id !== action.payload);
    },
    [createAlertThunk.fulfilled]: (state, action) => {
      state.alerts.push(action.payload);
    }
  }
});

export default alertsReducer.reducer;