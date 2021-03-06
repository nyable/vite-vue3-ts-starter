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
  {
    path: '/pinia',
    name: 'Pinia',
    component: () => import('@/views/pinia-demo/index.vue')
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('@/views/axios-demo/index.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router