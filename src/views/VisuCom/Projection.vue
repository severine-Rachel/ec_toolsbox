<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h2 class="rubric-title">LE DIAPORAMA</h2>
    <ContentsPage v-bind:contents-list="ContentsPageProjection"></ContentsPage>
  
    <Footer></Footer>
  </div>
</template>

<style lang="scss"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import ContentsPage from "@/components/ContentsPage.vue";
import ProjectionFundamental from "@/views/VisuCom/ProjectionFundamental.vue";
import ProjectionTips from "@/views/VisuCom/ProjectionTips.vue";
import ProjectionInPractise from "@/views/VisuCom/ProjectionInPractise.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    ContentsPage,
    ProjectionFundamental,
    ProjectionTips,
    ProjectionInPractise,
    Footer,
  },
})
export default class Projection extends Vue {
  public ContentsPageProjection = [
    {
      ContentsTitle: "LES FONDAMENTAUX",
      ContentsPath: "/Diaporama/Fondamentaux",
      ContentsImage: "/thumbnail5.png",
    },
    {
      ContentsTitle: "CONSEILS ET ASTUCES",
      ContentsPath: "/Diaporama/Astuces",
      ContentsImage: "/thumbnail1.png",
    },
    {
      ContentsTitle: "EN PRATIQUE...",
      ContentsPath: "/Diaporama/EnPratique",
      ContentsImage: "/thumbnail7.png",
    },
  ];
}
</script>
