<template>
  <div>
    <h2>{{ msg }}</h2>
  </div>
</template>
<script>
export default {
  props: {
    msg: {
      type: String,
      default: "leo",
      require: true,
    },
  },
  setup(props, context) {
    // setup里面不可以使用this

    console.log(props.msg);
    console.log(context.attrs.class, context.attrs.id);
    console.log(context.slots);
    console.log(context.emit);

    // context里有三个属性  attrs slots emit
  },
};
</script>

<style  scoped>
</style>
