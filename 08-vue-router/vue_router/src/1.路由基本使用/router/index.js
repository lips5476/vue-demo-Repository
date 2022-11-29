import Home from '../page/Home.vue'
import Index from '../page/Index.vue'
import User from '../page/User.vue'
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'  //重定向
  },
  {
    path: '/home',
    component: Home,
    name: 'home',    //name属性独一无二
    meta: {          //自定义属性
      name: 'leo',
      age: 18
    }
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/lazy',
    component: () => {
      // 这段注释用于分包重命名webpackChunkName
      return import(/*webpackChunkName: "lazy-chunk" */'./../page/lazy-component.vue')
    }
  },
]


const router = createRouter({
  routes,
  history: createWebHistory()
})


export default router
