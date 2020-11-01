import { createRouter, createWebHistory } from "vue-router";

import App from "../pages/App.vue";
import NotFound from "../pages/NotFound"

const routes = [
  {
    path: "/",
    name: "App",
    component: App
  },
  {
    path: "/home",
    name: "home",
    component: App
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
//   {
//     path: "/about",
//     name: "About",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/About.vue")
//   }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
