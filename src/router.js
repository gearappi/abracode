import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "./pages/MainPage";
import DataBasePage from "./pages/DataBasePage";
import NotificationPage from "./pages/NotificationPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: MainPage,
    meta: { requiresAuth: true }
  },
  {
    path: "/db",
    name: "database",
    component: DataBasePage,
    meta: { requiresAuth: true }
  },
  {
    path: "/notification",
    name: "notification",
    component: NotificationPage,
    meta: { requiresAuth: true }
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
    meta: { requiresAuth: false }
  },
  {
    path: "/login",
    component: LoginPage,
    meta: { guest: true }
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("jwt") == null) {
      next({
        path: "/login",
        params: { nextUrl: to.fullPath }
      });
    } else {
      const user = JSON.parse(localStorage.getItem("user"));
      if (to.matched.some(record => record.meta.is_user)) {
        if (user.is_user) {
          next();
        } else {
          next({ name: "main" });
        }
      } else {
        next();
      }
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem("jwt") == null) {
      next();
    } else {
      next({ name: "main" });
    }
  } else {
    next();
  }
});

export default router;
