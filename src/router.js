import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import Game from "./views/Game.vue";
import Results from "./views/Results.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    alias: "/home"
  },
  {
    path: "/game",
    name: "Game",
    component: Game
  },
  {
    path: "/results",
    name: "Results",
    component: Results
  }
];

const router = new VueRouter({ routes });

export default router;
