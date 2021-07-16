import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/views/index.vue')
  },
  {
    path: '/scss',
    name: 'Scss',
    component: () => import('@/views/scss-demo/index.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router