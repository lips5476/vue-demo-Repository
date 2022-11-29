<template>
  <div>
    <h2 ref="h2">{{ msg }}</h2>
    <button @click="change">change</button>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      msg: "aaa",
    };
  },
  watch: {
    msg: {
      handler() {
        console.log(this.$refs.h2.innerHTML);
      },
      // flush: "post",
      // 设置了flush:"post",则得到的是最新更新完成的值为bbb否则为aaa
      // 用户创建的侦听器回调，都会在 Vue 组件更新之前被调用。
      // 这意味着你在侦听器回调中访问的 DOM 将是被 Vue 更新之前的状态。
    },
  },
  methods: {
    change() {
      this.msg = "bbb";
    },
  },
};
</script>

<style  scoped>
</style>
