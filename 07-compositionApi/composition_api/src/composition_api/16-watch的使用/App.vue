<template>
  <div>aaa</div>
</template>
<script>
import { reative, ref, watch } from "vue";
export default {
  setup() {
    const state = reactive({ name: "leo", age: 18 });
    const count = ref(100);

    watch(
      // 情况一:   newVal为kobe, oldVal为leo
      () => state.name,

      // 情况二: newVal为{name:"kobe",age:18}, oldVal为{name:"kobe",age:18}
      state,

      // 情况三: newVal为{name:"kobe",age:18}, oldVal为{name:"leo",age:18}
      // watch默认会对reactive对象深度监听的  但是不对普通getter对象深度监听  要手动deep
      () => {
        return { ...state };
      },

      // 情况四: newVal为50, oldVal为100
      count,
      (newVal, oldVal) => {
        console.log(newVal, oldVal);
      },
      {
        deep: true,
        immediate: false,
        flush: "post",
      }
    );

    watch(
      [
        () => {
          return { ...state };
        },
        count,
      ],
      (newVal, oldVal) => {
        console.log(newVal[0].name, newVal[1]); //kobe , 50
        console.log(oldVal[0].name, oldVal[1]); //leo , 100
      }
    );
    const changeValue = () => {
      state.name = "kobe";
      count.value = 50;
    };
    return {
      state,
      count,
    };
  },
};
</script>

<style  scoped>
</style>
