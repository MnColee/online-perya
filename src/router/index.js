import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import TermsAndCondition from '../views/TermsAndCondition.vue'
import VerifySuccess from '../views/VerifySuccess.vue'
import VerifyView from '../views/VerifyView.vue'
import ResetPassword from '../views/ResetPassword.vue'

import HomeUser from '../pages/HomeUser.vue'

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
    {
      path: '/termsandcondition',
      name: 'TermsAndCondition',
      component: TermsAndCondition
    },
    {
      path: '/verifysuccess',
      name: 'VerifySuccess',
      component: VerifySuccess,
      meta: {
        hideNavbar: true,
      }
    },
    {
      path: '/verifyemail',
      name: 'VerifyYourEmail',
      component: VerifyView,
      meta: {
        hideNavbar: true,
      }
    },
    {
      path: '/resetpassword',
      name: 'ResetPassword',
      component: ResetPassword,
      meta: {
        hideNavbar: true,
      }
    },
    {
      path: '/homes',
      name: 'HomeUser',
      component: HomeUser,
      meta: {
        hideNavbar: true,
      }
    },
  ]
})

export default router
