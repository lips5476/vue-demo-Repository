<template>
  <div>
    <h2>{{ msg }}</h2>
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <h2>{{ sex }}</h2>
    <h2>{{ cm }}</h2>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    // 根容器state的写法
    // 写法一
    // ...mapState(["msg", "name", "age", "sex", "cm"]),
    // 写法二
    // ...mapState({
    //   msg: (state) => state.msg,
    //   name: (state) => state.name,
    //   age: (state) => state.age,
    //   sex: (state) => state.sex,
    //   cm: (state) => state.cm,
    // }),
    // 写法三
    ...mapState({
      msg: "msg",
      name: "name",
      age: "age",
      sex: "sex",
      cm: "cm",
    }),
  },
};
</script>

<style  scoped>
</style>
