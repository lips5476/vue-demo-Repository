<template>
  <div>aaa</div>
</template>
<script>
import emitter from "./utils/eventBus";
export default {
  created() {
    emitter.on("send", (num) => {
      console.log("data", num);
    });
    emitter.on("send2", (num) => {
      console.log("data2", num);
    });

    // 监听所有事件的写法 有两个参数 type是它监听到的类型 即send和send2
    emitter.on("*", (type, info) => {
      console.log("allEmmit", type, info);
    });

    // 取消所有emitter中的监听
    emitter.all.clear();

    // 取消某个监听
    function send2Call(num) {
      console.log("data2", num);
    }
    emitter.off("send2", send2Call);
  },
};
</script>

<style  scoped>
</style>
