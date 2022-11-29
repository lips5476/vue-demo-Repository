<template>
  <div>
    <AComp></AComp>
    <button @click="add">+1</button>
  </div>
</template>
<script>
import AComp from "./a-comp.vue";
import { computed } from "vue";

export default {
  name: "App",
  data() {
    return {
      arr: ["a", "b", "c"],
    };
  },
  components: { AComp },
  // provider的写法和data一致
  // 但是不是响应式的  不是实时随着data里的数据更新而更新
  // 所以要用到 vue3.x的computed  引入使用
  provide() {
    return {
      name: "leo",
      age: 18,

      // computed的使用

      length: computed(() => this.arr.length),
    };
  },
  methods: {
    add() {
      this.arr.push(this.arr);
    },
  },
};
</script>

<style  scoped>
</style>
