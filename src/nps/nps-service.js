import axios from "axios"

const SEARCH_URL = "https://developer.nps.gov/api/v1/parks?api_key=FFwG3Bkw3KoM33nTSiqvHbJCL1H1qWZpMwCtWInH&limit=500&q="

export const findParksBySearchTerm = async (term) => {
  const response = await axios.get(`${SEARCH_URL}${term}`);
  return response.data;
}