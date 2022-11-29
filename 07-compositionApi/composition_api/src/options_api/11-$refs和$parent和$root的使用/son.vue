<template>
  <div>
    <h2>son</h2>
    <button @click="getParentAndRoot">获取父组件及根组件</button>
  </div>
</template>
<script>
export default {
  name: "Son",
  data() {
    return {
      msg: "aaa",
    };
  },
  methods: {
    sayHello() {
      console.log("hello");
    },
    getParentAndRoot() {
      console.log(this.$parent.arr);
      console.log(this.$root);
    },
  },
};
</script>

<style  scoped>
</style>
