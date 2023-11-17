<template>
  <div>
    <button @click="change">change</button>
    <br />
    <transition name="why" type="transition" :duration="1000">
      <!-- type可以决定当同时存在transition和animation且时间不同时以谁为准先结束 -->
      <!-- duration可以指定动画时间  还可以这么写:duration="{enter:1000,leave:1000}" -->
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
.why-enter-from,
.why-leave-to {
  opacity: 0;
}

.why-enter-to,
.why-leave-from {
  opacity: 1;
}
.why-enter-active,
.why-leave-active {
  transition: opacity 2s ease;
}
.why-enter-active {
  animation: bounce 1s ease;
}
.why-leave-active {
  animation: bounce 1s ease reverse;
}

@keyframes bounce {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
