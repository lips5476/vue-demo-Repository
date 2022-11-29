<template>
  <div>aaa</div>
</template>
<script>
import { getCurrentInstance } from "vue";
export default {
  setup() {
    // 如果是setup里拿全局属性$name得这么写   通过getCurrentInstance

    const instance = getCurrentInstance();
    console.log(instance.appContext.config.globalProperties.$name);

    return {};
  },
};
</script>

<style  scoped>
</style>
