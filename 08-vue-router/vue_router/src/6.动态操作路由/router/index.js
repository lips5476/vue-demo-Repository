import Home from '../page/Home.vue'
import Index from '../page/Index.vue'
import Add from '../page/Add.vue'
import Boy from '../page/Boy.vue'
import Girl from '../page/Girl.vue'
import People from '../page/People.vue'
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: "home", //通过name动态的添加子路由
    component: Home,
    children: [
      {
        path: 'boy',
        component: Boy
      },
      {
        path: 'girl',
        component: Girl
      },
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

const add = {
  path: '/add',
  component: Add,
}

router.addRoute(add)
router.addRoute('home', {
  path: "people",
  component: People,
})


// 删除路由的3种方式
// router.addRoute({ path: '/home', component: Index, name: 'home' })  //同名覆盖
// router.removeRoute('home')   //removeRoute删除name
// const removeHome = router.addRoute({ path: '/', component: 'xxx', name: 'xxx' })//removeRoute返回值

export default router
