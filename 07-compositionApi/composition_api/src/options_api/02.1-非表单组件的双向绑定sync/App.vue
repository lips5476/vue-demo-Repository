<template>
 <div>
    请问
    <button @click="fatherHander">切换-父按钮</button>
    <Son :foo.sync="bar" ></Son>
  </div>
</template>
<script>
import Son from './Son.vue'
export default {
   data(){
      return{
        bar:true
      }
    },
    components:{
      Son
    },
    methods:{
      fatherHander(){
        this.bar=!this.bar
      },
    },
};
</script>

<style  scoped>
</style>
