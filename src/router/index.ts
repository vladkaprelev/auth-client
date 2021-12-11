import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LayoutMain from "@/layout/LayoutMain.vue";
import LayoutAuth from "@/layout/LayoutAuth.vue";
import LocalStorage from "@/api/LocalStorage";
import User from "@/components/User/User.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Main",
    component: LayoutMain,
    children: [
      {
        path: "/user",
        name: "User",
        component: User,
      },
    ],
  },

  {
    path: "/login",
    name: "Auth",
    component: LayoutAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (!!LocalStorage.get("accessToken")) {
    if (to.name === "Auth") {
      return next("/");
    }
    return next();
  }
  const isLogin = to.matched.some((item) => item.path === "/login");
  if (isLogin) {
    return next();
  } else {
    return next("/login");
  }
});

export default router;
