import { createAsyncThunk } from "@reduxjs/toolkit";
import { createFriendship, deleteFriendship, findFriendshipsByUser } from "./friendships-service";

export const findFriendshipsByUserThunk = createAsyncThunk(
  'findFriendshipByUser',
  (user) => findFriendshipsByUser(user)
);

export const createFriendshipThunk = createAsyncThunk(
  'createFriendship',
  (newFriendship) => createFriendship(newFriendship)
);

export const deleteFriendshipThunk = createAsyncThunk(
  'deleteFriendship',
  (friendshipID) => deleteFriendship(friendshipID)
);