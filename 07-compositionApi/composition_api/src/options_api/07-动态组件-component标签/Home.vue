<template>
  <div>
    <h2>{{ name }} -- {{ age }}</h2>
    <button @click="sendFather">发送</button>
  </div>
</template>
<script>
export default {
  name: "App",
  props: {
    name: {
      type: String,
      default: "",
    },
    age: {
      type: Number,
      default: 0,
    },
  },
  emits: {
    HomeClick(n) {
      console.log("拦截", n);
    },
  },
  data() {
    return {};
  },
  methods: {
    sendFather() {
      this.$emit("HomeClick", 10);
    },
  },
};
</script>

<style  scoped>
</style>
