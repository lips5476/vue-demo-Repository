<template>
  <div>
    <button @click="add">{{ num }}</button>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      num: 10,
    };
  },
  methods: {
    add() {
      this.num++;
    },
  },
};
</script>

<style  scoped>
</style>
