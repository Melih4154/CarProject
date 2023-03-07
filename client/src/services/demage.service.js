import axios from "axios";

import {authHeader} from "./auth-header";

const API_URL = "http://localhost:3000/v1/";

const getAll = () => {
  return axios
    .get(API_URL + "demage", { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

const findOne = (id) => { 
  return axios
    .get(API_URL + `demage/${id}`, { headers: authHeader() })
    .then((response) => {  
      return response.data;
    });
};

const demageService = {
  getAll,
  findOne,
};

export default demageService;
