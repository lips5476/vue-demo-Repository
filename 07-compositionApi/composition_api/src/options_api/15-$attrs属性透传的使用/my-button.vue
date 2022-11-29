<template>
  <!-- 外面传入的large会合并到组件根元素上的class上来 -->
  <!-- <button class="base">aaa</button> -->
  <my-inner-btn></my-inner-btn>
</template>
<script>
import myInnerBtn from "./my-innerBtn.vue";
export default {
  components: { myInnerBtn },
  name: "App",
  //inheritAttrs: false, //若不想让属性透传过来  可以设置这个属性
  data() {
    return {};
  },
  created() {
    console.log(this.$attrs);
  },
};
</script>

<style  scoped>
</style>
