<template>
  <div>
    <button v-bind="$attrs">aaa</button>
  </div>
</template>
<script>
export default {
  name: "App",
  inheritAttrs: false,
  data() {
    return {};
  },
};
</script>

<style  scoped>
</style>
