<template>
  <div>
    <!-- reactive嵌套ref深层解包  不用写.value -->
    <h2>{{ info.count }}</h2>
  </div>
</template>
<script>
import { reactive, ref } from "vue";
export default {
  setup() {
    const count = ref(100);

    const info = reactive({
      count,
    });

    return {
      info,
    };
  },
};
</script>

<style  scoped>
</style>
