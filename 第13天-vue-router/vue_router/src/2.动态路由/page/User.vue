<template>
  <div>User:{{ $route.params.name }}</div>
</template>
<script>
import { useRoute } from "vue-router";
import { onUpdated } from "vue";
export default {
  setup() {
    const route = useRoute();

    onUpdated(() => {
      console.log(route.params.name);
    });
    return {};
  },
};
</script>

<style  scoped>
</style>
