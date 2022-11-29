<template>
  <div>
    <!-- <button @click="btnClick">htInputbtn</button>
    <h2>hyinput 的 {{ modelValue }}</h2> -->

    <!-- <input :value="modelValue" @input="btnClick($event)" />  -->
    <input v-model="value" />
    <input v-model="needTitle" />
  </div>
</template>
<script>
export default {
  name: "App",
  props: {
    modelValue: {
      type: String,
      required: true,
      default: "bbb",
    },
    title: {
      type: String,
      required: true,
      default: "defaultTitle",
    },
  },
  computed: {
    value: {
      set(value) {
        this.$emit("update:model-value", value);
      },
      get() {
        return this.modelValue;
      },
    },
    needTitle: {
      set(value) {
        this.$emit("update:title", value);
      },
      get() {
        return this.title;
      },
    },
  },
  emits: ["update:model-value", "update:title"],
  data() {
    return {};
  },
  methods: {
    btnClick(e) {
      this.$emit("update:model-value", e.target.value);
    },
  },
};
</script>

<style  scoped>
</style>
