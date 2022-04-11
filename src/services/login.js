import axios from "axios"
import { API_USERS } from "./api_url"

export const login = async ( user ) => {
    const response = await axios.get(`${API_USERS}?email=${user.email}&password=${user.password}`);
    return response.data;
}