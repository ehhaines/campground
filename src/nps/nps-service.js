import axios from "axios"

const SEARCH_URL = "https://developer.nps.gov/api/v1/parks?api_key=FFwG3Bkw3KoM33nTSiqvHbJCL1H1qWZpMwCtWInH&limit=500&"

export const findParksBySearchTerm = async (term) => {
  const response = await axios.get(`${SEARCH_URL}q=${term}`);
  console.log(response);
  return response.data;
}

export const findNpsParkByParkCode = async (parkCode) => {
  const response = await axios.get(`${SEARCH_URL}parkCode=${parkCode}`);
  return response.data;
}