import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
// import SignInView from '../views/SignInView.vue'
// import SignUpView from '../views/SignUpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'AboutView',
      component: AboutView
    },
    // {
    //   path: '/signin',
    //   name: 'SignInView',
    //   component: SignInView
    // },
    // {
    //   path: '/signup',
    //   name: 'SignUpView',
    //   component: SignUpView
    // }
  ]
})

export default router
