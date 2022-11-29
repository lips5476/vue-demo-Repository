<template>
  <div>
    <!-- component标签动态渲染组件渲染 -->
    <!-- 一般使用:is来动态绑定 -->
    <!-- 传参也和正常组件一样传参就好了 -->
    <component is="Home" :name="name" :age="age" @HomeClick="cons"></component>
  </div>
</template>
<script>
import Home from "./Home.vue";
export default {
  name: "App",
  data() {
    return {
      name: "leo",
      age: 18,
    };
  },
  methods: {
    cons(n) {
      console.log("打印", n);
    },
  },
  components: {
    Home,
  },
};
</script>

<style  scoped>
</style>
