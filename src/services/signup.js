import axios from "axios"
import { API_USERS } from "./api_url"

export const signUp = async ( user ) => {
    const response =  await axios.post(API_USERS, user);
    return response;
}