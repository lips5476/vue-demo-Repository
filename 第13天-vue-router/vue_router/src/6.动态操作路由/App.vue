<template>
  <div>
    <router-link to="/home">home</router-link>
    <router-link to="/index">index</router-link>
    <router-link to="/add">add</router-link>
    <br />
    <br />
    <br />
    <br />
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
