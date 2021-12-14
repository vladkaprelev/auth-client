import { createStore } from "vuex";
import API from "@/api/API";
import LocalStorage from "@/api/LocalStorage";
import router from "@/router";

export default createStore({
  state: {
    isAuth: !!LocalStorage.get("accessToken"),
    isDarkMode: !!LocalStorage.get("isDarkMode"),
  },
  mutations: {
    SET_THEME_MODE(state, mode) {
      state.isDarkMode = mode;
      LocalStorage.set("isDarkMode", mode);
    },
  },
  actions: {
    registration(store, payload) {
      API.post(
        { email: payload.email, password: payload.password },
        "registration"
      ).then((res) => {
        console.log(res.data.userData);
        LocalStorage.set("accessToken", res.data.userData.accessToken);
        LocalStorage.set("user", JSON.stringify(res.data.userData.user));
        router.replace("/user").catch((e) => {
          console.log(e);
        });
      });
    },
    logout() {
      API.post({}, "logout").then(() => {
        LocalStorage.delete("accessToken");
        LocalStorage.delete("user");
        router.push("/login");
      });
    },
    getUsers() {
      API.get({}, "users").then((res) => {
        console.log(res);
      });
    },
    authorization(store, payload) {
      console.log(payload);
      API.post(
        { email: payload.email, password: payload.password },
        "login"
      ).then((res) => {
        LocalStorage.set("accessToken", res.data.userData.accessToken);
        LocalStorage.set("user", JSON.stringify(res.data.userData.user));
        router.push("/user");
      });
    },
    refresh() {
      return API.post({}, "refresh");
    },
  },
  modules: {},
});
