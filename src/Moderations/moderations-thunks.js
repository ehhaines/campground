import { createAsyncThunk } from "@reduxjs/toolkit";
import { createModeration, findModerationsByPark, findModerationsByRanger, unmod } from "./moderations-service";

export const findModerationsByParkThunk = createAsyncThunk(
  'findModerationsByPark',
  (park) => findModerationsByPark(park)
);

export const findModerationsByRangerThunk = createAsyncThunk(
  'findModerationsByRanger',
  (ranger) => findModerationsByRanger(ranger)
);

export const createModerationThunk = createAsyncThunk(
  'createModeration',
  (moderation) => createModeration(moderation)
);

export const unmodThunk = createAsyncThunk(
  'unmod',
  (username, parkcode) => unmod(username, parkcode)
);