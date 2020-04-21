<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h2 class="rubric-title">L'AUDIOVISUEL</h2>
    <Index v-bind:index-list="indexAudioVisu"></Index>
    <p></p>
    <AudioVisualFundamental></AudioVisualFundamental>
    <AudioVisualTips></AudioVisualTips>
    
    <Footer></Footer>
  </div>
</template>

<style lang="scss"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Index from "@/components/Index.vue";
import AudioVisualFundamental from "@/views/VisuCom/AudioVisualFundamental.vue";
import AudioVisualTips from "@/views/VisuCom/AudioVisualTips.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    Index,
    AudioVisualFundamental,
    AudioVisualTips,
    Footer,
  },
})
export default class AudioVisual extends Vue {
  public indexAudioVisu = [
    {
      IndexTitle: "LES FONDAMENTAUX",
      IndexId: "#AudioVisualFundamental",
      IndexImage: "/thumbail.png",
    },
    {
      IndexTitle: "CONSEILS ET ASTUCES",
      IndexId: "#AudioVisualTips",
      IndexImage: "/thumbail.png",
    },
  ];
}
</script>
