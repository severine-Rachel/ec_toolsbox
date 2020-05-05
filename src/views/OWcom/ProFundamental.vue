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
    />
    <p>
      <i>Source</i> : Mireille Brahic, <i>Mieux rédiger vos écrits professionnels</i>,
      Éditions d’Organisation, 2004.
    </p>
    <p>
      Fiche conseil rédaction
    </p>
    
    <p>
      <i>Source :</i>
      http://fr.copian.ca/biblio/apprenti/rhdcc/competences_essentielles/conseils_redaction/conseils_redaction.pdf
    </p>
    <p>
      <strong>Pour structurer votre texte, recourez à la carte mentale</strong>
    </p>
    <p>
      Conseils pour améliorer vos compétences rédactionnelles
    </p>
    <Video v-bind:galery-video="videoTipsPro"></Video>
    <p id="form"></p>
    <h4>La forme</h4>

    <h5 id="h5-title">Le modèle de la lettre professionnelle</h5>

    <span
      ><img
        class="vertical"
        src="/picture_Letter/fundamentals_Letter_Modal.png"
        alt="Model_Lettre"/>
      <img
        src="/picture_Letter/fundamentals_Letter_Modal2.png"
         class="vertical"
        alt="Model_Lettre"
    /></span>
    <h5 id="h5-title">Le modèle du rapport</h5>
     <p>
    <h7>Dossier page de garde 1</h7>
    </p>
    <p>
      Cette page de garde est trop sobre et les différents niveaux de lecture
      non respectés.
    </p>
    <img
      src="/picture_OWcom/Pro/Cover_Page1.png"
      class="vertical"
      alt="Page_De_Garde1"
    />
     <p>
    <h7>Dossier page de garde 2</h7>
    </p>
    <p>
      Cette page de garde est bien plus attractive. Elle témoigne du soin
      accordé à l’ensemble du dossier.
    </p>
<img
      src="/picture_OWcom/Pro/Cover_Page2.png"
       class="vertical"
      alt="Page_De_Garde2"
    />
 <p>
    <h7>Dossier Sommaire 1</h7>
    </p>
    <img
      src="/picture_OWcom/Pro/Summary1.png"
       class="vertical"
      alt="Dossier_Sommaire1"
    />
    <p>
    <h7>Dossier Sommaire 2</h7>
    </p>
    
    <img
      src="/picture_OWcom/Pro/Summary2.png"
       class="vertical"
      alt="Dossier_Sommaire2"
    />
     <p>
    <h7>Dossier Sommaire 3</h7>
     </p>
    <img
      src="/picture_OWcom/Pro/Summary3.png"
       class="vertical"
      alt="Dossier_Sommaire3"
    />
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
  #h5-title{
    color: #2e367f;
  }
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Video from "@/components/Video.vue";
import Pdf from "@/components/Pdf.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
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
      videoRoot: "Chaîne :  Lucie Rondelet",
    },
    {
      videoSrc: "https://www.youtube.com/embed/vFWoWZFDKB8",
      videoTitle: "Mad mapping : les 3 types de cartes mentales",
      videoRoot: "Chaîne :   Cyril Maitre",
    },
  ];
}
</script>
