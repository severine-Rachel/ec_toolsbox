import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/Home.vue';
import LegalNotice from './views/LegalNotice.vue';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
 {
   path:'/mention-legale',
   name:'mention-legale',
   component: LegalNotice
 }
]

const router = new VueRouter({
  routes
})

export default router
