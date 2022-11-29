<template>
  <div>
    <input type="text" v-focus />
  </div>
</template>
<script>
export default {
  directives: {
    focus: {
      mounted(el, bundings, vnode, preVnode) {
        el.focus();
      },
    },
  },
  setup() {
    return {};
  },
};
</script>

<style  scoped>
</style>
