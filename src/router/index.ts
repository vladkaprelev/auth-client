import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LayoutMain from "@/layout/LayoutMain.vue";
import LayoutAuth from "@/layout/LayoutAuth.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Main",
    component: LayoutMain,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "Auth",
    component: LayoutAuth,
    meta: {
      requiresAuth: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {
//   console.log();
//   console.log(from);
//   const isNeedAuthorization: boolean = to.matched.some(
//     (item) => item.meta.requiresAuth
//   );
//   if (isNeedAuthorization) {
//     console.log("Проверка токена");
//     next({
//       name: "Auth",
//       params: { nextUrl: to.fullPath },
//     });
//   } else {
//     console.log("Авторизация");
//     next();
//   }
// });

export default router;
