<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import InPractisePerf from "@/views/VisuCom/PosterInPractise/InPractisePerf.vue";
import InPractisePerfPhone from "@/views/VisuCom/PosterInPractise/InPractisePerfPhone.vue";
import Pdf from "@/components/Pdf.vue";
import InPractiseEvent from "@/views/VisuCom/PosterInPractise/InPractiseEvent.vue";
import InPractisePPP from "@/views/VisuCom/PosterInPractise/InPractisePPP.vue";
import { BIcon, BIconUpload } from "bootstrap-vue";
import NextPrevBtn from "@/components/NextPrevBtn.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Header,
    Menu,
    InPractisePerf,
    InPractisePerfPhone,
    Pdf,
    InPractiseEvent,
    InPractisePPP,
    BIcon,
    BIconUpload,
    NextPrevBtn,
    Footer,
  },
})
export default class PosterInPractise extends Vue {
  protected pdfPosterInPractise = [
    {
      PdfLink: "/pdf_poster/ExamplePosterCinema.pdf",
      PdfDownload: "Les participants au concours de la fête du cinéma",
      TxtPdf: "Exemples concours d’affiches – La fête du cinéma",
    },

    {
      PdfLink: "/pdf_poster/SpecificationsPosterCinema.pdf",
      PdfDownload: "Cahier des charges de l’affiche de la fête du cinéma",
      TxtPdf: "Cahier des charges de l’affiche de la fête du cinéma",
    },
  ];
  protected nxtprevPosterInPractise = {
    BoolPrev: true,
    BoolNext: true,
    PrevImage: "/thumbnail4.png",
    NextImage: "/thumbnail7.png",
    PrevLink: "/Affiche/Astuces",
    NextLink: "/Affiche/Trouver_lInspiration",
  };
}
</script>

<template>
  <div>
    <Header />
    <Menu />
    <h3>EN PRATIQUE...</h3>
    <h4>
      Affiches à analyser : Le Perf’Art GEII
    </h4>
    <p>
      Les affiches ci-dessous ont été réalisées par des étudiants d’IUT pour
      présenter le concours de performances artistiques auquel ils participent
      dans le cadre de leur formation en expression-communication. Pour chacune
      des affiches ci-dessous, vous trouverez une évaluation, critère par
      critère, ainsi qu’une analyse détaillée. L’objectif : vous permettre de
      mieux comprendre les enjeux et les règles générales qui président à la
      conception d’une affiche.
    </p>
    <InPractisePerf id="PosterPerfDesktop"></InPractisePerf>
    <InPractisePerfPhone id="PosterPerfPhone"></InPractisePerfPhone>
    <h4>
      Concours d’affiches : répondre à un cahier des charges
    </h4>
    <p>
      Il y a quelques années, la Fédération Nationale des Cinémas Français a
      lancé un concours pour trouver l’affiche de sa 33e Fête du Cinéma. Vous
      trouverez, dans le document ci-dessous, le cahier des charges de ce
      concours et une sélection d’affiches produites pour l’occasion.
      Saurez-vous retrouver le gagnant et les finalistes parmi les
      participants{{ "\xa0" }}?
    </p>

    <Pdf v-bind:galery-pdf="pdfPosterInPractise"></Pdf>

    <h4 class="breath-top">
      Autres exemples…
    </h4>

    <h5 id="h5-title">Affiches événementielles</h5>
    <p>
      <InPractiseEvent></InPractiseEvent>
    </p>
    <h5 id="h5-title">Posters de Projet Professionnel Personnalisé</h5>
    <p>
      <InPractisePPP></InPractisePPP>
    </p>
    <NextPrevBtn v-bind:nxtprev-list="nxtprevPosterInPractise" />
    <Footer />
  </div>
</template>

<style lang="scss">
@media (min-width: 600px) {
  #PosterPerfPhone{
    display: none;
  }
  .modal-dialog,
  .modal-md {
    max-width: 75% !important;
  }
  .modal-image {
  height: 80vh;
  box-shadow: 1px 1px 10px;
}
}
@media (max-width: 600px) {
  #PosterPerfDesktop {
    display: none;
  }
  .modal-dialog,
  .modal-md {
    max-width: 90% !important;
  }
  .modal-image {
  width:90vw;
  margin-left:5%;
  box-shadow: 1px 1px 10px;
}
}


.carousel-control-prev,
.carousel-control-next {
  width: 7% !important;
}
</style>
