<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h2 class="rubric-title">LA PERFORMANCE ARTISTIQUE</h2>
    <ContentsPage v-bind:contents-list="contentsPerf"></ContentsPage>
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
export default class ArtPerf extends Vue {
    public contentsPerf= [
    {
    ContentsTitle:  "QU'EST-CE QUE C'EST, LA PERFORMANCE ARTISTIQUE ?",
    ContentsPath: "/PerformanceArtistique/Definition",
    ContentsImage: "/thumbnail5.png"
    },
    {
    ContentsTitle: "EN RÉSUMÉ :  ORIGINES DE LA PERFORMANCE ARTISTIQUE",
    ContentsPath: "/PerformanceArtistique/Origines",
    ContentsImage:"/thumbnail7.png"
    },
    {
    ContentsTitle: "BIBLIOGRAPHIE INDICATIVE",
    ContentsPath: "/PerformanceArtistique/Bibliographie",
    ContentsImage:"/thumbnail3.png"
    },
    {
    ContentsTitle: "PERFORMANCES D'ÉTUDIANTS IUT GEII",
    ContentsPath: "/PerformanceArtistique/ExemplesEtudiants",
    ContentsImage:"/thumbnail1.png"
    },
    {
    ContentsTitle: "CORPUS DE TEXTES SUR LES LIMITES DE L'ART CONTEMPORAIN",
    ContentsPath: "/PerformanceArtistique/CorpusdeTexte",
    ContentsImage:"/thumbnail2.png"
    },
  ]
}
</script>
