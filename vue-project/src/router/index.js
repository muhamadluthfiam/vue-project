import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // component: HomeView
      component: () => import('../views/Home/HomeView.vue')
    },
    {
      path: '/comments',
      name: 'comments',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Comments/CommentsView.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('../views/Account/AccountView.vue')
    }
  ]
})

export default router
