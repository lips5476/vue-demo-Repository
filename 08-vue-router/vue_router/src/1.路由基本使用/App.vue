<template>
  <div id="app">
    <h2>aaa</h2>
    <router-link to="/home" replace active-class="testClass">home</router-link>
    <router-link to="/index" replace>index</router-link>
    <router-link to="/lazy" replace>lazy</router-link>

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
.testClass {
  color: red;
}
</style>
