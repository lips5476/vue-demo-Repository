<template>
  <div>
    <slot :names="name" :age="age"> </slot>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      name: "only",
      age: 18,
    };
  },
};
</script>

<style  scoped>
</style>
