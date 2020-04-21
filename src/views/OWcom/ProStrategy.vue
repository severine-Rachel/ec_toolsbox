<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>STRATÉGIES D'ÉCRITURE</h3>
    <p>
      <strong>
        Les écrits courts
      </strong>
    </p>
    <p>
      L’e-mail professionnel
    </p>
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
    <Pdf v-bind:galery-pdf="pdfStratShort"></Pdf>
    <p>source: CCDMD</p>
    <Pdf v-bind:galery-pdf="pdfStratSynthesis"></Pdf>
    <p>
      <a
        href="http://hg.moitel.free.fr/lycee_hotellerie/ANNEXES-et-METHODO/methodo_simplifiee-rdiee-une-SYNTHESE.pdf"
        target="_blank"
        >source: http://hg.moitel.free.fr/
        <b-icon icon="box-arrow-right"></b-icon
      ></a>
    </p>
    <Pdf v-bind:galery-pdf="pdfStratAssay"></Pdf>
    <p>
      <a
        href=" https://www.agirenfrancais.com/wp-content/uploads/2016/10/%C3%A9crire-un-essai.pdf"
        target="_blank"
        >source: https://www.agirenfrancais.com/
        <b-icon icon="box-arrow-right"></b-icon
      ></a>
    </p>
    <Video v-bind:galery-video="videoStratShort"></Video>
    <p>
      <strong>
        Les écrits longs
      </strong>
    </p>
    <Pdf v-bind:galery-pdf="pdfInternshipTech"></Pdf>
    <p>source: CCDMD</p>
    <Video v-bind:galery-video="videoStratLong"></Video>
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
      videoRoot: "Chaîne : E-Learning Physique",
    },
    {
      videoSrc: "https://www.youtube.com/embed/LMWJB8pvXks",
      videoTitle: "La copie de concours ? (2e partie - MP/PC/PSI)",
      videoRoot: "Chaîne : E-Learning Physique",
    },
  ];
   public videoStratLong = [
    {
      videoSrc: "https://www.youtube.com/embed/wu4TXt31Dcc",
      videoTitle: "Comment réussir son rapport de stage en 5 points clés",
      videoRoot: "Chaîne : digiSchool",
    },
    {
      videoSrc: "https://www.youtube.com/embed/rgb_BzrvW2g",
      videoTitle: "Rédiger un mémoire – méthodologie",
      videoRoot: "Chaîne : digiSchool",
    },
    {
      videoSrc: "https://www.youtube.com/embed/V4KN8c2GMIM",
      videoTitle: "Comment rédiger un mémoire ?",
      videoRoot: "Chaîne :  Scribbr - Relecture & Correction",
    },
    {
      videoSrc: "https://www.youtube.com/embed/R4fHq8LcDRM",
      videoTitle: "10 astuces pour bien rédiger votre mémoire",
      videoRoot: "Chaîne : SYMPA",
    },
    {
      videoSrc: "https://www.youtube.com/embed/EO4HtMI02H8",
      videoTitle: "Comment rédiger pour le Web ?",
      videoRoot: "Chaîne : Lucie Rondelet",
    },
  ];
}
</script>
