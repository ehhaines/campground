import axios from "axios";

const API_URL = "http://localhost:4000/follows";

export const findFollowsByFollower = async (follower) => {
  const response = await axios.get(`${API_URL}/byfollower/${follower}`);
  const allMatching = response.data;
  return allMatching;
}

export const findFollowsByFollowing = async (following) => {
  const response = await axios.get(`${API_URL}/byfollowing/${following}`);
  const allMatching = response.data;
  return allMatching;
}

export const follow = async (newFollow) => {
  await axios.post(`${API_URL}`, newFollow);
  return newFollow;
}

export const unfollow = async (followID) => {
  await axios.delete(`${API_URL}/${followID}`);
  return followID;
}