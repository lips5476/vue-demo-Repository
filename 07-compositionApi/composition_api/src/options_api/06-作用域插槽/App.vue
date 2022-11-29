<template>
  <div>
    <!-- 作用域插槽可以使父元素访问到子元素的数据 -->

    <Son>
      <template v-slot:left="slotProps">
        <button>{{ slotProps.names }}--{{ slotProps.age }}</button>
      </template>
    </Son>

    <only-slot v-slot="onlyProps">
      <!-- 相当于 v-slot:default="onlyProps" 默认插槽的缩写  而默认插槽可以不用template-->
      <!-- 前提是组件里只有一个插槽且默认插槽的时候才可以缩写 -->
      <!-- 但是组件里如果有其他的具名插槽出现的时候  所有v-slot都得用template包裹 -->
      <button>{{ onlyProps.names }}--{{ onlyProps.age }}</button>
    </only-slot>
  </div>
</template>
<script>
import OnlySlot from "./only-slot.vue";
import Son from "./Son.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  components: { Son, OnlySlot },
};
</script>

<style  scoped>
</style>
