import axios from "axios";
import { baseURL } from "../../globalVarible";
import LocalStorage from "@/api/LocalStorage";
import EventObserver from "@/classes/EventObserver";
import store from "@/store";

const instanceAxios = axios.create({
  baseURL,
  withCredentials: true,
});

const setToken = (token: string | null) => {
  if (token !== null) {
    instanceAxios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete instanceAxios.defaults.headers.common["Authorization"];
  }
};
setToken(LocalStorage.get("accessToken"));
type ErrorFunction = (message: any) => any | void;

const errorsStatus: Record<number, ErrorFunction> = {
  400: (error: any) => {
    EventObserver.broadcast("notification", {
      message: error.response.data.message,
      type: "error",
      delay: 3000,
    });
    console.error(error);
  },
  401: (error: any) => {
    store.dispatch("refresh").then((res) => {
      LocalStorage.delete("accessToken");
      LocalStorage.set("accessToken", res.data.accessToken);
      setToken(LocalStorage.get("accessToken"));
      return instanceAxios.request(error.config);
    });
  },
};

const errorObserve = (error: any): void => {
  const status: number = error.response.status;
  errorsStatus[status](error);
};

instanceAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    errorObserve(error);
  }
);

export default instanceAxios;
