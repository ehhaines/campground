import axios from "axios";
const API_URL = "http://localhost:4000/friendships";

export const findFriendshipsByUser = async (user) => {
  const response = await axios.get(`${API_URL}/${user}`);
  const matchingFriendships = response.data;
  return matchingFriendships;
}

export const createFriendship = async (newFriendship) => {
  const response = await axios.post(API_URL, newFriendship);
  const actualFriendship = response.data;
  return actualFriendship;
}

export const deleteFriendship = async (friendshipID) => {
  const response = await axios.delete(`${API_URL}/${friendshipID}`);
  return response;
}