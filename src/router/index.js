import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('views/home/Home.vue')
const Categroy = () => import('views/categroy/Categroy.vue')
const Cart = () => import('views/cart/Cart.vue')
const Profile = () => import('views/profile/Profile.vue')

const routes = [{
  path: '',
  redirect: '/home'
}, {
  path: '/home',
  component: Home
}, {
  path: '/categroy',
  component: Categroy
}, {
  path: '/cart',
  component: Cart
}, {
  path: '/profile',
  component: Profile
}]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
