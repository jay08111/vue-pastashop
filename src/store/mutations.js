export default {
  setPasta(state, payload) {
    state.pasta = payload;
  },
  toggleCart(state) {
    state.cart = !state.cart;
  },
  addToCart(state, id) {
    const findItem = state.pasta.find((item) => item.id === id);
    const addItem = { ...findItem, amount: 1 };
    state.cartItems = [...state.cartItems, addItem];
  },
  deleteItem(state, id) {
    state.cartItems = state.cartItems.filter((item) => item.id !== id);
  },
  clearAll(state) {
    state.cartItems = [];
  },
  disabledBtn(state, id) {
    const cartItemsId = state.cartItems.find((item) => item.id === id);
    if (cartItemsId) {
      state.checkCart = true;
      return true;
    } else {
      state.checkCart = false;
      return false;
    }
  },
};
