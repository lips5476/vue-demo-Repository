import Home from '../page/Home.vue'
import Index from '../page/Index.vue'

import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: "home", //通过name动态的添加子路由
    component: Home,
  },
  {
    path: '/index',
    component: Index,
  }
]


const router = createRouter({
  routes,
  history: createWebHistory()
})




// 比如当前在Home 点击到Index  那Index就是to对象  Home是from对象
// to：Route对象 即将跳转到的路由对象
// to：Route对象 从哪个路由对象跳转的
// return false  停止跳转即不导航
// return undefined 或者不写则 默认导航
// return 路径字符串   那就跳转到对应的路由上去
// return 对象  类似于router.push({path:'./home',query:{name:"leo",age:18}})
router.beforeEach((to, from) => {
  // if (to.path === '/index') {
  //   if (to.params.isLogin === false) {
  //     return false
  //   }
  // }

  // if (to.path === '/index') {
  //   if (to.params.isLogin === false) {
  //     return './login'    上面要有对应的  {path:'/login', component:login}
  //   }
  // }

})


export default router
