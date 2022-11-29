<template>
  <div>
    <!-- ref 还可以绑定一个函数，每次组件更新时都被调用。该函数会收到元素引用作为其第一个参数-->
    <h2
      :ref="
        (el) => {
          getRef(el);
        }
      "
    >
      aaa
    </h2>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    getRef(el) {
      console.log(el.innerHTML);
    },
  },
};
</script>

<style  scoped>
</style>
