<template>
  <div>
    <exopse-son ref="son"></exopse-son>
  </div>
</template>
<script>
import exopseSon from "./exopse-son.vue";
export default {
  components: { exopseSon },
  name: "App",
  data() {
    return {};
  },
  mounted() {
    // 子组件设置了expose数组里只能访问msg  而age没被设置可访问则为undefined
    console.log(this.$refs.son.msg);
    console.log(this.$refs.son.age);
  },
};
</script>

<style  scoped>
</style>
