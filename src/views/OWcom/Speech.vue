<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h2 class="rubric-title">PRISE DE PAROLE EN PUBLIC</h2>
    <ContentsPage v-bind:contents-list="contentsSpeech"></ContentsPage>
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
export default class Speech extends Vue {
 public contentsSpeech= [
    {
    ContentsTitle:  "OSER PARLER EN PUBLIC",
    ContentsPath: "/Prise_de_Parole/Oser_Parler",
    ContentsImage: "/thumbail.png"
    },
    {
    ContentsTitle: "LES PARAMÈTRES DE LA PRISE DE PAROLE EN PUBLIC",
    ContentsPath: "/Prise_de_Parole/Parametre_Parole",
    ContentsImage:"/thumbail.png"
    },
    {
    ContentsTitle: "CONSEILS ET ASTUCES",
    ContentsPath: "/Prise_de_Parole/Astuces",
    ContentsImage:"/thumbail.png"
    }

  ]
}
</script>
