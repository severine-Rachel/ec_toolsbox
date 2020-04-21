<template>
  <div>
    <h3 id="ProjectionFundamental">
      LES FONDAMENTAUX
    </h3>
    <p>
      <strong>
        <a
          href="http://weburfist.univ-bordeaux.fr/wp-content/uploads/2013/12/20140212_0409_0416_S.GUICHARD_pwp.pdf"
          target="_blank"
          class="subtitle-link"
          >Réaliser ses supports de présentation sur PowerPoint
          <b-icon icon="box-arrow-right"></b-icon
        ></a>
      </strong>
    </p>
    <p>
      <strong>
        <a
          href="https://www.canva.com/fr_fr/decouvrir/tuto-diaporama-presentation/"
          target="_blank"
          class="subtitle-link"
          >Les clés d’un diaporama réussi
          <b-icon icon="box-arrow-right"></b-icon
        ></a>
      </strong>
    </p>
    <Pdf v-bind:galery-pdf="pdfSlideFundamental"></Pdf>
    <img
      src="/picture_VisuCom/SlideRule.png"
      id="socialpicture"
      alt="Regles_Diaporama"
    />
    <p>
      <a
        class="subtitle-link"
        href="http://immac-pau.net/images/presentation/college/DNB/Fiche_diaporama_hist_arts.pdf"
        target="_blank"
      >
        source:
        <b-icon icon="box-arrow-right"></b-icon>
        immac-pau.net
      </a>
    </p>
  </div>
</template>
<style lang="scss"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Pdf from "@/components/Pdf.vue";
import { BIcon, BIconBoxArrowRight } from "bootstrap-vue";

@Component({
  components: {
    Pdf,
    BIcon,
    BIconBoxArrowRight,
  },
})
export default class ProjectionFundamental extends Vue {
  public pdfSlideFundamental = [
    {
      pdfLink: "/pdf_projection/HowTo.pdf",
      pdfDownload: "ReglesDiaporama",
      TxtPdf: "Les règles d’or du diaporama",
    },
  ];
}
</script>
