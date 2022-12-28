import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/generator",
      name: "generator",
      component: () => import("../views/GeneratorView.vue"),
    },
    {
      path: "/baggage-list",
      name: "baggage-list",
      component: () => import("../views/baggageListView.vue"),
    },
  ],
});
export default router;
