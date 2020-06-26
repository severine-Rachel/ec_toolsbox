<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>LES LIMITES DE L'ART CONTEMPORAIN - CORPUS DE TEXTES</h3>
    <p>
      L’art contemporain art qui suscite émotions, et parfois même
      bouleversement et dissidence, vient combattre une certaine forme de
      résignation et d’aliénation qui guette nos sociétés numérisées,
      robotisées, voire déshumanisées… Entre réflexion existentielle et buzz
      médiatique, l’artiste a-t-il tous les droits{{'\xa0'}}?
    </p>
    <a
      class="subtitle-link pdf-line"
      href="/pdf_perf/Contemporary.pdf"
      download="L-Art-Doit-Il-Etre-Sans-Limites"
    >
      Dossier - L'art doit-il être sans
      limites{{'\xa0'}}? <img class="logo-pdf" src="../../assets/logo-pdf.png" />
    </a>
    <NextPrevBtn v-bind:nxtprev-list="nxtprevArtPerfCorp"></NextPrevBtn>
    <Footer></Footer>
  </div>
</template>
<style lang="scss"></style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import { BIcon, BIconUpload } from "bootstrap-vue";
import NextPrevBtn from "@/components/NextPrevBtn.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    BIcon,
    BIconUpload,
    NextPrevBtn,
    Footer,
  },
})
export default class ArtPerfCorp extends Vue {
  public nxtprevArtPerfCorp = {
    BoolPrev: true,
    BoolNext: true,
    PrevImage: "/thumbnail1.png",
    NextImage: "/thumbnail3.png",
    PrevLink: "/PerformanceArtistique/ExemplesEtudiants",
    NextLink: "/PerformanceArtistique/Bibliographie",
  };
}
</script>
