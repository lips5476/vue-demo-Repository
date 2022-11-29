<template>
  <div>
    <input type="text" ref="ipt" />
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";

const ipt = ref(null);
onMounted(() => {
  ipt.value.focus();
});
</script>

<style  scoped>
</style>
