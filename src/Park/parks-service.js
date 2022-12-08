import axios from "axios";
const API_URL = "http://localhost:4000/parks";

export const findParkByCode = async (parkCode) => {
  const response = await axios.get(`${API_URL}/${parkCode}`);
  const actualPark = response.data;
  return actualPark;
}