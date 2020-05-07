<template>
  <div>
    <h3 id="keysLetter">
      LES FONDAMENTAUX : FICHES-CLÉS
    </h3>
    <p>
      « <i>Comment structurer ma lettre ? Comment faire ressortir mes arguments ? N'est ce pas un peu déjà vu ?</i> ». Ces fiches vous
      apporteront des clés, tant sur la forme que sur le fond, pour rédiger votre lettre de motivation.
    </p>
    <Pdf v-bind:galery-pdf="pdfLetter"></Pdf>

    <Galery v-bind:galery-picture="galeryLetterSheet"></Galery>
    <a
      class="subtitle-link"
      href="https://www.univ-angers.fr/fr/formations/insertion-professionnelle/ip-box/lettre-de-motivation.html"
      target="_blank"
    >
      <i>Source : </i>
      www.univ-angers.fr/fr/formations/insertion-professionnelle/ip-box
      <b-icon icon="box-arrow-right"></b-icon>
    </a>
    <h4>
      La mise en page de la lettre de motivation
    </h4>
    <p>
      La lettre doit respecter un équilibre global ; c’est la règle des 3 tiers. Les marqueurs bleus vous apporteront des conseils sur la structuration de votre lettre et les marqueurs jaunes sur sa mise en page. 
    </p>
    <FundamentalLetter></FundamentalLetter>
    <p>
      Pour vous aider à rédiger votre lettre, voici quelques clés et exemples types.
    </p>
    <p>
      <strong>Exemples d’accroches, d’argumentaires et de conclusions </strong>
      <a
        href="http://platine.univ-lorraine.fr/index.php?id=64s"
        alt="vennage"
        target="_blank"
        ><img
          class="Help_Builder"
          src="/picture_letter/fundamentals-u-platine.jpg"
        /><b-icon icon="box-arrow-right"></b-icon>
      </a>
    </p>
  </div>
</template>

<style lang="scss"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BIcon, BIconBoxArrowRight } from "bootstrap-vue";
import Pdf from "@/components/Pdf.vue";
import FundamentalLetter from "@/views/OWcom/ProFundamental/FundamentalLetter.vue"
import Galery from "@/components/Galery.vue";
@Component({
  components: {
    Pdf,
    Galery,
    BIcon,
    BIconBoxArrowRight,
    FundamentalLetter
  },
})
export default class CVKeys extends Vue {
  public galeryLetterSheet: string[] = [
    "/picture_letter/fundamentals_Letter_Keys.jpg",
    "/picture_letter/fundamentals_Letter_Grid.jpg",
    "/picture_letter/fundamentals_Letter_Spontaneous.jpg",

    "/picture_letter/fundamentals_Letter_Answer.jpg",
    "/picture_letter/fundamentals_Letter_Mistakes.jpg",
  ];
 

  public pdfLetter = [
    {
      pdfLink: "/pdf_letter/fundamentals_Letter_Keys.pdf",
      pdfDownload: "10PointsClésLettre",
      TxtPdf: "Fiche 1 : Les 10points clés ",
    },
    {
      pdfLink: "/pdf_letter/fundamentals_letter_Grid.pdf",
      pdfDownload: "GrilleAnalyseLettre",
      TxtPdf: "Fiche 2 : La grille d’analyse de votre lettre",
    },
    {
      pdfLink: "/pdf_letter/fundamentals_letter_Mistakes.pdf",
      pdfDownload: "ErreursLettre",
      TxtPdf: "Fiche 3 : Les erreurs à éviter",
    },
    {
      pdfLink: "/pdf_letter/fundamentals_letter_Spontaneous.pdf",
      pdfDownload: "lettreSpontanée",
      TxtPdf: "Fiche 4 : Trame lettre spontanée",
    },
    {
      pdfLink: "/pdf_letter/fundamentals_letter_Answer.pdf",
      pdfDownload: "LettreRéponseAnnonce",
      TxtPdf: "Fiche 5 : Trame réponse annonce",
    },
  ];
}
</script>
