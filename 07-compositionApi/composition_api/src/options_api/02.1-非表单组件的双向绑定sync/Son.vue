<template>
   <div v-if="foo" class="demo">
        <h2>我是子组件</h2>
        <h3>我是子组件中的信息</h3>
        <h3>我是子组件中的信息</h3>
        <button @click="sonHander">切换-子组件按钮</button>
    </div>
</template>
<script>
export default {
        props:{ 
            foo:{
                type:Boolean
            }
        },
        methods:{
            sonHander(){
                // 注意单词不要写错了，update是跟家规定的，不能写成其他值。
                // ishow表示你跟新哪一个值，
                // 将ishow的是跟新为false
                this.$emit('update:foo',!this.foo)
            }
        }

};
</script>

<style  scoped>
</style>
