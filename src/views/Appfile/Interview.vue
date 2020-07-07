<template>
  <div>
    <Header />
    <Menu />
    <h2 class="rubric-title">ENTRETIEN DE RECRUTEMENT</h2>

  
    <ContentsPage v-bind:contents-list="contentsInterview"></ContentsPage>


    <Footer />
  </div>
</template>

<style lang="scss">
#interview-galery {
  margin-left: 10%;
}

#go-further-Interview {
  margin-left: 8vw;
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
export default class Interview extends Vue {
  protected contentsInterview = [
    {
      ContentsTitle: "LES FONDAMENTAUX DE L'ENTRETIEN : FICHES-CLÉS",
      ContentsPath: "/Entretien/Fondamentaux",
      ContentsImage: "/thumbnail2.png",
    },
    {
      ContentsTitle: "CONSEILS ET ASTUCES",
      ContentsPath: "/Entretien/Astuces",
      ContentsImage: "/thumbnail6.png",
    },
    {
      ContentsTitle: "POUR ALLER PLUS LOIN",
      ContentsPath: "/Entretien/Aller_Plus_Loin",
      ContentsImage: "/thumbnail7.png",
    },
  ];
}
</script>
