<template>
  <div>
    <!-- <my-slot> -->
    <!-- <button>我按钮</button> -->
    <!-- <button>我按钮</button> -->
    <!-- 也可插入组件 -->
    <!-- </my-slot> -->
    <!-- <my-slot> </my-slot> -->

    <!-- 具名插槽 -->
    <name-slot :position="position">
      <template v-slot:left>
        <span>left</span>
      </template>
      <!-- v-slot:  可以简写为#: -->
      <template v-slot:center>
        <span>center</span>
      </template>
      <template v-slot:right>
        <span>right</span>
      </template>
      <!-- 如果使用position就是单纯的position字符串  []表示获取的是data里position的值 -->
      <template v-slot:[position]>
        <span>right</span>
      </template>
    </name-slot>
  </div>
</template>
<script>
import mySlot from "./my-slot.vue";
import NameSlot from "./name-slot.vue";

export default {
  components: { mySlot, NameSlot },
  name: "App",
  data() {
    return {
      postion: "left",
    };
  },
};
</script>

<style  scoped>
</style>
