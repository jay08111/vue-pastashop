<template>
  <footer>
    <div>
      <p>Made by Hoyeoun</p>
      <h3>&copy;{{ getDate }}</h3>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  computed: {
    getDate() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
footer {
  height: 10vh;
  background-color: rgb(51, 51, 51);
  display: flex;
  justify-content: center;
  color: map-get($colors, "white");
  font-size: map-get($fontSize, "middle");
  div {
    display: flex;
    gap: 10px;
    align-items: center;
    p {
      font-size: 1.4rem;
    }
  }
}
</style>
