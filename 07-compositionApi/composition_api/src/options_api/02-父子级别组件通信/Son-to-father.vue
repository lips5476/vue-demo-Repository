<template>
  <div>
    <button @click="sonClick">+1</button>
  </div>
</template>
<script>
export default {
   name: 'App',
   emits:{
     add:(n) =>{
      //  这里的形参用来截取子组件执行父组件传过来的自定义事件时传给父组件的实参
      console.log(n)
      if(n==10){
        return true
      }
      else{
        return false
      }
     }
   },
   data(){
     return {
     
     }
   },
   methods:{
     sonClick(){
      this.$emit('add',10)
     }
   }
}
</script>

<style  scoped>
</style>
