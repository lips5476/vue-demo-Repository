<template>
  <div>
    <h2 ref="title">aaa</h2>
  </div>
</template>
<script>
import { ref, watchEffect } from "vue";
export default {
  setup() {
    const title = ref(null);

    watchEffect(
      () => {
        console.log(title.value, "title");
      },
      {
        flush: "post",
      }
    );

    return {
      title,
    };
  },
};
</script>

<style  scoped>
</style>
