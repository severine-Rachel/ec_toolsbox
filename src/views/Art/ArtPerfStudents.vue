<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>PERFORMANCES D'ÉTUDIANTS IUT GEII</h3>
    <p>
      Le département Génie électrique et informatique industrielle (GEII) de
      l’IUT d’Angers organise, depuis 2017, son concours de performances
      artistiques qui implique près de cent étudiants de première année du DUT
      GEII. La grande finale du « Perf’Art GEII » met à l’honneur une dizaine
      d’équipes sélectionnées lors de la phase qualificative. Lors de la
      dernière édition, c’est "W@tched", dénonçant la surveillance des masses,
      et "Crève-cœur", abordant la question des féminicides, qui ont
      respectivement remporté le prix du jury et le prix du public…
    </p>
    <p>
      Par leur engagement sur scène, les étudiants défendent leur point de vue
      sur des thèmes riches et variés qui leur tiennent à cœur :
      surconsommation, sens de la vie, addiction aux réseaux sociaux, souffrance
      animale ou encore harcèlement scolaire… Une grande fête de la créativité,
      une ouverture sur le monde mais aussi et surtout un beau moment de
      partage.
    </p>
    <p>
      <strong>
        Le Perf’Art GEII GEII en images
      </strong>
    </p>
        <b-row align-h="center">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/fNd2hcmQtik"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      >
      </iframe>
    </b-row>
    <p class="text-vid">Chaîne :  Perf'Art GEII Angers</p>
    <p>
      <strong>
        Quelques exemples de performances …
      </strong>
    </p>
    <p>
      <strong>
        La note d’intention : un outil pour créer sa performance
      </strong>
    </p>
    <a
        class="fundamentals-pdf"
        href="/pdf_perf/IntentPerf.pdf"
        download="NoteIntentionPerfArt"
      >
        <b-icon icon="upload"></b-icon> La note d’intention : Perf’Art
      </a>
    <Footer></Footer>
  </div>
</template>
<style lang="scss"></style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import {BIcon, BIconUpload} from "bootstrap-vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    BIcon,
    BIconUpload,
    Footer,
  },
})
export default class ArtPerfStudents extends Vue {}
</script>
