import { createStore } from "vuex";
import Auth from "@/api/Auth";
import LocalStorage from "@/api/LocalStorage";
import router from "@/router";

const AuthModel = new Auth();
export default createStore({
  state: {
    isAuth: !!LocalStorage.get("accessToken"),
    isDarkMode: false,
  },
  mutations: {
    SET_THEME_MODE(state, mode) {
      state.isDarkMode = mode;
      console.log(state.isDarkMode);
    },
  },
  actions: {
    registration(store, payload) {
      console.log(payload);
      AuthModel.registration(
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
      AuthModel.logout({}, "logout").then(() => {
        LocalStorage.delete("accessToken");
        LocalStorage.delete("user");
        router.push("/login");
      });
    },
    getUsers() {
      AuthModel.getUsers({}, "users").then((res) => {
        console.log(res);
      });
    },
    authorization(store, payload) {
      console.log(payload);
      AuthModel.authorization(
        { email: payload.email, password: payload.password },
        "login"
      ).then((res) => {
        LocalStorage.set("accessToken", res.data.userData.accessToken);
        LocalStorage.set("user", JSON.stringify(res.data.userData.user));
        router.push("/user");
      });
    },
    refresh() {
      return AuthModel.refresh({}, "refresh");
    },
  },
  modules: {},
});
