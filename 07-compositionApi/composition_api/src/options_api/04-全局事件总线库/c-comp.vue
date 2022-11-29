<template>
  <div>
    <button @click="send">发送</button>
  </div>
</template>
<script>
import emitter from "./utils/eventBus";
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    send() {
      console.log("发送了");
      emitter.emit("send", 10);
      emitter.emit("send2", 20);
    },
  },
};
</script>

<style  scoped>
</style>
