import axios from "axios";
import { toast } from "react-toastify";
import logger from "./logService";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.baseURL = "http://localhost:3900/api";

axios.interceptors.response.use(null, error => {
  const expError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expError) {
    logger.log(error);
    toast.error("An unexpected error occured");
  }

  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
};
