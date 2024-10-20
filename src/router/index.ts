import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import PersonLearn from '@/components/PersonLearn.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/learn'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/learn',
    name:'Learn',
    component:PersonLearn
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
