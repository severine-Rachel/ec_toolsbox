<template>
  <div>
    <Header />
    <Menu />
    <h2 class="rubric-title">L'AUDIOVISUEL</h2>
   
    <ContentsPage v-bind:contents-list="contentsAudioVisu"></ContentsPage>
    <p></p>
    
    
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
export default class AudioVisual extends Vue {
  protected contentsAudioVisu = [
    {
      ContentsTitle: "LES FONDAMENTAUX DE L'AUDIOVISUEL",
      ContentsPath: "/Audiovisuel/Fondamentaux",
      ContentsImage: "/thumbnail3.png",
    },
    {
      ContentsTitle: "CONSEILS ET ASTUCES",
      ContentsPath: "/Audiovisuel/Astuces",
      ContentsImage: "/thumbnail1.png",
    },
  ];
  
}
</script>
