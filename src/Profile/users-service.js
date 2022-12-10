import axios from "axios";
const BASE_URL = 'http://localhost:4000'

export const findAllUsers = async () => {
    const response = await axios.get(`${BASE_URL}/users`)
    return response.data
}
export const register = async (user) => {
    const response = await axios.post(`${BASE_URL}/register`, user)
    return response.data
}

export const login = async (user) => {
    const response = await axios.post(`${BASE_URL}/login`, user)
    return response.data
}

export const profile = async () => {
    const response = await axios.post(`${BASE_URL}/profile`)
    return response.data
}

export const logout = async () => {
    const response = await axios.post(`${BASE_URL}/logout`)
    return response.data
}

export const updateProfile = async (currentUser) => {
    const response = await  axios.put(`${BASE_URL}/users/${currentUser._id}`, currentUser);
    return currentUser;
}