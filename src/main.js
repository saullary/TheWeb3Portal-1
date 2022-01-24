import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store";
import "./setup";
import "./api";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
  router,
  store,
  watch: {
    "$route.path"() {
      window.scrollTo(0, 0);
    },
  },
}).$mount("#app");
