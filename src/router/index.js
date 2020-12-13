import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    name: 'notFound',
    path: '*',
    redirect: { name: 'Home' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/nem-authn-sp/',
  routes
})

export default router
