import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import Questions from "./views/Questions.vue";
import Results from "./views/Results.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/questions",
    name: "Questions",
    component: Questions
  },
  {
    path: "/results",
    name: "Results",
    component: Results
  }
];

const router = new VueRouter({ routes });

export default router;
