<template>
  <div>
    <h2>Home</h2>
    <router-link to="/home/desk">desk</router-link>
    <router-link to="/home/chair">chair</router-link>
    <div>a</div>
    <router-view></router-view>
    <div>b</div>
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
