<template>
  <!-- 某些情况下我们想直接获取元素dom实例或子组件的dom实例 -->
  <!-- **注意** Vue3中已经废弃了$children的属性 -->
  <div>
    <h2 ref="title">{{ msg }}</h2>
    <button @click="getRef">获取</button>
  </div>
</template>
<script>
import { nextTick } from "@vue/runtime-core";
export default {
  name: "App",
  data() {
    return {
      msg: "aa",
    };
  },
  methods: {
    getRef() {
      this.msg = "bb";
      // vue DOM 的更新并不是同步的。
      // 相反，Vue 将缓冲它们直到更新周期的 “下个时机” 以确保无论你进行了多少次状态更改，每个组件都只需要更新一次。
      console.log(this.$refs.title.innerText);
      nextTick(() => {
        // 若要等待一个状态改变后的 DOM 更新完成，你可以使用 nextTick()
        console.log(this.$refs.title.innerText);
      });
    },
  },
};
</script>  

<style  scoped>
</style>
