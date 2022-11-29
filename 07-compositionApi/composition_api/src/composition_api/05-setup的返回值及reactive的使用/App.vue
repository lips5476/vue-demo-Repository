<template>
  <div>
    <h2>{{ state.count }}</h2>
    <button @click="inc">+1</button>
  </div>
</template>
<script>
import { reactive } from "vue";
export default {
  setup() {
    // reactiveAPI限制传入的类型只能是对象或者数组

    const state = reactive({
      count: 100,
    });
    const inc = () => {
      state.count++;
    };

    return {
      state,
      inc,
    };
  },
};
</script>

<style  scoped>
</style>
