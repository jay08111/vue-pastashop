<template>
  <article>
    <font-awesome-icon icon="shopping-cart" class="icon" @click="toggleCart" />
    <h1>DINE-IN & CARRY OUT MENU</h1>
    <h2>
      <hr class="underline left" />
      Tomato <br />
      <hr class="underline right" />
      Spaghetti
    </h2>
    <div
      v-for="{ id, name, price, image, description } in tomato"
      :key="id"
      class="pasta__container"
    >
      <div class="pasta__info">
        <p>{{ name }}</p>
        <ReadMore :description="description" />
        <div class="pasta__button">
          <p>${{ price }}</p>
          <button @click="addToCart(id)" :disabled="disabledBtn(id)">
            add to cart
          </button>
        </div>
      </div>
      <img :src="image" :alt="name" />
    </div>
    <h2>
      <hr class="underline left" />
      cream <br />
      <hr class="underline right" />
      Spaghetti
    </h2>
    <div
      v-for="{ id, name, price, image, description } in cream"
      :key="id"
      class="pasta__container"
    >
      <div class="pasta__info">
        <p>{{ name }}</p>
        <ReadMore :description="description" />
        <div class="pasta__button">
          <p>${{ price }}</p>
          <button @click="addToCart(id)" :disabled="disabledBtn(id)">
            add to cart
          </button>
        </div>
      </div>
      <img :src="image" :alt="name" />
    </div>
    <h2>
      <hr class="underline left" />
      side
      <hr class="underline right" />
    </h2>
    <div
      v-for="{ id, name, price, image, description } in side"
      :key="id"
      class="pasta__container"
    >
      <div class="pasta__info">
        <p>{{ name }}</p>
        <ReadMore :description="description" />
        <div class="pasta__button">
          <p>${{ price }}</p>
          <button @click="addToCart(id)" :disabled="disabledBtn(id)">
            add to cart
          </button>
        </div>
      </div>
      <img :src="image" :alt="name" />
    </div>
    <h2>
      <hr class="underline left" />
      Wine
      <hr class="underline right" />
    </h2>
    <div
      v-for="{ id, name, price, image, description } in wine"
      :key="id"
      class="pasta__container"
    >
      <div class="pasta__info">
        <p>{{ name }}</p>
        <ReadMore :description="description" />
        <div class="pasta__button">
          <p>${{ price }}</p>
          <button @click="addToCart(id)" :disabled="disabledBtn(id)">
            add to cart
          </button>
        </div>
      </div>
      <img :src="image" :alt="name" />
    </div>
    <section :class="show">
      <Cart
        :cart="cart"
        @toggleCart="toggleCart"
        :cartItems="cartItems"
        @deleteItem="deleteItem"
        @clearAll="clearAll"
      />
    </section>
  </article>
</template>

<script>
import ReadMore from "./ReadMore.vue";
import Cart from "./Cart.vue";
export default {
  components: {
    ReadMore,
    Cart,
  },
  data() {
    return {
      pastas: [],
      cart: false,
      cartItems: [],
      checkCart: false,
    };
  },
  methods: {
    async getData() {
      const res = await fetch("https://jay08111.github.io/data/pasta.json");
      const data = await res.json();
      this.pastas = data.items;
    },
    toggleCart() {
      this.cart = !this.cart;
    },
    addToCart(id) {
      const findItem = this.pastas.find((item) => item.id === id);
      const addItem = { ...findItem, amount: 1 };
      this.cartItems = [...this.cartItems, addItem];
    },
    deleteItem(id) {
      this.cartItems = this.cartItems.filter((item) => item.id !== id);
    },
    clearAll() {
      this.cartItems = [];
    },
    disabledBtn(id) {
      const cartItemsId = this.cartItems.find((item) => item.id === id);
      if (cartItemsId) {
        this.checkCart = true;
        return true;
      } else {
        this.checkCart = false;
        return false;
      }
    },
  },
  computed: {
    tomato() {
      return this.pastas.filter((item) => item.type === "tomato");
    },
    cream() {
      return this.pastas.filter((item) => item.type === "cream");
    },
    side() {
      return this.pastas.filter((item) => item.type === "side");
    },
    wine() {
      return this.pastas.filter((item) => item.type === "wine");
    },
    show() {
      let classes = ["cart__container"];
      if (this.cart) {
        classes.push("show__cart");
      }
      return classes;
    },
  },
  watch: {},
  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
article {
  background: map-get($colors, "white");
  width: 1260px;
  margin: 0 auto;
  padding: 80px 30px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  .icon {
    position: absolute;
    right: 100px;
    font-size: 30px;
    cursor: pointer;
  }
  h1 {
    text-align: center;
    margin-bottom: 1rem;
  }
  h2 {
    text-align: center;
    font-size: 3rem;
    color: map-get($colors, "primary");
    font-family: map-get($fontFamily, "Staatliches");
    position: relative;
    margin: 3rem;
  }
  .underline {
    width: 20vw;
    height: 0.075rem;
    background-color: #eee;
    position: absolute;
  }
  .red__unerline {
    width: 20vw;
    height: 0.085rem;
    background-color: map-get($colors, "secondary");
    margin: 0 auto;
    position: absolute;
  }
  .left {
    left: 3%;
    top: 50%;
  }
  .right {
    right: 3%;
    top: 50%;
  }
  .pasta__container {
    display: flex;
    flex: 1;
    width: 50vw;
    margin: 2rem auto;
    gap: 120px;
    .pasta__info {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: space-between;
      p {
        &:nth-child(2) {
          line-height: 1.3;
          span {
            cursor: pointer;
          }
        }
      }
      .pasta__button {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        button {
          border: none;
          padding: 10px;
          background-color: map-get($colors, "primary");
          color: map-get($colors, "white");
          cursor: pointer;
          transition: $transition;
          text-transform: capitalize;
          &:hover {
            border-radius: 5px;
            color: map-get($colors, "black_main");
          }
        }
      }
    }
    img {
      object-fit: cover;
      width: 50%;
      height: 300px;
    }
  }
  .cart__container {
    position: fixed;
    top: 0;
    right: 0;
    width: 30%;
    height: 100%;
    overflow: scroll;
    z-index: 3;
    background: rgba(219, 211, 203, 0.9);
    padding: 1.5rem;
    transition: $transition;
    transform: translateX(100%);
  }
  .show__cart {
    transform: translateX(0);
  }
}
</style>
