<template>
  <p>
    {{ readMore ? description : description.slice(0, 20) }}...<br /><span
      @click="toggleReadMore"
      >{{ readMore ? "less" : "read more" }}</span
    >
  </p>
</template>

<script>
export default {
  data() {
    return {
      readMore: false,
    };
  },
  props: {
    description: {
      type: String,
    },
  },
  methods: {
    toggleReadMore() {
      this.readMore = !this.readMore;
    },
  },
};
</script>
<style lang="scss" scoped>
span {
  cursor: pointer;
}
</style>
