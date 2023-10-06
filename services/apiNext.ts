import axios from "axios";
import { toast } from "react-toastify";

const baseURL = process.env.SITE_URL_LOCAL,
  isServer = typeof window === "undefined";

const apiNext = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiNext.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    toast.error(
      error.response.data.message || "There was an error with your request :("
    );

    return Promise.reject(error);
  }
);

export default apiNext;
