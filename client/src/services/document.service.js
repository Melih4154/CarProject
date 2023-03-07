import axios from "axios";

import { authHeader,  authAndFileHeader } from "./auth-header";

const API_URL = "http://localhost:3000/v1/";

const getAll = (status, demage_id) => {
  return axios
    .get(
      API_URL + `document/${status}/${demage_id}`,
      { headers: authHeader() }
    )
    .then((response) => {
      return response.data;
    });
};

const create = (document, title, status, demage_id) => {  
  return axios
    .post(API_URL + `document/${demage_id}`,
     {
      document,
      title,
      status,
    },
      { headers: authAndFileHeader() }
    )
    .then((response) => {
      return response.data;
    });
};

const statusService = {
  getAll,
  create,
};

export default statusService;
