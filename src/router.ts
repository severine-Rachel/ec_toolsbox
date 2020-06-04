import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/Home.vue';
import LegalNotice from './views/LegalNotice.vue';
import Confidentiality from './views/Confidentiality.vue';
import CV from './views/Appfile/CV.vue';
import CVKeys from './views/Appfile/CVKeys.vue';
import CVTips from './views/Appfile/CVTips.vue';
import CVExample from './views/Appfile/CVExample.vue';
import CVTools from './views/Appfile/CVTools.vue';
import CVVideo from './views/Appfile/CVVideo.vue';
import CVGoFurther from './views/Appfile/CVGoFurther.vue';
import Letter from './views/Appfile/Letter.vue';
import LetterKeys  from './views/Appfile/LetterKeys.vue';
import LetterTips from './views/Appfile/LetterTips.vue';
import LetterAnalysis from './views/Appfile/LetterAnalysis.vue';
import LetterArguments from './views/Appfile/LetterArguments.vue';
import Interview from './views/Appfile/Interview.vue';
import InterviewKeys from './views/Appfile/InterviewKeys.vue';
import InterviewTips from './views/Appfile/InterviewTips.vue';
import InterviewGoFurther from './views/Appfile/InterviewGoFurther.vue';
import Def from './views/OWcom/Def.vue';
import DefShare from './views/OWcom/DefShare.vue';
import DefType from './views/OWcom/DefType.vue';
import DefContex from './views/OWcom/DefContex.vue';
import DefStrategy from './views/OWcom/DefStrategy.vue';
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
import Poster from './views/VisuCom/Poster.vue';
import PosterFundamental from './views/VisuCom/PosterFundamental.vue';
import PosterTips from './views/VisuCom/PosterTips.vue';
import PosterInPractise from './views/VisuCom/PosterInPractise.vue';
import PosterInspiration from './views/VisuCom/PosterInspiration.vue';
import Projection from './views/VisuCom/Projection.vue';
import ProjectionFundamental from './views/VisuCom/ProjectionFundamental.vue';
import ProjectionTips from './views/VisuCom/ProjectionTips.vue';
import ProjectionInPractise from './views/VisuCom/ProjectionInPractise.vue';
import Infography from './views/VisuCom/Infography.vue';
import InfographyFundamental from './views/VisuCom/InfographyFundamental.vue';
import InfographyTips from './views/VisuCom/InfographyTips.vue';
import InfographyInPractise from './views/VisuCom/InfographyInPractise.vue';
import AudioVisual from './views/VisuCom/AudioVisual.vue';
import AudioVisualFundamental from './views/VisuCom/AudioVisualFundamental.vue';
import AudioVisualTips from './views/VisuCom/AudioVisualTips.vue';
import GeneralCulture from './views/Art/GeneralCulture.vue';
import ArtPerf from './views/Art/ArtPerf.vue';
import ArtPerfDef from './views/Art/ArtPerfDef.vue';
import ArtPerfOrigin from './views/Art/ArtPerfOrigin.vue';
import ArtPerfBibliogr from './views/Art/ArtPerfBibliogr.vue';
import ArtPerfStudents from './views/Art/ArtPerfStudents.vue';
import ArtPerfCorp from './views/Art/ArtPerfCorp.vue';
import ReadPleasure from './views/Art/ReadPleasure.vue';
import ReadLink from './views/Art/ReadLink.vue';
import ReadClassic from './views/Art/ReadClassic.vue';
import ReadAssay from './views/Art/ReadAssay.vue';
import ReadIslander from './views/Art/ReadIslander.vue';
import ReadComic from './views/Art/ReadComic.vue';
import ReadHardened from './views/Art/ReadHardened.vue';
import OnlineCulture from './views/Art/OnlineCulture.vue';
import OnlineCultureArt from './views/Art/OnlineCultureArt.vue';
import OnlineCultureCinema from './views/Art/OnlineCultureCinema.vue';
import OnlineCultureMusic from './views/Art/OnlineCultureMusic.vue';
import OnlineCultureHistory from './views/Art/OnlineCultureHistory.vue';
import OnlineCultureSciences from './views/Art/OnlineCultureSciences.vue';
import OnlineCultureGeneral from './views/Art/OnlineCultureGeneral.vue';
import OnlineCultureMedia from './views/Art/OnlineCultureMedia.vue';
import WhoAmI from './views/Intro/WhoAmI.vue';
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
  path: '/CV/Fondamentaux',
  name:'CV_Fondamentaux',
  component: CVKeys
},
{
  path: '/CV/Astuces',
  name:'CV_Astuces',
  component: CVTips
},
{
  path: '/CV/Exemples',
  name:'CV_Exemples',
  component: CVExample
},
{
  path: '/CV/Outils',
  name:'CV_Outils',
  component: CVTools
},
{
  path: '/CV/CV_Video',
  name:'CVVideo',
  component: CVVideo
},
{
  path: '/CV/Aller_Plus_Loin',
  name:'CV_AllerPlusLoin',
  component: CVGoFurther
},
{
  path:'/Lettre_de_Motivation',
  name:'Lettre',
  component: Letter
},
{
  path:'/Lettre_de_Motivation/Fondamentaux',
  name:'Lettre_Fondamentaux',
  component: LetterKeys
},
{
  path:'/Lettre_de_Motivation/Astuces',
  name:'Lettre_Astuces',
  component: LetterTips
},
{
  path:'/Lettre_de_Motivation/Analyse',
  name:'Lettre_Analyse',
  component: LetterAnalysis
},
{
  path:'/Lettre_de_Motivation/Arguments',
  name:'Lettre_Arguments',
  component: LetterArguments
},
{
  path:'/Entretien',
  name:'Entretien',
  component: Interview
},
{
  path:'/Entretien/Fondamentaux',
  name:'Entretien_Fondamentaux',
  component: InterviewKeys
},
{
  path:'/Entretien/Astuces',
  name:'Entretien_Astuces',
  component: InterviewTips
},
{
  path:'/Entretien/Aller_Plus_Loin',
  name:'Entretien_AllerPlusLoin',
  component: InterviewGoFurther
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
  path:'/Definition_Communication/Strategie_Communication',
  name:'Strategy_Communication',
  component: DefStrategy
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
{
  path:'/Affiche',
  name: 'Affiche',
  component: Poster
},
{
  path:'/Affiche/Fondamentaux',
  name: 'Affiche_Fondamentaux',
  component: PosterFundamental
},
{
  path:'/Affiche/Astuces',
  name: 'Affiche_Astuces',
  component: PosterTips
},
{
  path:'/Affiche/EnPratique',
  name: 'Affiche_EnPratique',
  component: PosterInPractise
},
{
  path:'/Affiche/Trouver_lInspiration',
  name: 'Affiche_Inspiration',
  component: PosterInspiration
},
{
  path:'/Diaporama',
  name: 'Diaporama',
  component: Projection
},
{
  path:'/Diaporama/Fondamentaux',
  name: 'Diaporama_Fondamentaux',
  component: ProjectionFundamental
},
{
  path:'/Diaporama/Astuces',
  name: 'Diaporama_Astuces',
  component: ProjectionTips
},
{
  path:'/Diaporama/EnPratique',
  name: 'Diaporama_EnPratique',
  component: ProjectionInPractise
},
{
  path:'/Infographie',
  name: 'Infographie',
  component: Infography
},
{
  path:'/Infographie/Fondamentaux',
  name: 'Infographie_Fondamentaux',
  component: InfographyFundamental
},
{
  path:'/Infographie/Astuces',
  name: 'Infographie_Astuces',
  component: InfographyTips
},
{
  path:'/Infographie/EnPratique',
  name: 'Infographie_EnPratique',
  component: InfographyInPractise
},
{
  path:'/Audiovisuel',
  name: 'Audiovisuel',
  component: AudioVisual
},
{
  path:'/Audiovisuel/Fondamentaux',
  name: 'Audiovisuel_Fondamentaux',
  component: AudioVisualFundamental
},
{
  path:'/Audiovisuel/Astuces',
  name: 'Audiovisuel_Astuces',
  component: AudioVisualTips
},
{
  path:'/CultureGenerale',
  name: 'CultureGeneral',
  component: GeneralCulture
},
{
  path: '/PerformanceArtistique',
  name:'PerformanceArtistique',
  component: ArtPerf
},
{
  path: '/PerformanceArtistique/Definition',
  name: 'PerformanceArtistique_Definition',
  component: ArtPerfDef
},
{
  path: '/PerformanceArtistique/Origines',
  name: 'PerformanceArtistique_Origines',
  component: ArtPerfOrigin
},
{
  path: '/PerformanceArtistique/Bibliographie',
  name: 'PerformanceArtistique_Bibliographie',
  component: ArtPerfBibliogr
},
{
  path: '/PerformanceArtistique/ExemplesEtudiants',
  name: 'PerformanceArtistique_ExemplesEtudiants',
  component: ArtPerfStudents
},
{
  path: '/PerformanceArtistique/CorpusdeTexte',
  name: 'PerformanceArtistique_CorpusdeTexte',
  component: ArtPerfCorp
},
{
  path: '/PlaisirdeLire',
  name: 'PlaisirdeLire',
  component: ReadPleasure
},
{
  path: '/PlaisirdeLire/RenouerAvecLaLecture',
  name: 'PlaisirdeLire_RenouerAvecLaLecture',
  component: ReadLink
},
{
  path: '/PlaisirdeLire/LesClassiques',
  name: 'PlaisirdeLire_LesClassiques',
  component: ReadClassic
},
{
  path: '/PlaisirdeLire/LesEssaisEtTemoignages',
  name: 'PlaisirdeLire_LesEssaisEtTemoignages',
  component: ReadAssay
},
{
  path: '/PlaisirdeLire/LectureInsulaire',
  name: 'PlaisirdeLire_LectureInsulaire',
  component: ReadIslander
},
{
  path: '/PlaisirdeLire/BandesDessinees',
  name: 'PlaisirdeLire_BandesDessinees',
  component: ReadComic
},
{
  path: '/PlaisirdeLire/PourLesAguerris',
  name: 'PlaisirdeLire_PourLesAguerris',
  component: ReadHardened
},
{
  path: '/CultureenLigne',
  name: 'CultureenLigne',
  component: OnlineCulture
},
{
  path: '/CultureenLigne/Art',
  name: 'CultureenLigne_Art',
  component: OnlineCultureArt
},
{
  path: '/CultureenLigne/Cinema',
  name: 'CultureenLigne_Cinema',
  component: OnlineCultureCinema
},
{
  path: '/CultureenLigne/Musique',
  name: 'CultureenLigne_Musique',
  component: OnlineCultureMusic
},
{
  path: '/CultureenLigne/Histoire',
  name: 'CultureenLigne_Histoire',
  component: OnlineCultureHistory
},
{
  path: '/CultureenLigne/Sciences',
  name: 'CultureenLigne_Sciences',
  component: OnlineCultureSciences
},
{
  path: '/CultureenLigne/CultureGenerale',
  name: 'CultureenLigne_CultureGenerale',
  component: OnlineCultureGeneral
},
{
  path: '/CultureenLigne/MediaPresse',
  name: 'CultureenLigne_MediaPresse',
  component: OnlineCultureMedia
},
{
  path: '/QuiSuisJe',
  name: 'QuiSuisJe',
  component: WhoAmI
},
]

const router = new VueRouter({
  routes,
  scrollBehavior:  (to, from, savedposition) => {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    else {
    return {x:0, y:0}
    }
  }
})

export default router
