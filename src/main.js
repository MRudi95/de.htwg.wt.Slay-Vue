import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import VueAxios from "vue-axios";

//import "./registerServiceWorker";
import "./registerServiceWorker";

//Vue.prototype.$workbox = wb;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  VueAxios,
  axios,
  render: h => h(App)
}).$mount("#app");
