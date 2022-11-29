<template>
  <div>{{ name }}</div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("index", ["name"]),
  },
};
</script>

<style  scoped>
</style>
