<template>
  <div></div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {};
  },
  props: ["modelValue", "modelModifiers"],
  emits: ["update:model-value"],
  created() {
    // 有了this.modelModifiers的值就可以在事件传回父级时对值进行判断
    console.log(this.modelModifiers); //{number: true}
  },
};
</script>

<style  scoped>
</style>
