<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>QU'EST-CE QUE LA PERFORMANCE ARTISTIQUE{{'\xa0'}}?</h3>
    <p>
  
        L’art-performance – ou performance artistique – tire son nom de
        l’anglais «{{'\xa0'}}to perform{{'\xa0'}}» qui désigne une manière particulière de se
        mettre en scène. Art protéiforme et pluriel, il a longtemps résisté à
        toute tentative de modélisation. L’art-performance se pratique depuis le
        début du XXe siècle et certains anthropologues font remonter son origine
        à une période bien plus ancienne puisqu’ils défendent l’idée selon
        laquelle toute manifestation rituelle relèverait de la performance.
        Pourtant, ce n’est qu’en 2010 que sa définition a été actée par le
        Journal Officiel de la République française en tant qu’ «{{'\xa0'}}événement
        artistique qui recourt à différents modes d’expression dont l’exécution
        constitue l’œuvre elle-même{{'\xa0'}}» (voir Jean-Marie Pradier. «{{'\xa0'}}La performance
        ou la renaissance de l’action{{'\xa0'}}», 2013). La performance artistique
        englobe un large éventail de disciplines et de techniques – littérature,
        poésie, théâtre, musique, danse, architecture, peinture, vidéo, cinéma,
        photographies, textes… – en toutes combinaisons imaginables.
 
    </p>
    <DefDef></DefDef>
    <DefOrigin></DefOrigin>
    <DefEvolution></DefEvolution>
    <NextPrevBtn v-bind:nxtprev-list="nxtprevArtPerfDef"></NextPrevBtn>
    <Footer></Footer>
  </div>
</template>
<style lang="scss"></style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import DefDef from "@/views/Art/ArtPerfDef/DefDef.vue";
import DefOrigin from "@/views/Art/ArtPerfDef/DefOrigin.vue";
import DefEvolution from "@/views/Art/ArtPerfDef/DefEvolution.vue";
import NextPrevBtn from "@/components/NextPrevBtn.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    DefDef,
    DefOrigin,
    DefEvolution,
    NextPrevBtn,
    Footer,
  },
  
})
export default class ArtPerfDef extends Vue {
  public nxtprevArtPerfDef =
  {
    BoolPrev: false,
    BoolNext: true,
    PrevImage: " ",
    NextImage: "/thumbnail7.png",
    PrevLink: " ",
    NextLink: "/PerformanceArtistique/Origines",
  };
}
</script>
