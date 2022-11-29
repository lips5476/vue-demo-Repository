<template>
  <div>
    <h2>{{ age }}</h2>
    <button @click="send">send</button>
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  age: {
    type: Number,
    require: true,
  },
});
const emits = defineEmits({
  //defineEmits返回的是一个方法  直接替代this.$emit()
  add: (num) => {
    console.log("拦截了", num);
  },
});

const send = () => {
  emits("add", 10);
};
</script>

<style  scoped>
</style>
