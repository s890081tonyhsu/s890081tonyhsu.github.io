import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import About from '../views/AboutPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/collection/:uid?',
    name: 'CollectionArticle',
    component: () => import('../views/CollectionPage.vue'),
    props: true
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import('../views/ResumePage.vue')
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
