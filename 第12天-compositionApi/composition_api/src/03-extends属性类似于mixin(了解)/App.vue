<template>
  <div>
    <!-- 可以拿到使用了extends的组件里的属性   了解即可  因为可以用mixin代替 -->
    <h2>App {{ title }}</h2>
    <button @click="send">send</button>
  </div>
</template>
<script>
import basePage from "./basePage.vue";
export default {
  name: "App",
  extends: basePage,
  data() {
    return {};
  },
};
</script>

<style  scoped>
</style>
