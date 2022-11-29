<template>
  <div>
    <template v-for="it in tabArr" :key="it">
      <button
        @click="changeIt($event, it)"
        :class="{ isActive: content === it }"
      >
        {{ it }}
      </button>
    </template>

    <!-- keep-alive包含三个属性 include exclude  max -->
    <!-- includ只有匹配到名字的组件被缓存  exclude反之 -->
    <!-- max 最多可以被缓存几个实例  超出部分(最近没有被访问的组件)销毁掉 -->
    <!-- <keep-alive include="a,b"> -->
    <!-- <keep-alive :include="/a|b/"> -->
    <!-- <keep-alive :include="['a','b']"> -->
    <keep-alive>
      <component :is="content"></component>
    </keep-alive>
  </div>
</template>
<script>
import one from "./one.vue";
import Three from "./three.vue";
import Two from "./two.vue";
export default {
  components: { one, Two, Three },
  name: "App",
  data() {
    return {
      tabArr: ["one", "two", "three"],
      content: "one",
    };
  },
  methods: {
    changeIt(e, item) {
      this.content = item;
    },
  },
};
</script> 

<style  scoped>
.isActive {
  color: red;
}
</style>
