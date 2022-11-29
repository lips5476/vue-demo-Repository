<template>
  <div>aaa</div>
</template>
<script>
import { getCurrentInstance } from "@vue/runtime-core";
export default {
  setup() {
    const instance = getCurrentInstance();

    console.log(instance.appContext.config.globalProperties);
    return {};
  },
};
</script>

<style  scoped>
</style>
