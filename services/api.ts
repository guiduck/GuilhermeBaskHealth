import axios from "axios";
import { toast } from "react-toastify";

const baseURL = process.env.NEXT_PUBLIC_API_URL,
  isServer = typeof window === "undefined";

export const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  if (isServer) {
    const { cookies } = await import("next/headers"),
      token = cookies().get("userToken")?.value;

    if (token) {
      console.log("has user token");
      config.headers["Authorization"] = `Bearer ${token}`;
    }
  } else {
    const token = localStorage.getItem("userToken");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
  }

  return config;
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error.response.message);
    toast.error("There was an error with your request :(");

    return Promise.reject(error);
  }
);

export default api;
