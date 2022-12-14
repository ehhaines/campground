import { createSlice } from "@reduxjs/toolkit";
import { findFollowsByFollowerThunk, findFollowsByFollowingThunk, followThunk, unfollowThunk } from "./follows-thunks";

const initialState = {
  followers: [],
  following: [],
  followersLoading: false,
  followingLoading: false
}

const followsReducer = createSlice({
  name: "follows",
  initialState,
  extraReducers: {
    [findFollowsByFollowerThunk.fulfilled]: (state, action) => {
      state.following = action.payload;
      state.followingLoading = false;
    },
    [findFollowsByFollowerThunk.pending]: (state, action) => {
      state.following = [];
      state.followingLoading = true;
    },
    [findFollowsByFollowingThunk.fulfilled]: (state, action) => {
      state.followers = action.payload;
      state.followersLoading = false;
    },
    [findFollowsByFollowingThunk.pending]: (state, action) => {
      state.followers = [];
      state.followersLoading = true;
    },
    [followThunk.fulfilled]: (state, action) => {
      state.followers.unshift(action.payload);
    },
    [unfollowThunk.fulfilled]: (state, action) => {
      state.following = state.follows.filter(fol => fol._id !== action.payload._id);
    }
  }
});

export default followsReducer.reducer;