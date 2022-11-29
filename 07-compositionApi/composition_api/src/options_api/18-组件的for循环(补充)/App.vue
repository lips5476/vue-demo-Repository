<template>
  <div>
    <!-- 组件上的for就和普通的for一样正常使用  但组件有自己独立的作用域 得收到传item 和idx -->
    <inner-son
      v-for="(it, idx) in arr"
      :key="it"
      :item="it"
      :index="idx"
    ></inner-son>
  </div>
</template>
<script>
import innerSon from "./inner-son.vue";
export default {
  components: { innerSon },
  name: "App",
  data() {
    return {
      arr: ["a", "b", "c"],
    };
  },
};
</script>

<style  scoped>
</style>
