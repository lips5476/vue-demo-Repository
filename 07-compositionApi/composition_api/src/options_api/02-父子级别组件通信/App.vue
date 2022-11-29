<template>
  <div>
    <Son name="aaa" :title="msg" valid="leo" :obj="objdata"></Son>

    <!-- 在父元素里用子组件的时候传了非proprs的属性的时候  class style id  -->
    <!-- 子组件如果有根元素  会继承到子组件的根元素上 -->

    <Son class="classdata"></Son>

    <!-- 子组件向父组件传参 -->
    <SonToFather @add="cons"></SonToFather>
    
  </div>
</template>
<script>
import Son from './Son.vue';
import SonToFather from './Son-to-father.vue';
export default {
    name: "App",
    data() {
        return {
          msg:'bbb',
          objdata:{
            name:'anny',
            age:18
          }
        };
    },
    components: { Son, SonToFather },
    methods:{
      cons(e){
        console.log(e)
      }
    }
}
</script>

<style  scoped>
</style>
