import axios from "axios";
import { authHeader } from "./auth-header";

const API_URL = "http://localhost:3000/v1/user/";

const getUsers = () => {
  return axios.get(API_URL + "getAll", { headers: authHeader() }).then((response) => {
    return response.data;
  });;
};


const userService = {
  getUsers,
};

export default userService;
