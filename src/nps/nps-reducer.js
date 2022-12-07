import { createSlice } from "@reduxjs/toolkit";
import { findParksBySearchTermThunk } from "./nps-thunk";

const initialState = {
  parks: [],
  loading: false
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
    }
  }
});

export default npsReducer.reducer;