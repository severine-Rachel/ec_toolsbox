<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h2 class="rubric-title">L'INFOGRAPHIE</h2>

    <ContentsPage v-bind:contents-list="contentsInfography"></ContentsPage>

    <Footer></Footer>
  </div>
</template>

<style lang="scss"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import ContentsPage from "@/components/ContentsPage.vue";

import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    ContentsPage,
    Footer,
  },
})
export default class Infography extends Vue {
  public contentsInfography = [
    {
      ContentsTitle: "LES FONDAMENTAUX DE L'INFOGRAPHIE",
      ContentsPath: "/Infographie/Fondamentaux",
      ContentsImage: "/thumbnail4.png",
    },
    {
      ContentsTitle: "CONSEILS ET ASTUCES",
      ContentsPath: "/Infographie/Astuces",
      ContentsImage: "/thumbnail6.png",
    },
    {
      ContentsTitle: "EN PRATIQUE",
      ContentsPath: "/Infographie/EnPratique",
      ContentsImage: "/thumbnail7.png",
    },
  ];
}
</script>
