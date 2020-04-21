<template>
  <div>
    <h3 id="keysCV">
      LES FONDAMENTAUX : FICHES-CLÉS
    </h3>
    <Pdf v-bind:galery-pdf="pdfCV"></Pdf>

    <a
      id="cv-galery"
      href="https://www.univ-angers.fr/fr/formations/insertion-professionnelle/ip-box/cv.html"
      target="_blank"
    >
      source:
      <b-icon icon="box-arrow-right"></b-icon>
      www.univ-angers.fr/fr/formations/insertion-professionnelle/ip-box
    </a>

    <Galery v-bind:galery-picture="galeryCV"></Galery>
  </div>
</template>
<style lang="scss">

</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Pdf from "@/components/Pdf.vue";
import Galery from "@/components/Galery.vue";
import {BIcon, BIconBoxArrowRight} from "bootstrap-vue";
@Component({
    components: {
    Pdf,
    Galery,
    BIcon,
    BIconBoxArrowRight,

    }
})
export default class CVKeys extends Vue {
  public galeryCV: string[] = [
    "/picture_cv/fundamentals_CV_Keys.png",
    "/picture_cv/fundamentals_CV_Grid.png",
    "/picture_cv/fundamentals_CV_Classic.png"

  ];

 public pdfCV= [
    {
      pdfLink:"/pdf_cv/fundamentals_CV_Keys.pdf",
      pdfDownload:"10PointsClés",
      TxtPdf:"Fiche 1 : Les 10 points clés"
    },
    {
      pdfLink:"/pdf_cv/fundamentals_CV_Classic.pdf",
      pdfDownload:"grillAnalyseCV",
      TxtPdf: "Fiche 2 : La grille d’analyse du CV"
    },
    {
      pdfLink:"/pdf_cv/fundamentals_CV_Grid.pdf",
      pdfDownload:"ModèleTrameClassique",
      TxtPdf: "Fiche 3 : Modèle de trame classique"
    }
  ];
}
</script>