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

const create = ({file_number, full_name, id_number, subject, status, arbitration_number, personel,
  number_plate, crash_date, explanation, expert, brand, usage, engine_number, type, chassis_number}) => {
  return axios
    .post(API_URL + "demage", {file_number, full_name, id_number, subject, status, arbitration_number, personel,
      number_plate, crash_date, explanation, expert, brand, usage, engine_number, type, chassis_number}, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

const demageService = {
  getAll,
  findOne,
  create,
};

export default demageService;
