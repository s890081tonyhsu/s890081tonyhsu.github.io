import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import About from '../views/AboutPage.vue'

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
    component: () => import(/* webpackChunkName: "about" */ '../views/PortfolioPage.vue')
  },
  {
    path: '/resume',
    name: 'Resume',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ResumePage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(() => {
  window.scrollTo(0, 0)
})

export default router
