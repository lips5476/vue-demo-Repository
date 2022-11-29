<template>
  <div>
    <button @click="inc" v-why.aaa.bbb="'leo'">counter :{{ msg }}</button>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  directives: {
    why: {
      created(el, bundings, vnode, preVnode) {
        // 在input的那些属性被挂载之前调用  如value
        console.log(el); //获取元素本身
        console.log(bundings); //参数value : leo  modifiers {aaa:true,bbb:true}
      },
      beforeMount() {},
      onMounted() {},
      beforeUpdate() {},
      updated() {},
      beforeUnmount() {},
      unmounted() {},
    },
  },
  setup() {
    const msg = ref(10);
    const inc = () => {
      msg.value++;
    };

    return { msg };
  },
};
</script>

<style  scoped>
</style>
