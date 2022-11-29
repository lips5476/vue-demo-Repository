import Home from '../page/Home.vue'
import Index from '../page/Index.vue'
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/index',
    component: Index
  },
]


const router = createRouter({
  routes,
  history: createWebHistory()
})


export default router
