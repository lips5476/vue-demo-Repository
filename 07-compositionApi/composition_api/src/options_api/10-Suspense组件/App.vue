<template>
  <div>
    <!-- suspense组件有两个插槽 默认显示dafault插槽的内容 没显示则显示fallback的内容 -->
    <!-- 也是用于异步组件 -->
    <Suspense>
      <template #default>
        <defineComp></defineComp>
      </template>
      <template #fallback>
        <loading></loading>
      </template>
    </Suspense>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
import loading from "./loading.vue";

const defineComp = defineAsyncComponent(() => import("./defineComp.vue"));

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    defineComp,
    loading,
  },
};
</script>

<style  scoped>
</style>
