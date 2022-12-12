import axios from "axios";

export const findUserByUsername = async (username) => {
  const response = await axios.get(`http://localhost:4000/users/${username}`);
  return response.data;
}