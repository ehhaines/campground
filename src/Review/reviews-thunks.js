import { createAsyncThunk } from "@reduxjs/toolkit";
import { createReview, deleteReview, findReviewsByPark } from "./reviews-service";

export const findReviewsByParkThunk = createAsyncThunk(
  'findReviewsByPark',
  (parkCode) => findReviewsByPark(parkCode)
);

export const createReviewsThunk = createAsyncThunk(
  'createReview',
  (newReview) => createReview(newReview)
);

export const deleteReviewThunk = createAsyncThunk(
  'deleteReview',
  (review) => deleteReview(review)
);