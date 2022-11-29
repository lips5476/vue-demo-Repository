<template>
  <div>
    <h2>{{ count }}</h2>
    <button @click="inc">inc</button>
    <setup-son :age="age" @add="cons"></setup-son>
  </div>
</template>
<script setup>
import { ref } from "@vue/reactivity";
import setupSon from "./setup-son.vue";

const count = ref(100);
const age = ref(18);
const inc = () => {
  count.value++;
};
const cons = (num) => {
  console.log(num);
};
</script>

<style  scoped>
</style>
