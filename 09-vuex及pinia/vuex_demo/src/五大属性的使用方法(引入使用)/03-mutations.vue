<template>
  <div>
    <h2>{{ count }}</h2>
    <button @click="inc">inc</button>
    <button @click="dec">dec</button>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["count"]),
  },
  methods: {
    // mapMutations的写法
    // 写法一
    // ...mapMutations(["incre", "decre"]),
    // 写法二
    ...mapMutations({
      incre: "incre",
      decre: "decre",
    }),
    inc() {
      // mutation函数的提交方式
      // 写法一
      // this.$store.commit("incre", { n: 1 });
      // 写法二
      // this.incre({ n: 1 });
      // 写法三
      this.$store.commit({
        type: "incre",
        n: 1,
      });
    },
    dec() {
      // this.$store.commit("decre", { n: 1 });
      // this.decre({ n: 1 });
      this.$store.commit({
        type: "decre",
        n: 1,
      });
    },
  },
};
</script>

<style  scoped>
</style>
