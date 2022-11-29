<template>
  <div>
    <!-- 原因 直接解构 const {name,age} = state 会导致name和age失去响应式 -->
    <!-- 所以出现了toRef和toRefs -->

    <h2>{{ ageNum }}</h2>
    <button @click="inc">inc</button>
  </div>
</template>
<script>
import { reactive, toRefs, toRef } from "vue";
export default {
  setup() {
    const state = reactive({ name: "leo", age: 18 });
    // toRefs会把state里所有的数据都转成ref   会对性能有所消耗
    // let { name, age } = toRefs(state);

    // 有时候只需要用到里面其中的一个数据   那就用toRef
    let ageNum = toRef(state, "age");

    const inc = () => {
      // info.age++  或者直接
      ageNum.value++;
    };
    return {
      ageNum,
      inc,
    };
  },
};
</script>

<style  scoped>
</style>
