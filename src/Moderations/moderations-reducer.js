import { createSlice } from "@reduxjs/toolkit";
import { createModerationThunk, findModerationsByParkThunk, findModerationsByRangerThunk, unmodThunk } from "./moderations-thunks";

const initialState = {
  moderations: [],
  moderationsLoading: false
}

const moderationsReducer = createSlice({
  name: "moderations",
  initialState,
  extraReducers: {
    [findModerationsByParkThunk.fulfilled]: (state, action) => {
      state.moderations = action.payload;
      state.moderationsLoading = false;
    },
    [findModerationsByParkThunk.pending]: (state, action) => {
      state.moderations = [];
      state.moderationsLoading = true;
    },
    [findModerationsByRangerThunk.fulfilled]: (state, action) => {
      state.moderations = action.payload;
      state.moderationsLoading = false;
    },
    [findModerationsByRangerThunk.pending]: (state, action) => {
      state.moderations = [];
      state.moderationsLoading = true;
    },
    [createModerationThunk.fulfilled]: (state, action) => {
      state.moderations.push(action.payload);
    },
    [unmodThunk.fulfilled]: (state, action) => {
      state.moderations = state.moderations.filter(m => m.ranger === action.payload[0] && m.parkCode === action.payload[1]);
    }
  }
});

export default moderationsReducer.reducer;