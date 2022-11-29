<template>
  <!-- vue3里面 v-if比v-for优先级高 -->
  <div>
    <ul>
      <!--  这会抛出一个错误，因为属性 todo 此时没有在该实例上定义-->
      <!-- <li v-for="todo in arr" v-if="!todo.isComplete" :key="todo">
        {{ todo.name }}
      </li> -->

      <!-- 正确做法 -->
      <template v-for="todo in arr">
        <li v-if="!todo.isComplete" :key="todo">
          {{ todo.name }}
        </li>
      </template>
    </ul>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      arr: [
        {
          name: "aaa",
          isComplete: true,
        },
        {
          name: "ccc",
          isComplete: false,
        },
        {
          name: "ddd",
          isComplete: true,
        },
      ],
    };
  },
};
</script>

<style  scoped>
</style>
