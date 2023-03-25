import { createRouter, createWebHistory } from "vue-router";
import { vueRouters } from "./global";
const routes = [
  {
    path: "/",
    redirect: { name: "button" }
  },
  ...vueRouters()
];

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHashHistory(),
  routes
});

export default router;
