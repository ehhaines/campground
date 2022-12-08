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
    [findParksBySearchTermThunk.fulfilled]: (state, action) => {
      state.parks = action.payload
    }
  }
});

export default npsReducer.reducer;