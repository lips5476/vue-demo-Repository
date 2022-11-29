<template>
  <div>
    <h2>{{ msg }}</h2>
    <h2>{{ title }}</h2>

    <!-- <input v-model="msg" />
    <input :value="msg" @input="msg = $event.target.value" /> -->

    <!-- <hy-input v-model="msg"></hy-input> -->
    <!-- <hy-input :modelValue="msg" @update:model-value="msg = $event"></hy-input> -->
    <hy-input v-model="msg" v-model:title="title"></hy-input>
  </div>
</template>
<script>
import HyInput from "./HyInput.vue";
export default {
  components: { HyInput },
  name: "App",
  data() {
    return {
      msg: "aaa",
      title: "title",
    };
  },
};
</script>

<style  scoped>
</style>
