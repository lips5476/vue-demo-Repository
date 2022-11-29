<template>
  <div>
    <AComp></AComp>
    <CComp></CComp>
  </div>
</template>
<script>
import AComp from "./a-comp.vue";
import CComp from "./c-comp.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: { AComp, CComp },
};
</script>

<style  scoped>
</style>
