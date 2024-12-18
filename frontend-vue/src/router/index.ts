import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Task from "../views/Task.vue";
import Profile from "../views/Profile.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/task/:id", component: Task },
  { path: "/profile", component: Profile },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
