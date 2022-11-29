<template>
  <div>
    <h2>{{ height }}</h2>
    <h2>{{ personMsg }}</h2>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    // 根容器的getters的获取
    // 写法一
    // ...mapGetters(["height", "personMsg"]),
    // 写法二
    ...mapGetters({
      height: "height",
      personMsg: "personMsg",
    }),
  },
};
</script>

<style  scoped>
</style>
