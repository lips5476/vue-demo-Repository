<template>
  <div>
    <h2>start</h2>
    <slot> 我是没传插槽元素的默认显示 </slot>
    <slot> 我是没传插槽元素的默认显示 </slot>
    <slot> 我是没传插槽元素的默认显示 </slot>
    <h2>edd</h2>
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
