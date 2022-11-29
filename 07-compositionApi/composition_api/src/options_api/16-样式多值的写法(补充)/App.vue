
<template>
  <div>
    <!-- 当某个css属性是可以传多值的时候的写法 -->
    <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">aaa</div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>

<style  scoped>
</style>
