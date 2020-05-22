<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h2 class="rubric-title">
      ÉCRITS PROFESSIONNELS, ACADÉMIQUE ET D'INVENTION
    </h2>
    
    <ContentsPage v-bind:contents-list="contentsPro"></ContentsPage>

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
export default class Pro extends Vue {
  public contentsPro = [
    {
      ContentsTitle: "LES FONDAMENTAUX DE L'ÉCRIT",
      ContentsPath: "/Ecrit_Pro/Fondamentaux",
      ContentsImage: "/thumbnail1.png",
    },
    {
      ContentsTitle: "STRATÉGIES D'ÉCRITURE",
      ContentsPath: "/Ecrit_Pro/Strategie",
      ContentsImage: "/thumbnail3.png",
    },
    {
      ContentsTitle: "AMÉLIORER SON ORTHOGRAPHE",
      ContentsPath: "/Ecrit_Pro/Orthographe",
      ContentsImage: "/thumbnail5.png",
    },
    {
      ContentsTitle: "EXEMPLES DE RÉALISATIONS",
      ContentsPath: "/Ecrit_Pro/Exemples",
      ContentsImage: "/thumbnail7.png",
    },
  ];
}
</script>
