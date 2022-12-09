import { createAsyncThunk } from "@reduxjs/toolkit";
import { findParkByCode } from "./parks-service";

export const findParkByCodeThunk = createAsyncThunk(
  'findParkByCode',
  (parkCode) => findParkByCode(parkCode)
);