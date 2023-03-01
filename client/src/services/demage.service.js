import axios from "axios";

const API_URL = "http://localhost:3000/v1/";


const getAll = () => {
  return axios
    .get(API_URL + "demage")
    .then((response) => {
          return response.data;
    });
};

const demageService = {
    getAll
  };


export default demageService;