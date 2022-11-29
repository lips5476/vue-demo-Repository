<template>
  <div id="app">
    <h2>aaa</h2>
    <router-link to="/home" v-slot="props">
      <button>jump to {{ props.href }}</button>
    </router-link>
    <router-link to="/index" v-slot="props" custom>
      <button @click="props.navigate">Index</button>
      <h2 :style="{ color: props.isActive ? 'red' : 'inherit' }">active</h2>
    </router-link>

    <router-view v-slot="props">
      <keep-alive>
        <component :is="props.component"></component>
      </keep-alive>
    </router-view>
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
