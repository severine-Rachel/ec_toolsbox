<template>
  <div>
    <h3 id="keysLetter">
      LES FONDAMENTAUX: FICHES-CLEFS
    </h3>

    <Pdf v-bind:galery-pdf="pdfLetter"></Pdf>

    <a
      id="letter-galery"
      href="https://www.univ-angers.fr/fr/formations/insertion-professionnelle/ip-box/lettre-de-motivation.html"
      target="_blank"
    >
      source : <b-icon icon="box-arrow-right"></b-icon>
      www.univ-angers.fr/fr/formations/insertion-professionnelle/ip-box
    </a>

    <Galery v-bind:galery-picture="galeryLetterSheet"></Galery>

    <p>
      <strong>
        La mise en page de la lettre de motivation
      </strong>
    </p>
    <p>
      La lettre doit respecter un équilibre global ; c’est la règle des 3 tiers.
    </p>
    <Galery v-bind:galery-picture="galeryLetterModal"></Galery>
    <p>
      <strong>Exemples d’accroches, d’argumentaires et de conclusions </strong>
      <a
        href="http://platine.univ-lorraine.fr/index.php?id=64s"
        alt="vennage"
        target="_blank"
        ><img
          class="Help_Builder"
          src="/picture_letter/fundamentals-u-platine.png"
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
import Galery from "@/components/Galery.vue";
@Component({
  components: {
    Pdf,
    Galery,
    BIcon,
    BIconBoxArrowRight,
  },
})
export default class CVKeys extends Vue {
  public galeryLetterSheet: string[] = [
    "/picture_letter/fundamentals_Letter_Keys.png",
    "/picture_letter/fundamentals_Letter_Grid.png",
    "/picture_letter/fundamentals_Letter_Spontaneous.png",

    "/picture_letter/fundamentals_Letter_Answer.png",
    "/picture_letter/fundamentals_Letter_Mistakes.png",
  ];
  public galeryLetterModal: string[] = [
    "/picture_Letter/fundamentals_Letter_Modal.png",
    "/picture_Letter/fundamentals_Letter_Modal2.png",
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
