import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/Home.vue';
import LegalNotice from './views/LegalNotice.vue';
import Confidentiality from './views/Confidentiality.vue';
import CV from './views/Appfile/CV.vue';
import Letter from './views/Appfile/Letter.vue';
import Interview from './views/Appfile/Interview.vue';
import { BvComponent } from 'bootstrap-vue';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
 {
   path:'/mentions-legales',
   name:'mentions-legales',
   component: LegalNotice
 },
 {
  path:'/confidentialite',
  name:'confidentialite',
  component: Confidentiality
},
{
  path:'/CV',
  name:'CV',
  component: CV
},
{
  path:'/LettreMotivation',
  name:'Lettre',
  component: Letter
},
{
  path:'/Entretien',
  name:'Entretien',
  component: Interview
}
]

const router = new VueRouter({
  routes
})

export default router
