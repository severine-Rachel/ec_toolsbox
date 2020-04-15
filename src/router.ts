import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/Home.vue';
import LegalNotice from './views/LegalNotice.vue';
import Confidentiality from './views/Confidentiality.vue';
import CV from './views/Appfile/CV.vue';
import Letter from './views/Appfile/Letter.vue';
import Interview from './views/Appfile/Interview.vue';
import Def from './views/OWcom/Def.vue';
import Pro from './views/OWcom/Pro.vue';
import Speech from './views/OWcom/Speech.vue';
import Meeting from './views/OWcom/Meeting.vue';
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
},
{
  path:'/Definition_Communication',
  name:'Definition',
  component: Def
},
{
  path:'/Ecrit_Pro',
  name:'Ecrit_Pro',
  component: Pro
},
{
  path:'/Prise_de_Parole',
  name:'Prise_de_Parole',
  component: Speech
},
{
  path:'/Conduite_Reunion',
  name:'Conduite_Reunion',
  component: Meeting
},
]

const router = new VueRouter({
  routes
})

export default router
