<template>
  <div>
    <Header />
    <Menu />
    <h2 class="rubric-title">LETTRE DE MOTIVATION</h2>
   
    
    <ContentsPage v-bind:contents-list="ContentsLetter"></ContentsPage>


    <Footer />
  </div>
</template>

<style lang="scss">
#letter-galery {
  margin-left: 10%;
}

#TableLetter {
  padding: 1%;
  text-align: center;
  margin: 0 5%;
}
</style>

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
export default class Letter extends Vue {
  protected ContentsLetter = [
    {
      ContentsTitle: "LES FONDAMENTAUX DE LA LETTRE : FICHES-CLÉS",
      ContentsPath: "/Lettre_de_Motivation/Fondamentaux",
      ContentsImage: "/thumbnail4.png",
    },
    {
      ContentsTitle: "CONSEILS ET ASTUCES",
      ContentsPath: "/Lettre_de_Motivation/Astuces",
      ContentsImage: "/thumbnail6.png",
    },
    {
      ContentsTitle:
        "LE POSTE : ANALYSE DE L'OFFRE",
      ContentsPath: "/Lettre_de_Motivation/Analyse",
      ContentsImage: "/thumbnail3.png",
    },
    {
      ContentsTitle: "COMMENT PRÉPARER VOS ARGUMENTS ?",
      ContentsPath: "/Lettre_de_Motivation/Arguments",
      ContentsImage: "/thumbnail1.png",
    },
  ];
}
</script>
