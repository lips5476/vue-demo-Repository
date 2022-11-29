import Home from '../page/Home.vue'
import Index from '../page/Index.vue'
import desk from '../page/desk.vue'
import chair from '../page/chair.vue'
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/',
        redirect: '/home/desk'  //redirect必须是完整路径
      },
      {
        path: 'desk',
        component: desk,
      },
      {
        path: 'chair',
        component: chair,
      }
    ]
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


export default router
