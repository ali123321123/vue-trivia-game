import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router";
import { BootstrapVue } from "bootstrap-vue";

// Import Bootstrap (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.use(BootstrapVue);
Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
