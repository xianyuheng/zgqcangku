import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  {
    path:'/',
    component:()=>import('../views/WoHome.vue')
  }
  ]
})

export default router
