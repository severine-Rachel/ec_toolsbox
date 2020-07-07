<template>
  <div>
    <Header />
    <Menu />
    <h2 class="rubric-title">PRISE DE PAROLE EN PUBLIC</h2>
    <ContentsPage v-bind:contents-list="contentsSpeech"></ContentsPage>
    <Footer />
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
 protected contentsSpeech= [
    {
    ContentsTitle:  "OSER PARLER EN PUBLIC",
    ContentsPath: "/Prise_de_Parole/Oser_Parler",
    ContentsImage: "/thumbnail6.png"
    },
    {
    ContentsTitle: "LES PARAMÈTRES DE LA PRISE DE PAROLE EN PUBLIC",
    ContentsPath: "/Prise_de_Parole/Parametre_Parole",
    ContentsImage:"/thumbnail4.png"
    },
    {
    ContentsTitle: "CONSEILS ET ASTUCES",
    ContentsPath: "/Prise_de_Parole/Astuces",
    ContentsImage:"/thumbnail2.png"
    }

  ]
}
</script>
