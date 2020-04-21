<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h2 class="rubric-title">LE DIAPORAMA</h2>
    <Index v-bind:index-list="indexProjection"></Index>
    <ProjectionFundamental></ProjectionFundamental>
    <ProjectionTips></ProjectionTips>
    <ProjectionInPractise></ProjectionInPractise>
    <Footer></Footer>
  </div>
</template>

<style lang="scss"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Index from "@/components/Index.vue";
import ProjectionFundamental from "@/views/VisuCom/ProjectionFundamental.vue";
import ProjectionTips from "@/views/VisuCom/ProjectionTips.vue";
import ProjectionInPractise from "@/views/VisuCom/ProjectionInPractise.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    Index,
    ProjectionFundamental,
    ProjectionTips,
    ProjectionInPractise,
    Footer,
  },
})
export default class Projection extends Vue {
  public indexProjection = [
    {
      IndexTitle: "LES FONDAMENTAUX",
      IndexId: "#ProjectionFundamental",
      IndexImage: "/thumbail.png",
    },
    {
      IndexTitle: "CONSEILS ET ASTUCES",
      IndexId: "#ProjectionTips",
      IndexImage: "/thumbail.png",
    },
    {
      IndexTitle: "EN PRATIQUE...",
      IndexId: "#ProjectionInPractise",
      IndexImage: "/thumbail.png",
    },
  ];
}
</script>
