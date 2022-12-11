import { createAsyncThunk } from "@reduxjs/toolkit"
import { findNpsParkByParkCode, findParksBySearchTerm } from "./nps-service"

export const findParksBySearchTermThunk = createAsyncThunk(
  "findParksBySearchTerm",
  (term) => findParksBySearchTerm(term)
);

export const findNpsParkByParkCodeThunk = createAsyncThunk(
  "findNpsParkByParkCode",
  (parkCode) => findNpsParkByParkCode(parkCode)
);