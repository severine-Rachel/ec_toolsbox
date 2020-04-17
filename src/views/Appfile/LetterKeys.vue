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

    <Galery v-bind:galery-picture="galeryLetter"></Galery>
  </div>
</template>

<style lang="scss"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Pdf from "@/components/Pdf.vue";
import Galery from "@/components/Galery.vue";
@Component({
  components: {
    Pdf,
    Galery,
  },
})
export default class CVKeys extends Vue {
  public galeryLetter: string[] = [
    "/picture_letter/fundamentals_Letter_Keys.png",
    "/picture_letter/fundamentals_Letter_Grid.png",
    "/picture_letter/fundamentals_Letter_Spontaneous.png",

    "/picture_letter/fundamentals_Letter_Answer.png",
    "/picture_letter/fundamentals_Letter_Mistakes.png",
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
