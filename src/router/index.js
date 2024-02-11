import { createRouter, createWebHistory } from 'vue-router'
import LoginComponent from '../components/LoginComponent.vue'
import SignupComponent from '@/components/SignupComponent.vue'
import HomeView from '@/components/HomeView.vue'


const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupComponent
  },
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
]

console.log(routes)
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
