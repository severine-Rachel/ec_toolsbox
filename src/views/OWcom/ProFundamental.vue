<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>LES FONDAMENTAUX</h3>
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
    <p>
      <i>Source</i>&nbsp;: Mireille Brahic, <i>Mieux rédiger vos écrits professionnels</i>,
      Éditions d’Organisation, 2004.
    </p>
    <p>
      Fiche conseil rédaction
    </p>
    
    <p>
      <i>Source&nbsp;:</i>
      http://fr.copian.ca/biblio/apprenti/rhdcc/competences_essentielles/conseils_redaction/conseils_redaction.pdf
    </p>
    <p>
      <strong>Pour structurer votre texte, recourez à la carte mentale</strong>
    </p>
   
    <Video v-bind:galery-video="videoTipsPro"></Video>
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
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
  #h5-title{
    color: #2e367f;
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
import FundamentalLetter from "@/views/OWcom/ProFundamental/FundamentalLetter.vue"
import FundamentalCoverPage1 from "@/views/OWcom/ProFundamental/FundamentalCoverPage1.vue"
import FundamentalCoverPage2 from "@/views/OWcom/ProFundamental/FundamentalCoverPage2.vue"
import Summary1 from "@/views/OWcom/ProFundamental/Summary1.vue"
import Summary2 from "@/views/OWcom/ProFundamental/Summary2.vue"
import Summary3 from "@/views/OWcom/ProFundamental/Summary3.vue"
import Video from "@/components/Video.vue";
import Pdf from "@/components/Pdf.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    FundamentalLetter,
    FundamentalCoverPage1,
    FundamentalCoverPage2,
    Summary1,
    Summary2,
    Summary3,
    Pdf,
    Video,
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
      videoRoot: "Chaîne&nbsp;:  Lucie Rondelet",
    },
    {
      videoSrc: "https://www.youtube.com/embed/vFWoWZFDKB8",
      videoTitle: "Mad mapping&nbsp;: les 3 types de cartes mentales",
      videoRoot: "Chaîne&nbsp;:   Cyril Maitre",
    },
  ];
}
</script>
