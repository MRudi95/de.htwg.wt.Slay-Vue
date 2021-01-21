import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Main
  },
  {
    path: "/about",
    name: "About",
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  }
];

const router = new VueRouter({
  routes
});

export default router;
