import { createStore } from "vuex";
import Auth from "@/api/Auth";
import LocalStorage from "@/api/LocalStorage";
import router from "@/router";

const AuthModel = new Auth();
export default createStore({
  state: {
    isAuth: !!LocalStorage.get("accessToken"),
  },
  mutations: {},
  actions: {
    registration(store, payload) {
      console.log(payload);
      AuthModel.registration(
        { email: payload.email, password: payload.password },
        "registration"
      )
        .then((res) => {
          console.log(res.data.userData);
          LocalStorage.set("accessToken", res.data.userData.accessToken);
          LocalStorage.set("user", JSON.stringify(res.data.userData.user));
          router.replace("/user").catch((e) => {
            console.log(e);
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
    logout() {
      AuthModel.logout({}, "logout")
        .then((res) => {
          LocalStorage.delete("accessToken");
          LocalStorage.delete("user");
          console.log(LocalStorage);
          router.push("/login").catch((e) => {
            console.log(e);
          });
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getUsers() {
      AuthModel.getUsers({}, "users")
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    authorization(store, payload) {
      console.log(payload);
      AuthModel.authorization(
        { email: payload.email, password: payload.password },
        "login"
      )
        .then((res) => {
          LocalStorage.set("accessToken", res.data.userData.accessToken);
          LocalStorage.set("user", JSON.stringify(res.data.userData.user));
          router.replace("/user").catch((e) => {
            console.log(e);
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
    refresh() {
      return AuthModel.refresh({}, "refresh");
    },
  },
  modules: {},
});
