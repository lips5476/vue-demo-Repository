<template>
  <div>
    <h2>actions</h2>
    <button @click="act">actions</button>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  methods: {
    // mapActions的用法
    // 写法一
    // ...mapActions(["rootAction"]),
    // 写法二
    ...mapActions({
      rootAction: "rootAction",
    }),
    act() {
      this.rootAction({ n: 10 });
    },
  },
};
</script>

<style  scoped>
</style>
