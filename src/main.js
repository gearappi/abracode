import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";

import MainPage from "@/pages/MainPage";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: "/", component: MainPage }
];

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
