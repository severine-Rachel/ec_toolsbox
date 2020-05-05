<template>
  <div>
    <h3 id="keysLetter">
      LES FONDAMENTAUX : FICHES-CLEFS
    </h3>
    <p>
      « Comment structurer ma lettre ? Devrais-je changer de paragraphe pour
      parler telle partie ? N'est ce pas un peu déjà vu ? » Ces fiches vous
      donneront des réponses par rapport à la forme et le fond de votre lettre de motivation.
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
      La lettre doit respecter un équilibre global ; c’est la règle des 3 tiers.
    </p>
    <Galery v-bind:galery-picture="galeryLetterModal"></Galery>
    <p>
      Après s'être interressé à la forme, il faut argumenter le fond de vos motivations. Vous trouverez des exemples de contenu en suivant ce lien.
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
    "/picture_letter/fundamentals_Letter_Keys.jpg",
    "/picture_letter/fundamentals_Letter_Grid.jpg",
    "/picture_letter/fundamentals_Letter_Spontaneous.jpg",

    "/picture_letter/fundamentals_Letter_Answer.jpg",
    "/picture_letter/fundamentals_Letter_Mistakes.jpg",
  ];
  public galeryLetterModal: string[] = [
    "/picture_Letter/fundamentals_Letter_Modal.jpg",
    "/picture_Letter/fundamentals_Letter_Modal2.jpg",
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
