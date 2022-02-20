import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faUtensils,
  faInbox,
  faEnvelope,
  faFileAlt,
  faThumbsUp,
  faStar,
  faStarHalf,
  faShoppingCart,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
Vue.config.productionTip = false;
library.add(
  faMapMarkerAlt,
  faPhoneAlt,
  faUtensils,
  faInbox,
  faEnvelope,
  faFileAlt,
  faThumbsUp,
  faStar,
  faStarHalf,
  faShoppingCart,
  faTrash
);
Vue.component("font-awesome-icon", FontAwesomeIcon);
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
