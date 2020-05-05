<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h2 class="rubric-title">L'INFOGRAPHIE</h2>
    <p>
      
    </p>
    <Index v-bind:index-list="indexInfography"></Index>
    <InfographyFundamental></InfographyFundamental>
    <InfographyTips></InfographyTips>
    <InfographyInPractise></InfographyInPractise>
    <Footer></Footer>
  </div>
</template>

<style lang="scss"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Index from "@/components/Index.vue";
import InfographyFundamental from "@/views/VisuCom/InfographyFundamental.vue";
import InfographyTips from "@/views/VisuCom/InfographyTips.vue";
import InfographyInPractise from "@/views/VisuCom/InfographyInPractise.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    Index,
    InfographyFundamental,
    InfographyTips,
    InfographyInPractise,
    Footer,
  },
})
export default class Infography extends Vue {
  public indexInfography= [
    {
    IndexTitle:  "LES FONDAMENTAUX",
    IndexId: "#InfographyFundamental",
    IndexImage: "/thumbnail4.png"
    },
    {
    IndexTitle: "CONSEILS ET ASTUCES",
    IndexId: "#InfographyTips",
    IndexImage:"/thumbnail6.png"
    },
    {
    IndexTitle:  "EN PRATIQUE",
    IndexId: "#InfographyInPractise",
    IndexImage:"/thumbnail7.png"
    },

  ]

}
</script>