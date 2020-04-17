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
import SpeechDare from './views/OWcom/SpeechDare.vue';
import SpeechSetting from './views/OWcom/SpeechSetting.vue';
import SpeechTips from './views/OWcom/SpeechTips.vue';
import Meeting from './views/OWcom/Meeting.vue';
import MeetingFundamental from './views/OWcom/MeetingFundamental.vue';
import MeetingTips from './views/OWcom/MeetingTips.vue';
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
  path:'/Prise_de_Parole/Oser_Parler',
  name:'Oser_Parler',
  component: SpeechDare
},
{
  path:'/Prise_de_Parole/Parametre_Parole',
  name:'Parametre_Parole',
  component: SpeechSetting
},
{
  path:'/Prise_de_Parole/Astuces',
  name:'Parole_Astuces',
  component: SpeechTips
},
{
  path:'/Conduite_Reunion',
  name:'Conduite_Reunion',
  component: Meeting
},
{
  path:'/Conduite_Reunion/Fondamentaux',
  name:'Reunion_Fondamentaux',
  component: MeetingFundamental
},
{
  path:'/Conduite_Reunion/Astuces',
  name:'Reunion_Astuces',
  component: MeetingTips
},

]

const router = new VueRouter({
  routes
})

export default router
