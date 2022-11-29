<template>
  <div>
    <!-- 不带name的插槽 默认带有一个隐含的name:default -->
    <!-- <slot></slot> -->

    <h2>
      left
      <div>
        <!-- 动态插槽名  可以在data里获取  甚至可以在父组件使用这个组件的时候传入props -->
        <slot :name="position"></slot>
      </div>
    </h2>
    <h2>
      center
      <div>
        <slot name="center"></slot>
      </div>
    </h2>
    <h2>
      right
      <div>
        <slot name="right"></slot>
      </div>
    </h2>
  </div>
</template>
<script>
export default {
  name: "App",
  // props:{
  //   position:{
  //     type:String,
  //     require:false,
  //   }
  // },
  data() {
    return {
      position: "left",
    };
  },
};
</script>

<style  scoped>
</style>
