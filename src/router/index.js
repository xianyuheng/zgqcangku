import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  {
    path:'/',
    component:()=>import('../views/WoHome.vue'),
    children:[
      {
        path:'',
        component:()=>import('../views/WoName.vue')
      }
    ]
  }
  ]
})

export default router
