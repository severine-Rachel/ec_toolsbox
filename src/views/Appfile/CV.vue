<template>
  <div>
    <Header />
    <Menu />
    <h2 class="rubric-title" id="cv">CV</h2>
    <p>
      <strong>
        
      </strong>
    </p>
    
    <ContentsPage v-bind:contents-list="contentsCV"></ContentsPage>


    <Footer />
  </div>
</template>

<style lang="scss">
#cv {
  padding-bottom: 1vh;
  font-size: 2.5rem;
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
export default class CV extends Vue {
  protected contentsCV = [
    {
      ContentsTitle: "LES FONDAMENTAUX DU CV : FICHES-CLÉS",
      ContentsPath: "/CV/Fondamentaux",
      ContentsImage: "/thumbnail7.png",
    },
    {
      ContentsTitle: "CONSEILS ET ASTUCES",
      ContentsPath: "/CV/Astuces",
      ContentsImage: "/thumbnail1.png",
    },
    {
      ContentsTitle: "EXEMPLES DE CV (IUT)",
      ContentsPath: "/CV/Exemples",
      ContentsImage: "/thumbnail2.png",
    },
    {
      ContentsTitle: "OUTILS D'AIDE À LA CONCEPTION DE CV",
      ContentsPath: "/CV/Outils",
      ContentsImage: "/thumbnail3.png",
    },
    {
      ContentsTitle: "LE CV VIDÉO",
      ContentsPath: "/CV/CV_Video",
      ContentsImage: "/thumbnail4.png",
    },
    {
      ContentsTitle: "POUR ALLER PLUS LOIN !",
      ContentsPath: "/CV/Aller_Plus_Loin",
      ContentsImage: "/thumbnail5.png",
    },
  ];
}
</script>
