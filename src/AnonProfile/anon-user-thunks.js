import { createAsyncThunk } from "@reduxjs/toolkit";
import { findUserByUsername } from "./anon-user-service";

export const findUserByUsernameThunk = createAsyncThunk(
  'findUserByUsername',
  async (username) => await findUserByUsername(username)
)