<template>
  <div>
    <router-link to="/home">Home</router-link>
    <router-link to="/index">Index</router-link>

    <!-- 编程式跳转 -->
    <button @click="jump">toHome</button>

    <router-view></router-view>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const jump = () => {
      // 写法一：基础写法
      router.push("/home");
      // 写法二:传参式写法
      router.push({
        path: "/home",
        query: {
          name: "leo",
          age: 18,
        },
      });
      // 对应的文件里就是 $route.query.name
      // router.replace('/home')（了解）
      // router.go(1  ||  -1) （了解）
      // router.forward() （了解）
      // router.() （了解）
    };
    return { jump };
  },
  // methods: {
  //   jump() {
  //     this.$router.push("/home");
  //   },
  // },
};
</script>

<style  scoped>
</style>
