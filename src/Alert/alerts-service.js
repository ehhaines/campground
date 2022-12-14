import axios from "axios";

const API_URL = "http://localhost:4000/alerts"

export const findAlertsByPark = async (park) => {
  const response = await axios.get(`${API_URL}/parks/${park}`);
  return response.data;
}

export const findAlertsByRanger = async (ranger) => {
  const response = await axios.get(`${API_URL}/rangers/${ranger}`);
  return response.data;
}

export const resolveAlert = async (alert) => {
  await axios.delete(`${API_URL}/${alert}`);
  return alert;
}

export const createAlert = async (alert) => {
  await axios.post(API_URL, alert);
  return alert;
}