<template>
  <div>
    <router-link to="/home">Home</router-link>
    <router-link to="/index">Index</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style  scoped>
</style>
