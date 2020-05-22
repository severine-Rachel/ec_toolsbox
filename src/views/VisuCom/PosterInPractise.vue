<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import InPractisePerf from "@/views/VisuCom/PosterInPractise/InPractisePerf.vue";
import Pdf from "@/components/Pdf.vue"
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
  public pdfPosterInPractise = [
    {
      pdfLink: "/pdf_poster/ExamplePosterCinema.pdf",
      pdfDownload: "Les participants au concours de la fête du cinéma",
      TxtPdf: "Exemples concours d’affiches – La fête du cinéma",
    },

    {
      pdfLink: "/pdf_poster/SpecificationsPosterCinema.pdf",
      pdfDownload: "Cahier des charges de l’affiche de la fête du cinéma",
      TxtPdf: "Cahier des charges de l’affiche de la fête du cinéma",
    },
  ]
  public nxtprevPosterInPractise = {
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
    <Header></Header>
    <Menu></Menu>
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
    <InPractisePerf></InPractisePerf>

    <h4>
      Concours d’affiches : répondre à un cahier des charges
    </h4>
    <p>
      Il y a quelques années, la Fédération Nationale des Cinémas Français a
      lancé un concours pour trouver l’affiche de sa 33e Fête du Cinéma. Vous
      trouverez, dans le document ci-dessous, le cahier des charges de ce
      concours et une sélection d’affiches produites pour l’occasion.
      Saurez-vous retrouver le gagnant et les finalistes parmi les participants
      ?
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
    <NextPrevBtn v-bind:nxtprev-list="nxtprevPosterInPractise"></NextPrevBtn>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
.modal-image {
  height: 80vh;
  box-shadow: 1px 1px 10px;
}
.modal-dialog,
.modal-md {
  max-width: 75% !important;
}
.carousel-control-prev, .carousel-control-next{
    width:7%!important;
  }
</style>
