<template>
  <div>
    {{ name }} --- {{ title }}

    <!-- 禁用了继承的非proprs的属性而想在其他非根元素使用透传的class style id -->
    <!-- 使用$attrs. -->
    <h2 :class="$attrs.class">attrs</h2>
    <h2 v-bind="$attrs">attrs</h2>
  </div>

  <!-- 当子组件有多个根元素的时候 -->
  <!-- 仍可以使用$attrs来指定元素继承透传的非props属性 -->
  <!-- <h2></h2> -->
</template>
<script>
export default {
  name: "App",

  //  如果想禁用非proprs的属性的继承 默认为true
  inheritAttrs: false,

  props: {
    name: {
      type: String,
      required: true,
      default: "bbb",
    },
    title: {
      type: String,
      required: true,
      default: "ccc",
    },
    // 可以验证prorps的值
    valid: {
      vaildator(val) {
        return ["leo", "any", "bucy"].includes(val);
      },
      // 传过来的对象propsdefault必须为函数
      obj: {
        default() {
          return { msg: "notfound" };
        },
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style  scoped>
</style>
