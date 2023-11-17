<template>
  <div>
    <button @click="change">改变</button>
    <br />
    <transition name="why">
      <span class="title" v-if="isShow">hello</span>
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
.title {
  display: inline-block;
}

.why-enter-active {
  animation: bounceInUp 1s ease-in;
}
.why-leave-active {
  animation: bounceInUp 1s ease-in reverse;
}
</style>
