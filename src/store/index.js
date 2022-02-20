import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import mutations from "./mutations";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pasta: [],
    cart: false,
    cartItems: [],
    checkCart: false,
  },
  mutations,
  actions: {
    async FETCH_PASTA({ commit }) {
      try {
        const res = await axios.get(
          "https://jay08111.github.io/data/pasta.json"
        );
        commit("setPasta", res.data.items);
        return res;
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    fetchPasta(state) {
      return state.pasta;
    },
    tomatoPasta(state) {
      return state.pasta.filter((item) => item.type === "tomato");
    },
    creamPasta(state) {
      return state.pasta.filter((item) => item.type === "cream");
    },
    sideDish(state) {
      return state.pasta.filter((item) => item.type === "side");
    },
    wine(state) {
      return state.pasta.filter((item) => item.type === "wine");
    },
    getCart(state) {
      return state.cart;
    },
    getCartItems(state) {
      return state.cartItems;
    },
    getCheckCart(state) {
      return state.checkCart;
    },
  },
});
