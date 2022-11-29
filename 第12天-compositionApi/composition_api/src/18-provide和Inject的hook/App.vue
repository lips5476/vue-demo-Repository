<template>
  <div>
    <hook-son></hook-son>
  </div>
</template>
<script>
import hookSon from "./hook-son.vue";
import { provide, readonly, ref } from "@vue/runtime-core";
export default {
  components: {
    hookSon,
  },
  setup() {
    // 肯定使用的是响应式数据   但是子组件inject拿到的数据可以被子组件 .value修改
    let name = ref("aaa");
    let age = ref(18);

    // 所以为了保证单向数据流  provide传过去的数据用readonly包裹一下
    provide("name", readonly(name));
    provide("age", readonly(age));
    return {};
  },
};
</script>

<style  scoped>
</style>
