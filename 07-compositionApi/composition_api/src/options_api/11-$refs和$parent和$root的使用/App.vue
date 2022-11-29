<template>
  <!-- 某些情况下我们想直接获取元素dom实例或子组件的dom实例 -->
  <!-- **注意** Vue3中已经废弃了$children的属性 -->
  <div>
    <h2 ref="title">aaa</h2>
    <Son ref="son"></Son>
    <button @click="getRef">获取</button>
  </div>
</template>
<script>
import Son from "./son.vue";
export default {
  components: { Son },
  name: "App",
  data() {
    return {
      arr: ["a", "b"],
    };
  },
  methods: {
    getRef() {
      console.log(this.$refs.title);
      console.log(this.$refs.son.msg);
      this.$refs.son.sayHello();

      // $el获取具体某个元素的根元素
      console.log(this.$refs.son.msg.$el);
    },
  },
};
</script>  

<style  scoped>
</style>
