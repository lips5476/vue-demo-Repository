<template>
  <div>aaaa</div>
</template>
<script>
import { unref, isRef, shallowRef, triggerRef, ref } from "vue";
export default {
  setup() {
    //unref其实就是对一个不知道是ref响应式对象还是纯原js数据进行解包
    //unref(val)  过程   val = isRef(val) ? val.value : val

    // isRef是否为ref响应式对象

    // shallowRef创建一个浅层的ref响应式对象
    // const info = ref({ name: "leo" });
    const info = shallowRef({ name: "leo" });
    const change = () => {
      //由于ref定义的响应式数据  肯定是可以深层修改的
      // shallowRef定义的就不能 因为创建的是浅层的响应式对象
      info.value.name = "aaa";
      triggerRef(info); //由于创建浅层的ref不是响应式想强制刷新浅层的ref更改数据后的页面用triggerRef
    };

    // 所以triggerRef用来触发和shallowRef相关的副作用
  },
};
</script>

<style  scoped>
</style>
