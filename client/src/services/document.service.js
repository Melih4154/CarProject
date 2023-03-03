import axios from "axios";

import authHeader from "./auth-header";

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

const create = (status) => {
  return axios
    .post(API_URL + "document", {
      status,
    })
    .then((response) => {
      return response.data;
    });
};

const statusService = {
  getAll,
  create,
};

export default statusService;
