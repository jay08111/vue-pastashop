<template>
  <div id="app">
    <Nav />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import { Nav, Footer } from "./components/index";

export default {
  components: {
    Nav,
    Footer,
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  box-sizing: border-box;
  padding: 0;
}
body {
  overflow-x: hidden;
}
</style>
