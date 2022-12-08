import { createSlice } from "@reduxjs/toolkit";
import { findParkByCodeThunk } from "./parks-thunks";

const initialState = {
  currentPark: null,
  loading: false
}

const parksReducer = createSlice({
  name: "parks",
  initialState,
  extraReducers: {
    [findParkByCodeThunk.fulfilled]: (state, action) => {
      state.currentPark = action.payload;
      state.loading = false;
    },
    [findParkByCodeThunk.pending]: (state, action) => {
      state.currentPark = null;
      state.loading = true;
    }
  }
});

export default parksReducer.reducer;