import { createSlice } from "@reduxjs/toolkit";
import { findUserByUsernameThunk } from "./anon-user-thunks";

const initialState = {
  anonUser: [],
  anonUserLoading: false
}

const anonUserReducer = createSlice({
  name: "anonUsers",
  initialState,
  extraReducers: {
    [findUserByUsernameThunk.fulfilled]: (state, {payload}) => {
      state.anonUserLoading = false;
      state.anonUser = payload;
    },
    [findUserByUsernameThunk.pending]: (state, action) => {
      state.anonUser = [];
      state.anonUserLoading = true;
    }
  }
});

export default anonUserReducer.reducer;