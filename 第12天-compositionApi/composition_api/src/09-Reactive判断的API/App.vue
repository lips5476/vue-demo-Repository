<template>
  <div></div>
</template>
<script>
import {
  isProxy,
  isReactive,
  isReadonly,
  toRow,
  shallowReactive,
  shallowReadonly,
} from "vue";

export default {
  setup() {
    // const state = reactive({name:'leo'})
    // isProxy(state)  //true或者false
    // isProxy检查对象是否由Reactive或者readonly构造的proxy响应式代理  返回true或者false
    // isReactive,检查对象是否由Reactive构造的proxy响应式代理 若由readonly创建包含Reactive的也为true
    // isReadonly,检查对象是否由readonly构造的只读代理
    // toRow,返回由Reactive或者readonly代理的原始对象
    // shallowReactive,浅层Reactive代理   只代理一层响应式 深层不响应式
    // shallowReadonly,浅层readonly代理   只代理一层只读 深层仍然可读可写
  },
};
</script>

<style  scoped>
</style>
