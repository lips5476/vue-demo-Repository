// 写法一
export default {
  install(app) {
    console.log(app)
    // 全局的属性上面挂载了一个name为leo的属性
    app.config.globalProperties.$name = 'leo'
  }
}

// 写法二
// export default function(app){
//   console.log(app)
//   app.directive()
//   app.mixin()
//   app.component()
//   app.config.globalProperties.$name = 'leo'
// }

//  这样的话可以在
// <script>
// export default {
//   data(){},
//   mounted(){
//     console.log(this.$name)    //$name  的$  是一个全局命名的规范  代表这个属性是全局上的
//   }
// };
// </script>


