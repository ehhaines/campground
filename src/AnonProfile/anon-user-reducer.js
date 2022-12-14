import { createSlice } from "@reduxjs/toolkit";
import { banThunk, unbanThunk } from "../Profile/users-thunks";
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
    },
    [banThunk.fulfilled]: (state, action) => {
      state.anonUser[0].isBanned = true;
    },
    [unbanThunk.fulfilled]: (state, action) => {
      state.anonUser[0].isBanned = false;
    }
  }
});

export default anonUserReducer.reducer;