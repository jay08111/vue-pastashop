<template>
  <section>
    <Pastas />
  </section>
</template>

<script>
import { Pastas } from "../components/index";
export default {
  components: {
    Pastas,
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/_variables.scss";
section {
  background-color: map-get($colors, "secondary");
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
}
</style>
