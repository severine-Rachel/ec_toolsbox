import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/Home.vue';
import LegalNotice from './views/LegalNotice.vue';
import Confidentiality from './views/Confidentiality.vue';
import CV from './views/Appfile/CV.vue';
import Letter from './views/Appfile/Letter.vue';
import Interview from './views/Appfile/Interview.vue';
import Def from './views/OWcom/Def.vue';
import DefShare from './views/OWcom/DefShare.vue';
import DefType from './views/OWcom/DefType.vue';
import DefContex from './views/OWcom/DefContex.vue';
import Pro from './views/OWcom/Pro.vue';
import ProFundamental from './views/OWcom/ProFundamental.vue';
import ProStrategy from './views/OWcom/ProStrategy.vue';
import ProSpelling from './views/OWcom/ProSpelling.vue';
import ProExample from './views/OWcom/ProExample.vue';
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
  path:'/Definition_Communication/Partager',
  name:'Partager',
  component: DefShare
},
{
  path:'/Definition_Communication/Types_Communication',
  name:'Types_Communication',
  component: DefType
},
{
  path:'/Definition_Communication/Situation_Communication',
  name:'Situation_Communication',
  component: DefContex
},
{
  path:'/Ecrit_Pro',
  name:'Ecrit_Pro',
  component: Pro
},
{
  path:'/Ecrit_Pro/Fondamentaux',
  name:'Ecrit/fondamentaux',
  component: ProFundamental
},
{
  path:'/Ecrit_Pro/Strategie',
  name:'Ecrit/strategie',
  component: ProStrategy
},
{
  path:'/Ecrit_Pro/Orthographe',
  name:'Orthographe',
  component: ProSpelling
},
{
  path:'/Ecrit_Pro/Exemples',
  name:'Ecrit/exemples',
  component: ProExample
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
