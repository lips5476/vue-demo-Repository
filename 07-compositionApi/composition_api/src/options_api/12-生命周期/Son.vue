<template>
  <div>aaa</div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {};
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUnmount() {},
  unmounted() {},
  beforeUpdate() {},
  updated() {},

  // **注意** 用了keep-alive的组件   离开的时候不会被销毁不会unmounted 回来的时候不被创建created
  // 所以vue专门设置了两个生命周期actived和deactived来监听缓存组件
  activated() {},
  deactivated() {},
};
</script>

<style  scoped>
</style>
