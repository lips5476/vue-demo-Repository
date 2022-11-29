<template>
  <div>
    <h2>Home</h2>
    <router-link to="/home/boy">boy</router-link>
    <router-link to="/home/girl">girl</router-link>
    <router-link to="/home/people">people</router-link>
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
