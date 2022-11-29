<template>
  <div>
    <h2>{{ homeMsg }}</h2>
    <h2>{{ homeName }}</h2>
    <h2>{{ height }}</h2>
    <h2>{{ personMsg }}</h2>
    <button @click="btnClick">homeAction</button>
    <button @click="btnClick2">fatherUseSon</button>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  computed: {
    // 模块的mapState和mapGetters的写法
    // 写法一
    // ...mapState("home", ["homeMsg", "homeName"]),
    // 写法二
    ...mapState("home", {
      homeMsg: "homeMsg",
      homeName: "homeName",
    }),
    ...mapGetters("home", {
      height: "height",
      personMsg: "personMsg",
    }),
  },
  methods: {
    ...mapActions(["fatherUseSon"]),
    ...mapActions("home", {
      homeAction: "homeAction",
    }),
    btnClick() {
      this.homeAction({ n: 10 });
    },
    btnClick2() {
      this.fatherUseSon();
    },
  },
};
</script>

<style  scoped>
</style>
