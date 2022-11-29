<template>
  <div>
    <setup-son :msg="msg" class="setClass" id="setId" @add="cons">
      <template #default>
        <h2>aaa</h2>
      </template>
    </setup-son>
  </div>
</template>
<script>
import setupSon from "./setup-son.vue";
export default {
  components: { setupSon },
  name: "App",
  data() {
    return {
      msg: "aaa",
    };
  },
  methods: {
    cons(num) {
      console.log(num);
    },
  },
};
</script>

<style  scoped>
</style>
