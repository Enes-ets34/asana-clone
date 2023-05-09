import { createRouter, createWebHashHistory } from "vue-router";
import store from "../store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Auth/Login/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Auth/Register/Register.vue"),
    children: [
      {
        path: "password",
        component: () => import("../views/auth/Register/Password.vue"),
      },
    ],
  },
  {
    path: "/:id/board",
    name: "Board",
    component: () => import("../views/Projects/Board.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});
router.beforeEach((to, from, next) => {
  let user,
    access_token = null;
  const authenticatedPages = ["Home", "Profile"];
  // LocalStorage üzerinde User var mi?
  if (localStorage?.user) {
    user = JSON.parse(localStorage?.user);
  }
  if (localStorage?.access_token) {
    access_token = localStorage?.access_token;
  }
  // LocalStorage üzerinde User varsa Store'u güncelle
  if (user && access_token) {
    store.commit("users/setUser", user);
    store.commit("users/setAccessToken", access_token);
  }
  // isAuthenticated bilgisini Store üzerinden al..
  const isAuth = store.getters["users/isAuth"];

  // Rules...
  if (!isAuth && authenticatedPages.indexOf(to.name) > -1) {
    return next({ name: "Login" });
  }

  if (isAuth && (to.name === "Register" || to.name === "Login")) {
    return next({ name: "Home" });
  }

  next();
});
export default router;
