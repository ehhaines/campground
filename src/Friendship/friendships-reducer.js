import { createSlice } from "@reduxjs/toolkit";
import { createFriendshipThunk, deleteFriendshipThunk, findFriendshipsByUserThunk } from "./friendships-thunk";

const initialState = {
  friendships: [],
  friendshipsLoading: false,
}

const friendshipsReducer = createSlice({
  name: "friendships",
  initialState,
  extraReducers: {
    [findFriendshipsByUserThunk.fulfilled]: (state, {payload}) => {
      state.friendships = payload;
      state.friendshipsLoading = false;
    },
    [findFriendshipsByUserThunk.pending]: (state, action) => {
      state.friendships = [];
      state.friendshipsLoading = true;
    },
    [createFriendshipThunk.fulfilled]: (state, action) => {
      state.friendships.unshift(action.payload)
    },
    [deleteFriendshipThunk.fulfilled]: (state, action) => {
      state.friendships = state.friendships.filter(fs => fs._id !== action.payload._id)
    }
  }
});

export default friendshipsReducer.reducer;
