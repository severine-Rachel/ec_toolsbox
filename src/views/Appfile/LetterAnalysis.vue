<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3 id="analysisLetter">
      ANALYSE DE
      L'OFFRE
    </h3>
    <b-row>
      <b-col col="6">
        <img src="/picture_letter/Adequacy_Letter_Announce.png" class="vertical" id="VirginPage"  draggable="false">
      </b-col>
      <b-col col="6">
        <img src="/picture_letter/Adequacy_Letter_Prepare.png" class="vertical" id="VirginPage"  draggable="false">
      </b-col>
    </b-row>
    <NextPrevBtn v-bind:nxtprev-list="nxtprevLetterAnalysis"></NextPrevBtn>
    <Footer></Footer>
  </div>
</template>
<style lang="scss">
  #VirginPage{
    box-shadow: 1px 1px 10px;;
  }
</style>
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
   }
})
export default class LetterAnalysis extends Vue {
  public nxtprevLetterAnalysis =
  {
    BoolPrev: true,
    BoolNext: true,
    PrevImage: "/thumbnail6.png",
    NextImage: "/thumbnail1.png",
    PrevLink: "/Lettre_de_Motivation/Astuces",
    NextLink: "/Lettre_de_Motivation/Arguments",
  };
}
</script>
