import Vue from 'vue'
import VueRouter from 'vue-router'
import Signin from '../views/Signin.vue'
import Signup from '../views/Signup.vue'
import Dashboard from '../views/Dashboard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/sign-in'
  },
  {
    path: '/sign-in',
    name: 'Sign in',
    component: Signin
  },
  {
    path: '/sign-up',
    name: 'Sign up',
    component: Signup
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      guarded: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
