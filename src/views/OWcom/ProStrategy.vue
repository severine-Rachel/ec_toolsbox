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

    <p>
      <strong>
        Les écrits longs
      </strong>
    </p>
    <Pdf v-bind:galery-pdf="pdfInternship"></Pdf>
    <Pdf v-bind:galery-pdf="pdfTechnic"></Pdf>
    <Footer></Footer>
  </div>
</template>

<style lang="scss"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Pdf from "@/components/Pdf.vue";
import Footer from "@/components/Footer.vue";
import { BIcon, BIconBoxArrowRight } from "bootstrap-vue";
@Component({
  components: {
    Header,
    Menu,
    Pdf,
    BIcon,
    BIconBoxArrowRight,
    Footer,
  },
})
export default class ProStrategy extends Vue {
  public pdfStratShort = [
    {
      pdfLink: "/pdf_cv/fundamentals_CV_Keys.pdf",
      pdfDownload: "LettreProdessionnelle",
      TxtPdf: "La lettre professionnelle",
    },
    {
      pdfLink: "/pdf_cv/fundamentals_CV_Keys.pdf",
      pdfDownload: "NoteSynthese",
      TxtPdf: "La note de synthèse",
    },
    {
      pdfLink: "/pdf_cv/fundamentals_CV_Keys.pdf",
      pdfDownload: "Resume",
      TxtPdf: "Le résumé",
    },
    {
      pdfLink: "/pdf_cv/fundamentals_CV_Keys.pdf",
      pdfDownload: "Essai",
      TxtPdf: "L'essai",
    },
    {
      pdfLink: "/pdf_cv/fundamentals_CV_Keys.pdf",
      pdfDownload: "CompteRenduCritique",
      TxtPdf: "Le compte rendu critique",
    },
    {
      pdfLink: "/pdf_cv/fundamentals_CV_Keys.pdf",
      pdfDownload: "ArgumentaireProjet",
      TxtPdf: "L'argumentaire de projet",
    },
    {
      pdfLink: "/pdf_cv/fundamentals_CV_Keys.pdf",
      pdfDownload: "DissertationCritique",
      TxtPdf: "La dissertation critique",
    },
  ];
  public pdfInternship = [
    {
      pdfLink: "/pdf_cv/fundamentals_CV_Keys.pdf",
      pdfDownload: "RapportStage",
      TxtPdf: "La rapport de stage",
    },
  ];
  public pdfTechnic = [
    {
      pdfLink: "/pdf_cv/fundamentals_CV_Keys.pdf",
      pdfDownload: "LettreProdessionnelle",
      TxtPdf: "Le document technique",
    },
  ];
}
</script>
