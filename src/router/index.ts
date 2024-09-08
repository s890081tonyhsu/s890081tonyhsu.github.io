import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import About from '../pages/About.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/collection/:uid?',
    name: 'CollectionArticle',
    component: () => import('../pages/Collection.vue'),
    props: true
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import('../pages/Resume.vue')
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
