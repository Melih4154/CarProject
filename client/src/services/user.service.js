import axios from "axios"; 

import authHeader from "./auth.header";
const API_URL = "http://localhost:3000/v1/user";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL, { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", );
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin",);
};

const userService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};

export default userService