<template>
  <div>
    <h2>{{ msg }}</h2>
    <!-- <h2>{{ count }}</h2>
    <h2>{{ age }}</h2>
    <h2>{{ name }}</h2>
    <h2>{{ height }}</h2> -->
    <h2>{{ sCount }}</h2>
    <button @click="inc">inc</button>
  </div>
</template>
<script>
import { ref } from "@vue/reactivity";
import { useStore, mapState } from "vuex";
import { computed } from "@vue/runtime-core";
export default {
  setup() {
    const msg = ref("aaa");
    const store = useStore();
    const inc = () => {
      store.commit("inc");
    };
    const count = computed(() => store.state.count);
    return { msg, count, inc };
  },
  computed: {
    // ...mapState(["count", "age", "name", "height"]),
    ...mapState({
      sCount: (state) => state.count,
    }),
  },
};
</script>

<style  scoped>
</style>
