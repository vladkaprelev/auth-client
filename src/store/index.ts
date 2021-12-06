import { createStore } from "vuex";
import Auth from "@/api/Auth";
import LocalStorage from "@/api/LocalStorage";

const AuthModel = new Auth();
export default createStore({
  state: {
    auth: null,
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
          console.log(LocalStorage.get("accessTokens"));
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  modules: {},
});
