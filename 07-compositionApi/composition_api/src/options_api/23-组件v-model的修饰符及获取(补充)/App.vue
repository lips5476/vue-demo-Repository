<template>
  <div>
    <model-son v-model.number="msg"></model-son>
  </div>
</template>
<script>
import modelSon from "./model-son.vue";
export default {
  components: { modelSon },
  name: "App",
  data() {
    return {
      msg: 18,
    };
  },
};
</script>

<style  scoped>
</style>
