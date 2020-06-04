<template>
  <div id="ProFundamental">
    <Header></Header>
    <Menu></Menu>
    <h3>LES FONDAMENTAUX DE L'ÉCRIT</h3>
    <p>
      Aujourd’hui, avec l’essor du numérique, chacun d’entre nous est amené à
      rédiger. Que ce soit dans un cadre privé (SMS, e-mails, etc.), dans un
      cadre académique (dissertations, essais, rapports, etc.) ou dans un cadre
      professionnel (compte rendu, dossier technique, lettre de motivation,
      etc.), l’écrit fait partie intégrante de notre environnement quotidien.
      Pascal disait «{{'\xa0'}}Savoir bien écrire, c’est savoir bien penser{{'\xa0'}}» et, encore
      aujourd’hui, savoir bien rédiger est perçu comme une aptitude essentielle,
      notamment dans le milieu professionnel. Bien rédiger, c’est prendre en
      compte son destinataire (réfléchir à ses attentes, à ses besoins, lui
      parler avec ses mots, etc.), lui faciliter le tri de l’information
      (concision, objet, titre, etc.) ou encore respecter les normes en vigueur
      (présentation et mise en page, respect de la langue française, etc.). Vous
      trouverez ici des éléments pour vous aider à améliorer vos compétences
      rédactionnelles.
    </p>
    <p>
      <strong>
        L'écrit réussi, c'est :
      </strong>
    </p>
    <img
      class="square"
      src="/picture_OWcom/schematic/schema_goal_writter.png"
      alt="Pourquoi écrit-on"
      draggable="false"
    />
    <p><i>Source</i> :  Bettina SOULEZ, Marie-Agnès GIRAUDY, <i>Écrire vite et bien en affaires : La référence de l'écrit professionnel</i>, Chiron, 2014, p.138.</p>
    <p>
      <strong>
      Pour tout écrit, il faut adopter une démarche par objectif 
      </strong>
    </p>
    <img
      class="square"
      src="/picture_OWcom/schematic/schema_pro.jpg"
      alt="structuration-discours"
      draggable="false"
    />
    <p >
      <i>Source</i>{{'\xa0'}}: Bettina SOULEZ, Marie-Agnès GIRAUDY, <i>Écrire vite et bien en affaires : La référence de l'écrit professionnel</i>, Chiron, 2014, p.138.
    </p>
    <a class="subtitle-link" href="http://fr.copian.ca/biblio/apprenti/rhdcc/competences_essentielles/conseils_redaction/conseils_redaction.pdf" target=_blank>
      <strong>Fiche conseil rédaction <b-icon icon="box-arrow-right"></b-icon></strong>
    </a>
    
    <p class="none-margin-top">
      <i>Source{{'\xa0'}}:</i>
      http://fr.copian.ca/biblio/apprenti/rhdcc/competences_essentielles/conseils_redaction/conseils_redaction.pdf
    </p>
    <p>
      <strong>Pour structurer votre texte, recourez à la carte mentale</strong>
    </p>
   
    <Video v-bind:galery-video="videoTipsPro"  v-bind:id-video="'pro1'"></Video>
    <p id="form"></p>
    <h4>La forme</h4>

    <h5 id="h5-title">Le modèle de la lettre professionnelle</h5>
    <p>Les marqueurs bleus vous apporteront des conseils sur la structuration de votre lettre et les marqueurs jaunes sur sa mise en page.  </p>
    <FundamentalLetter></FundamentalLetter>
    <h5 id="h5-title">Le modèle du rapport</h5>

    <h7>Dossier page de garde 1</h7>
   
    <p>
      Cette page de garde est trop sobre et les différents niveaux de lecture
      non respectés.
    </p>
    <FundamentalCoverPage1></FundamentalCoverPage1>
    <p></p>
    <h7>Dossier page de garde 2</h7>
   
    <p>
      Cette page de garde est bien plus attractive. Elle témoigne du soin
      accordé à l’ensemble du dossier.
    </p>
    <b-row>
  <FundamentalCoverPage2></FundamentalCoverPage2>
    </b-row>

    <h7>Dossier Sommaire 1</h7>

    <Summary1></Summary1>
    
    <h7>Dossier Sommaire 2</h7>
   
      <Summary2></Summary2>
  
    <h7>Dossier Sommaire 3</h7>

    <Summary3></Summary3>
    <NextPrevBtn v-bind:nxtprev-list="nxtprevProFundamental"></NextPrevBtn>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
  #h5-title{
    color: #2e367f;
  }
  #ProFundamental {
  scroll-behavior: smooth;
  overflow: auto;
  height: 100vh;
}
  .interractive{
    width: 596px;
    height: 781px;
    margin: 50px 0px 50px 200px;
    box-shadow: 1px 1px 10px;
  }
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import {BIcon, BIconBoxArrowRight} from "bootstrap-vue";
import FundamentalLetter from "@/views/OWcom/ProFundamental/FundamentalLetter.vue"
import FundamentalCoverPage1 from "@/views/OWcom/ProFundamental/FundamentalCoverPage1.vue"
import FundamentalCoverPage2 from "@/views/OWcom/ProFundamental/FundamentalCoverPage2.vue"
import Summary1 from "@/views/OWcom/ProFundamental/Summary1.vue"
import Summary2 from "@/views/OWcom/ProFundamental/Summary2.vue"
import Summary3 from "@/views/OWcom/ProFundamental/Summary3.vue"
import Video from "@/components/Video.vue";
import Pdf from "@/components/Pdf.vue";
import NextPrevBtn from "@/components/NextPrevBtn.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    BIcon,
    BIconBoxArrowRight,
    FundamentalLetter,
    FundamentalCoverPage1,
    FundamentalCoverPage2,
    Summary1,
    Summary2,
    Summary3,
    Pdf,
    Video,
    NextPrevBtn,
    Footer,
  },
})
export default class ProFundamental extends Vue {
  public pdfPro = [
    {
      pdfLink: "/pdf_OWcom/betterWritePro.pdf",
      pdfDownload: "Fiche conseil rédaction",
      TxtPdf: "Fiche conseil rédaction",
    },
  ];
  public videoTipsPro = [
    {
      videoSrc: "https://www.youtube.com/embed/B5LUC22dmdg",
      videoTitle: "Conseils pour améliorer vos compétences rédactionnelles",
      videoRoot: "Chaîne :  Lucie Rondelet",
    },
    {
      videoSrc: "https://www.youtube.com/embed/vFWoWZFDKB8",
      videoTitle: "Mad mapping : les 3 types de cartes mentales",
      videoRoot: "Chaîne :   Cyril Maitre",
    },
  ];
  public nxtprevProFundamental = {
    BoolPrev: false,
    BoolNext:  true,
    PrevImage: "",
    NextImage: "/thumbnail3.png",
    PrevLink: "",
    NextLink: "/Ecrit_Pro/Strategie",
  };
}
</script>
