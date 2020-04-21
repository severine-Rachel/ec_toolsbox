<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>CORPUS DE TEXTES SUR LES LIMITES DE L'ART CONTEMPORAIN</h3>
    <p>
      L’art contemporain art qui suscite émotions, et parfois même
      bouleversement et dissidence, vient combattre une certaine forme de
      résignation et d’aliénation qui guette nos sociétés numérisées,
      robotisées, voire déshumanisées… Entre réflexion existentielle et buzz
      médiatique, l’artiste a-t-il tous les droits ?
    </p>
    <a
      class="fundamentals-pdf"
      href="/pdf_perf/Contemporary.pdf"
      download="L-Art-Doit-Il-Etre-Sans-Limites"
    >
      <b-icon icon="upload"></b-icon> Dossier - L'art doit-il être sans limites
      ?
    </a>
    <Footer></Footer>
  </div>
</template>
<style lang="scss"></style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import { BIcon, BIconUpload } from "bootstrap-vue";
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
export default class ArtPerfCorp extends Vue {}
</script>
