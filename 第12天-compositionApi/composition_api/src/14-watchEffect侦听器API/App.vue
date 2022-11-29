<template>
  <div>
    <h2>{{ name }} -- {{ age }}</h2>
    <button @click="changeName">changeName</button>
    <button @click="changeAge">changeAge</button>
  </div>
</template>
<script>
import { request } from "http";
import { watchEffect, watch, ref } from "vue";
export default {
  setup() {
    // watchEffect会自动收集所有响应式依赖,且立即执行(即默认immediate)  类似于useEffect
    //  watchEffect停止监听  通过其返回值
    //  watchEffect清除副作用  原理等同于react的useEffect的return

    const name = ref("leo");
    const age = ref(18);

    const changeName = () => (name.value = "aaa");
    const changeAge = () => {
      age.value++;
      // 停止监听
      if (age.value > 25) {
        stop();
      }
    };

    const stop = watchEffect((onInvalidate) => {
      // 清除副作用   等同于react的useEffect的return  通过onInvalidate是个函数

      onInvalidate(() => {
        // 组件销毁的时候清除多余的请求或者定时器之类的副作用
        // request.cancel()
      });

      console.log("变化了", name.value, age.value);
    });
    return { name, age, changeName, changeAge };
  },
};
</script>

<style  scoped>
</style>
