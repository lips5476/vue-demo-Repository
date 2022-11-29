<template>
  <div>son</div>
</template>
<script>
export default {
  name: "App",
  // 子组件设置了expose数组里只能访问msg  父级只能得到子组件的msg  而age没被设置可访问则为undefined
  expose: ["msg"],
  data() {
    return {
      msg: "aaa",
      age: 18,
    };
  },
};
</script>

<style  scoped>
</style>
