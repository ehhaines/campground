import { createSlice } from "@reduxjs/toolkit";
import { findNpsParkByParkCodeThunk, findParksBySearchTermThunk } from "./nps-thunk";

const initialState = {
  parks: [],
  npsPark: {},
  loading: false,
  npsLoading: false
}

const npsReducer = createSlice({
  name: "nps",
  initialState,
  extraReducers: {
    [findParksBySearchTermThunk.pending]: (state) => {
      state.parks = []
      state.loading = true
    },
    [findParksBySearchTermThunk.fulfilled]: (state, action) => {
      state.parks = action.payload.data
      state.loading = false
    },
    [findNpsParkByParkCodeThunk.pending]: (state, action) => {
      state.npsPark = {}
      state.npsLoading = true
    },
    [findNpsParkByParkCodeThunk.fulfilled]: (state, action) => {
      state.npsPark = action.payload.data[0]
      state.npsLoading = false
    }
  }
});

export default npsReducer.reducer;