<template>
  <div>
    <Teleport to="#why">
      <span>aaa</span>
      <son></son>
    </Teleport>

    <!-- 两个teleport的内容会合并在一起  不会冲突 -->

    <Teleport to="#why">
      <div>bbb</div>
    </Teleport>
  </div>
</template>
<script>
import son from "./son.vue";
export default {
  components: {
    son,
  },
  setup() {
    return {};
  },
};
</script>

<style  scoped>
</style>
