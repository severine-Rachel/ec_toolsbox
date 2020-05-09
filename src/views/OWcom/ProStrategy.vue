<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>STRATÉGIES D'ÉCRITURE</h3>
    <h4>
      Les écrits courts
    </h4>
    <h5 class="subtitle-h5">
      L’e-mail professionnel
    </h5>
    <p>
      <a
        href="https://bien-ecrire.fr/rediger-e-mail-professionnel/"
        alt="bien-ecrire.fr"
        target="_blank"
        ><img
          class="Help_Builder"
          src="/picture_OWcom/good-write1.png"
        /><b-icon icon="box-arrow-right"></b-icon>
      </a>
      <a
        href="https://bien-ecrire.fr/quel-plan-decriture-pour-un-mail-efficace/"
        alt="bien-ecrire.fr"
        target="_blank"
        ><img
          class="Help_Builder"
          src="/picture_OWcom/good-write2.png"
        /><b-icon icon="box-arrow-right"></b-icon>
      </a>
      <a
        href="https://bien-ecrire.fr/pourquoi-pyramide-inversee-email/"
        alt="bien-ecrire.fr"
        target="_blank"
        ><img
          class="Help_Builder"
          src="/picture_OWcom/good-write3.png"
        /><b-icon icon="box-arrow-right"></b-icon>
      </a>
    </p>
    <h5 class="subtitle-h5">
      L'écriture de documents à télécharger
    </h5>
    <Pdf v-bind:galery-pdf="pdfStratShort"></Pdf>
    <p><i>source&nbsp;:</i> CCDMD</p>
    <Pdf v-bind:galery-pdf="pdfStratSynthesis"></Pdf>

      <a
      class="subtitle-link"
        href="http://hg.moitel.free.fr/lycee_hotellerie/ANNEXES-et-METHODO/methodo_simplifiee-rdiee-une-SYNTHESE.pdf"
        target="_blank"
        ><i>source&nbsp;:</i> http://hg.moitel.free.fr/
        <b-icon icon="box-arrow-right"></b-icon
      ></a>
    <p></p>
    <Pdf v-bind:galery-pdf="pdfStraAssay"></Pdf>
   
      <a
       class="subtitle-link"
        href=" https://www.agirenfrancais.com/wp-content/uploads/2016/10/%C3%A9crire-un-essai.pdf"
        target="_blank"
        ><i>source:</i> https://www.agirenfrancais.com/
        <b-icon icon="box-arrow-right"></b-icon
      ></a>
      <p></p>
      <h5 class="subtitle-h5">
      La copie de concours
    </h5>
    <Video v-bind:galery-video="videoStratShort"></Video>
    <h4>Les écrits longs</h4>
    <h5 class="subtitle-h5">
      L'écriture de documents à télécharger
    </h5>
    <Pdf v-bind:galery-pdf="pdfInternshipTech"></Pdf>
    <p><i>source&nbsp;:</i> CCDMD</p>
    <h5 class="subtitle-h5">
      Les conseils de rédaction d'un mémoire
    </h5>
    <Video v-bind:galery-video="videoStratmemory"></Video>
    <h5 class="subtitle-h5">
      Autres conseils de rédaction
    </h5>
    <Video v-bind:galery-video="videoStratother"></Video>
    <Footer></Footer>
  </div>
</template>

<style lang="scss"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Pdf from "@/components/Pdf.vue";
import Video from "@/components/Video.vue";
import Footer from "@/components/Footer.vue";
import { BIcon, BIconBoxArrowRight } from "bootstrap-vue";
@Component({
  components: {
    Header,
    Menu,
    Pdf,
    Video,
    BIcon,
    BIconBoxArrowRight,
    Footer,
  },
})
export default class ProStrategy extends Vue {
  public pdfStratShort = [
    {
      pdfLink: "/pdf_OWcom/Pro/ProLetter.pdf",
      pdfDownload: "LettreProdessionnelle",
      TxtPdf: "La lettre professionnelle",
    },

    {
      pdfLink: "/pdf_OWcom/Pro/ProResume.pdf",
      pdfDownload: "Resume",
      TxtPdf: "Le résumé",
    },

    {
      pdfLink: "/pdf_OWcom/Pro/ProReport.pdf",
      pdfDownload: "CompteRenduCritique",
      TxtPdf: "Le compte rendu critique",
    },
    {
      pdfLink: "/pdf_OWcom/Pro/ProArgument.pdf",
      pdfDownload: "ArgumentaireProjet",
      TxtPdf: "L'argumentaire de projet",
    },
    {
      pdfLink: "/pdf_OWcom/Pro/ProDissertation.pdf",
      pdfDownload: "DissertationCritique",
      TxtPdf: "La dissertation critique",
    },
  ];
  public pdfInternshipTech = [
    {
      pdfLink: "/pdf_OWcom/Pro/ProTrainee.pdf",
      pdfDownload: "RapportStage",
      TxtPdf: "La rapport de stage",
    },
    {
      pdfLink: "/pdf_OWcom/Pro/ProTechnic.pdf",
      pdfDownload: "DocumentTechnique",
      TxtPdf: "Le document technique",
    },
  ];

  public pdfStratSynthesis = [
    {
      pdfLink: "/pdf_OWcom/Pro/ProSynthesis.pdf",
      pdfDownload: "NoteSynthese",
      TxtPdf: "La note de synthèse",
    },
  ];
  public pdfStraAssay = [
    {
      pdfLink: "/pdf_OWcom/Pro/ProAssay.pdf",
      pdfDownload: "Essai",
      TxtPdf: "L'essai",
    },
  ];
  public videoStratShort = [
    {
      videoSrc: "https://www.youtube.com/embed/huU8hja6TXU",
      videoTitle: "La copie de concours (1re partie)",
      videoRoot: "Chaîne&nbsp;: E-Learning Physique",
    },
    {
      videoSrc: "https://www.youtube.com/embed/LMWJB8pvXks",
      videoTitle: "La copie de concours ? (2e partie - MP/PC/PSI)",
      videoRoot: "Chaîne&nbsp;: E-Learning Physique",
    },
  ];
  public videoStratmemory = [
  
    {
      videoSrc: "https://www.youtube.com/embed/rgb_BzrvW2g",
      videoTitle: "Rédiger un mémoire – méthodologie",
      videoRoot: "Chaîne&nbsp;: digiSchool",
    },
    {
      videoSrc: "https://www.youtube.com/embed/V4KN8c2GMIM",
      videoTitle: "Comment rédiger un mémoire ?",
      videoRoot: "Chaîne&nbsp;:  Scribbr - Relecture & Correction",
    },
    {
      videoSrc: "https://www.youtube.com/embed/R4fHq8LcDRM",
      videoTitle: "10 astuces pour bien rédiger votre mémoire",
      videoRoot: "Chaîne&nbsp;: SYMPA",
    },
   
  ];
  public videoStratother = [
    {
      videoSrc: "https://www.youtube.com/embed/wu4TXt31Dcc",
      videoTitle: "Comment réussir son rapport de stage en 5 points clés",
      videoRoot: "Chaîne&nbsp;: digiSchool",
    },
    
    {
      videoSrc: "https://www.youtube.com/embed/EO4HtMI02H8",
      videoTitle: "Comment rédiger pour le Web ?",
      videoRoot: "Chaîne&nbsp;: Lucie Rondelet",
    },
  ];
}
</script>
