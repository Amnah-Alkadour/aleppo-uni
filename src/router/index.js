import DepartmentPage from "@/views/DepartmentPage.vue";
import HomePage from "@/views/HomePage.vue";
//import CollegeAbout from "@/components/CollegeAbout.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/aboutWe",
    component: DepartmentPage,
  },
  // {
  //   path: "/college",
  //   component: CollegeAbout,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
