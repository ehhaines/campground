import axios from "axios";
const API_URL = "http://localhost:4000/reviews";

export const findReviewsByPark = async (parkCode) => {
  const response = await axios.get(`${API_URL}/${parkCode}`);
  const matchingReviews = response.data;
  return matchingReviews;
}

export const createReview = async (newReview) => {
  const response = await axios.post(API_URL, newReview);
  const actualReview = response.data;
  return actualReview;
}

export const deleteReview = async (review) => {
  const response = await axios.delete(API_URL, {data: review});
  const deletedReview = response.data;
  return deletedReview;
}

export const updateReview = async (updatedReview) => {
  const response = await axios.put(API_URL, updatedReview);
  const newReview = response.data;
  return newReview;
}