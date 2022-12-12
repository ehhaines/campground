import { createSlice } from "@reduxjs/toolkit";
import { createReviewsThunk, deleteReviewThunk, findReviewsByParkThunk, updateReviewThunk } from "./reviews-thunks";

const initialState = {
  reviews: [],
  reviewsLoading: false,
}

const parksReducer = createSlice({
  name: "reviews",
  initialState,
  extraReducers: {
    [findReviewsByParkThunk.fulfilled]: (state, {payload}) => {
      state.reviews = payload;
      state.reviewsLoading = false;
    },
    [findReviewsByParkThunk.pending]: (state, action) => {
      state.reviews = [];
      state.reviewsLoading = true;
    },
    [createReviewsThunk.fulfilled]: (state, action) => {
      state.reviews.unshift(action.payload)
    },
    [deleteReviewThunk.fulfilled]: (state, action) => {
      state.reviews = state.reviews.filter(rev => rev._id !== action.payload._id)
    },
    [updateReviewThunk.fulfilled]: (state, action) => {
      const replace = state.reviews.findIndex(rev => rev._id === action.payload._id)
      state.reviews[replace] = action.payload
    }
  }
});

export default parksReducer.reducer;