<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>EN RÉSUMÉ : LES ORIGINES DE LA PERFORMANCE ARTISTIQUE</h3>
    <p>
      
        Cette frise est loin d’être exhaustive. Il faudrait y ajouter les Actionnistes viennois,  Christo ou encore d’autres grands noms de l’art performance mais il donne un aperçu des performances qui ont marqué l’Histoire de cet art. 
      
    </p>
    <img src="/picture_perf/timeline.png" class="horizontal" alt="Frise">
    <NextPrevBtn v-bind:nxtprev-list="nxtprevArtPerfOrigin"></NextPrevBtn>
    <Footer></Footer>
  </div>
</template>
<style lang="scss"></style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import NextPrevBtn from "@/components/NextPrevBtn.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    NextPrevBtn,
    Footer,
  },
})
export default class ArtPerfOrigin extends Vue {
 public nxtprevArtPerfOrigin =
  {
    BoolPrev: true,
    BoolNext: true,
    PrevImage: "/thumbnail5.png",
    NextImage: "/thumbnail1.png",
    PrevLink: "/PerformanceArtistique/Definition",
    NextLink: "/PerformanceArtistique/ExemplesEtudiants",
  };
}
</script>
