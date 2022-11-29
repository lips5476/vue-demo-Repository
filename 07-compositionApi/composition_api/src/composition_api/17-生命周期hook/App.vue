<template>
  <div>aaa</div>
</template>
<script>
import {
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onMounted,
  onUnmounted,
  onUpdated,
} from "@vue/runtime-core";
export default {
  setup() {
    onBeforeMount(() => {});
    onMounted(() => {});
    onBeforeUpdate(() => {});
    onUpdated(() => {});
    onBeforeUnmount(() => {});
    onUnmounted(() => {});
    onActivated(() => {});
    onDeactivated(() => {});
    return {};
  },
};
</script>

<style  scoped>
</style>
