import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import About from '../views/About.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Portfolio.vue')
  },
  {
    path: '/resume',
    name: 'Resume',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Resume.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
