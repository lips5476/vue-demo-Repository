<template>
  <div>
    <button @click="change">change</button>
    <br />
    <transition enter-active-class="animate__animated  animate__flipOutX">
      <span style="display: inline-block" v-if="isShow">hello</span>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    change() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style  scoped>
</style>
