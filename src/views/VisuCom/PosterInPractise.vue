<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import InPractisePerf from "@/views/VisuCom/PosterInPractise/InPractisePerf.vue";
import InPractiseEvent from "@/views/VisuCom/PosterInPractise/InPractiseEvent.vue";
import InPractisePPP from "@/views/VisuCom/PosterInPractise/InPractisePPP.vue";
import { BIcon, BIconUpload } from "bootstrap-vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Header,
    Menu,
    InPractisePerf,
    InPractiseEvent,
    InPractisePPP,
    BIcon,
    BIconUpload,
    Footer,
  },
})
export default class PosterInPractise extends Vue {}
</script>

<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>EN PRATIQUE...</h3>
    <h4>
      Affiches à analyser : Le Perf’Art GEII
    </h4>

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

    <a
      class="subtitle-link"
      href="/pdf_poster/ExamplePosterCinema.pdf"
      download="Exemples concours d’affiches – La fête du cinéma "
    >
      <strong>
        Exemples concours d’affiches – La fête du cinéma
        <b-icon icon="upload"></b-icon>
      </strong>
    </a>

    <h4>
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
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
.modal-image {
  height:80vh;
    
}
.modal-dialog,
.modal-md {
  max-width: 75% !important;
}
</style>
