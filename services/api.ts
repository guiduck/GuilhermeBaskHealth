import axios from "axios";
import { toast } from "react-toastify";

const isServer = typeof window === "undefined";

export const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  if (!isServer) {
    const token = localStorage.getItem("userToken");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
  } else {
    const { cookies } = await import("next/headers");
    const token = cookies().get("userToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token.value}`;
    }
  }

  return config;
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (!isServer) {
      toast.error("There was an error with your request :(");
    }

    return Promise.reject(error);
  }
);

export default api;
