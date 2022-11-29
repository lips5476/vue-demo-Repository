<template>
  <div>
    <!-- 虽然refAPI创建的值是个对象  但是在template里使用会自动解包  所以不用count.value -->
    <!-- 但是refAPI只是浅层解包  就是说refAPI创建的值不能被包裹进一个对象了里 -->
    <!-- 如果被放进了对象里  那在在template里使用就得info.count.value -->
    <!-- const count = ref(100); -->
    <!-- const info = { count }; -->
    <!-- <h2>{{ info.count.value }}</h2> -->

    <h2>{{ count }}</h2>
    <button @click="inc">+1</button>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    // 由于reactiveAPI限制只能使用对应或数组作为传入值  所以有了refAPI
    // refAPI返回一个响应式的的对象引用

    const count = ref(100);

    const inc = () => {
      count.value++;
    };

    return {
      count,
      inc,
    };
  },
};
</script>

<style  scoped>
</style>
