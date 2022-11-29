<template>
  <div>
    <h2>{{ msg }}</h2>
    <input type="text" v-model="msg" />
  </div>
</template>
<script>
import debounceRef from "./debounceRef";
export default {
  setup() {
    const msg = debounceRef("aaaa");

    return {
      msg,
    };
  },
};
</script>

<style  scoped>
</style>
