import { createAsyncThunk } from "@reduxjs/toolkit"
import { findParksBySearchTerm } from "./nps-service"

export const findParksBySearchTermThunk = createAsyncThunk(
  "findParksBySearchTerm",
  (term) => findParksBySearchTerm(term)
)