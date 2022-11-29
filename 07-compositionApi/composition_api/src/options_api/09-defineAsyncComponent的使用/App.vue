<template>
  <div>
    <!-- 异步组件一般在路由的时候配置 -->
    <!-- 异步组件的作用是为了做代码分包 -->
    <defineComp></defineComp>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
import loading from "./loading.vue";
import error from "./error.vue";

// const defineComp  =  defineAsyncComponent(()=>import('./defineComp.vue'))
const defineComp = defineAsyncComponent({
  loader: () => import("./defineComp.vue"),
  loadingComponent: loading,
  errorComponent: error,
  delay: 2000, //延迟显示多久显示该组件
  timeout: 3000, // 当超过多少秒就会显示报错组件

  /** onError
   * err:显示错误信息
   * retry:函数，调用retry尝试重新加载该组件
   * fail:函数  不再加载直接退出
   * attempts:记录尝试的次数
   */
  onError: function (err, retry, attempts) {},
});
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    defineComp,
    loading,
    error,
  },
};
</script>

<style  scoped>
</style>
