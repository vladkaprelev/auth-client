import axios from "axios";
import { baseURL } from "@/globalVarible/globalVarible";
import LocalStorage from "@/api/LocalStorage";
import EventObserver from "@/classes/EventObserver";

const instanceAxios = axios.create({
  baseURL,
  withCredentials: true,
});

const createSetAuthInterceptor =
  (token: string | null) => (config: Record<string, any>) => {
    if (token !== null) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete config.headers.Authorization;
    }
    return config;
  };
const ErrorObserver = (error: any) => {
  return Promise.reject(error);
};
const setAuthCb = createSetAuthInterceptor(LocalStorage.get("accessToken"));
instanceAxios.interceptors.request.use(setAuthCb, ErrorObserver);

instanceAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    switch (error.response.status) {
      case 400: {
        EventObserver.broadcast("notification", {
          message: error.response.data.message,
          type: "error",
          delay: 3000,
        });
        throw new Error(error.response.data.message);
      }
    }
    return Promise.reject(error);
  }
);

export default instanceAxios;
