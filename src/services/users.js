import axios from "axios"
import { API_USERS } from "./api_url"

export const getUsers = async () => {
    const response = await axios.get(API_USERS);
    return response;
}

export const getUserById = async (id) => {
    const response = await axios.get(`${API_USERS}?id=${id}`);
    return response;
}

export const deleteUserById = async (id) => {
    const response = await axios.delete(`${API_USERS}/${id}`);
    return response;
}

export const updateUser = async (user) => {
    const response =  await axios.put(`${API_USERS}/${user.id}`, user);
    return response;
}