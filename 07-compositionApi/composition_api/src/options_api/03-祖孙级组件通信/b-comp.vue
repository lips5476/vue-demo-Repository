<template>
  <div>
    {{name}}--{{age}}--{{length}}
  </div>
</template>
<script>
export default {
   name: 'App',
   data(){
     return {
     
     }
   },
   inject:['name','age','length']
}
</script>

<style  scoped>
</style>
