import { createAsyncThunk } from "@reduxjs/toolkit";
import { findFollowsByFollower, findFollowsByFollowing, follow, unfollow } from "./follows-service";

export const findFollowsByFollowerThunk = createAsyncThunk(
  'findFollowsByFollower',
  (follower) => findFollowsByFollower(follower)
);

export const findFollowsByFollowingThunk = createAsyncThunk(
  'findFollowsByFollowing',
  (following) => findFollowsByFollowing(following)
);

export const followThunk = createAsyncThunk(
  'follow',
  (newFollow) => follow(newFollow)
);

export const unfollowThunk = createAsyncThunk(
  'unfollow',
  (followID) => unfollow(followID)
);