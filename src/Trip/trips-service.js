import axios from "axios";
const API_URL = "http://localhost:4000/trips";

export const createTrip = async (trip) => {
  const response = await axios.post(API_URL, trip);
  const actualTrip = response.data;
  return actualTrip;
}

export const findAllTrips = async () => {
  const response = await axios.get(API_URL);
  return response.data;
}

export const deleteTrip = async (tripID) => {
  const response = await axios.delete(`${API_URL}/${tripID}`);
  return response.data;
}

export const completeTrip = async (tripID) => {
  const response = await axios.put(`${API_URL}/${tripID}`);
  return response.data;
}