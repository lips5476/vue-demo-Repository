import User from '../page/User.vue'
import notFound from '../page/404.vue'
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/user/:name',   //动态路由
    component: User
  },
  {
    path: '/pathMatch(.*)',   //没匹配到上述所有路径
    component: notFound
  },
]


const router = createRouter({
  routes,
  history: createWebHistory()
})


export default router
