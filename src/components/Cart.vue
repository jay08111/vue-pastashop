<template>
  <div>
    <div class="cart__container">
      <button @click="toggleCart" class="cart__close">x</button>
      <h1>Cart</h1>
    </div>
    <div
      v-for="{ id, name, price, image } in cartItems"
      :key="id"
      class="cart__item"
    >
      <div class="cart__content">
        <p>{{ name }}</p>
        <p>${{ price }}</p>
      </div>
      <img :src="image" alt="name" />
      <button @click="deleteItem(id)" class="cart__delete">
        <font-awesome-icon icon="trash" class="icon" />
      </button>
    </div>
    <div class="cart__total" v-if="cartItems.length > 0">
      <button class="cart__clear" @click="claerAll">clear all</button>
      <p>total :</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cart: {
      type: Boolean,
    },
    cartItems: {
      type: Array,
    },
  },
  methods: {
    toggleCart() {
      this.$emit("toggleCart");
    },
    deleteItem(id) {
      this.$emit("deleteItem", id);
    },
    claerAll() {
      this.$emit("clearAll");
    },
  },
  // computed: {
  //   totalPrice() {
  //    return let { total } = this.cartItems.reduce(
  //       (acc: Array<Pasta[]>, curr: Array<Pasta[]>) => {
  //         const {price} = curr;

  //       }
  //     );
  //   },
  // },
};
</script>
<style lang="scss" scoped>
@import "@/styles/_variables.scss";
div {
  button {
    cursor: pointer;
  }
  .cart__container {
    display: flex;
    position: relative;
    h1 {
      text-align: center;
      position: absolute;
      left: 50%;
      top: 4px;
      transform: translateX(-50%);
    }
    .cart__close {
      border: none;
      font-size: 1.5rem;
      background: transparent;
    }
  }
  .cart__item {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr auto;
    grid-column-gap: 1.5rem;
    margin: 1.5rem 0;
    .cart__content {
      border: 1px solid #000;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }
    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 4px;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }
    .cart__delete {
      border: none;
      color: map-get($colors, "secondary");
      background: transparent;
      .icon {
        font-size: 1.2rem;
      }
    }
  }
  .cart__total {
    display: flex;
    position: relative;
    margin-top: 40px;
    align-items: center;
    p {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      font-size: 1.4rem;
      top: -4px;
    }
    .cart__clear {
      font-size: 1.4rem;
      border: none;
      background: transparent;
    }
  }
}
</style>
