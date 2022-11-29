<template>
  <div id="app">
    <h2>aaa</h2>
    <router-link to="/user/leo">leo</router-link>
    <router-link :to="`/user/${name}`" replace>why</router-link>

    <router-view></router-view>
    <h2>bbb</h2>
  </div>
</template>
<script>
export default {
  setup() {
    return {
      name: "why",
    };
  },
};
</script>

<style  scoped>
</style>
