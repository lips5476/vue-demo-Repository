<template>
  <div>
    <h2>{{ msg }}</h2>
  </div>
</template>
<script>
import { demoMixin } from "./mixins/demoMixin";
export default {
  name: "App",
  mixins: [demoMixin],
  data() {
    return {
      msg: "app", //如果mixin里的数据和组件自身的重名  则保留组件自身的数据
    };
  },
  created() {
    //如果mixin里也有生命周期  组件也有  那逻辑会合并到数组里  都执行
    //先执行mixin里的
    console.log("app created");
  },
  methods: {
    //如果是类似于methods watch 等对象类型的mixin 都会被合并成一个对象
    // 比如methods  都定义了方法 则都会生效  但若对象里key相同(同名) 则取组件的键值对
    send() {
      console.log("app methods");
    },
  },
};
</script>

<style  scoped>
</style>
