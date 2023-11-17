<template>
  <div>
    <button @click="change">改变</button>
    <br />
    <transition name="why" mode="out-in" appear>
      <span class="title" v-if="isShow">hello</span>
      <span class="title" v-else>world</span>
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
