<template>
  <div>
    <slot name="left" :names="name" :age="age"></slot>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      name: "leo",
      age: 18,
    };
  },
};
</script>

<style  scoped>
</style>
