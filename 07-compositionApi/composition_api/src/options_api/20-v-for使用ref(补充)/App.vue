<template>
  <div>
    <div v-for="it in arr" :key="it" ref="items">
      <div>{{ it }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      arr: ["a", "b", "c"],
    };
  },
  mounted() {
    // 当ref用在数组上的时候  打印出来的$refs是个数组
    console.log(this.$refs.items);
  },
};
</script>

<style  scoped>
</style>
