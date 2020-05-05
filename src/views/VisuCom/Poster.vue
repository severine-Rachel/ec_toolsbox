<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h2 class="rubric-title">L'AFFICHE</h2>
    <p>
      
    </p>
    <ContentsPage v-bind:contents-list="contentsPoster"></ContentsPage>
    
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
export default class Poster extends Vue {
  public contentsPoster= [
    {
    ContentsTitle:  "LES FONDAMENTAUX",
    ContentsPath: "/Affiche/Fondamentaux",
    ContentsImage: "/thumbnail3.png"
    },
    {
    ContentsTitle: "CONSEILS ET ASTUCES",
    ContentsPath: "/Affiche/Astuces",
    ContentsImage:"/thumbnail4.png"
    },
    {
    ContentsTitle: "EN PRATIQUE...",
    ContentsPath: "/Affiche/EnPratique",
    ContentsImage:"/thumbnail1.png"
    },
       {
    ContentsTitle: "POUR TROUVER L'INSPIRATION...",
    ContentsPath: "/Affiche/Trouver_lInspiration",
    ContentsImage:"/thumbnail7.png"
    },
  ]

}
</script>