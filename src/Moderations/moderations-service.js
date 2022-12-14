import axios from "axios";

const API_URL = "http://localhost:4000/moderations";

export const findModerationsByPark = async (park) => {
  const response = await axios.get(`${API_URL}/parks/${park}`);
  return response.data;
}

export const findModerationsByRanger = async (ranger) => {
  const response = await axios.get(`${API_URL}/users/${ranger}`);
  return response.data;
}

export const createModeration = async (moderation) => {
  await axios.post(API_URL, moderation);
  return moderation;
}