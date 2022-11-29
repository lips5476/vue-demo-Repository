<template>
  <div>
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
  </div>
</template>
<script>
import { inject } from "@vue/runtime-core";
export default {
  setup() {
    //第二个是默认值 这里写了默认值 父组件的第二个参数可以不写
    const name = inject("name", "defaultVal");
    const age = inject("age", 20);
    return { name, age };
  },
};
</script>

<style  scoped>
</style>
