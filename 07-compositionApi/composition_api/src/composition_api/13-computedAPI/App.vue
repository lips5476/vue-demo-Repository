<template>
  <div>
    <h2>{{ AllName }}</h2>
    <button @click="changeName">changeName</button>
  </div>
</template>
<script>
import { computed, ref } from "vue";
export default {
  setup() {
    let firstName = ref("hello");
    let lastName = ref("leo");

    const AllName = computed({
      get: () => {
        return firstName.value + " " + lastName.value;
      },
      set(newValue) {
        const needArr = newValue.split(" ");
        firstName.value = needArr[0];
        lastName.value = needArr[1];
      },
    });

    const changeName = () => {
      // ***注意computed创建的也是一个ref对象  所以得到或者修改值要用.value
      AllName.value = "hello computed";
    };
    return {
      AllName,
      changeName,
    };
  },
};
</script>

<style  scoped>
</style>
