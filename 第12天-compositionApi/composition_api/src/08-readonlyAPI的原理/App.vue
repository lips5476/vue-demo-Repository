<template>
  <div>
    <button @click="change">change</button>
  </div>
</template>
<script>
import { ref, readonly, reactive } from "vue";
export default {
  // readonly返回原生对象的只读代理 原理是proxy的set方法被劫持，且只读

  setup() {
    // 一般数据只读
    const info1 = { name: "leo" };
    const count1 = 100;
    const readonlyInfo = readonly(info1);
    const readonlyCount1 = readonly(count1);

    // 组件一般传响应式数据
    const info2 = reactive({ name: "leo1" });
    const count2 = ref(100);
    const readonlyInfo2 = readonly(info2);
    const readonlyCount2 = readonly(count2);

    const change = () => {
      readonlyInfo.name = "aaa"; //会报警告
    };

    return {
      change,
    };
  },
};
</script>

<style  scoped>
</style>
