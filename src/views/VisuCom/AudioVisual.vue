<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h2 class="rubric-title">L'AUDIOVISUEL</h2>
    <p><strong>
      La réalisation d’un montage vidéo ne s’improvise pas. Selon l’objectif à
      atteindre, le message essentiel à faire passer et la cible visée, il faut
      déterminer un axe et un scénario qui vont conditionner les prises de vues
      et le choix des plans. En communication, les réalisations audiovisuelles
      sont multiples. Il peut s’agir de spots publicitaires, de films
      institutionnels, de reportages, de capsules vidéo ou encore de courts
      métrages…</strong>
    </p>
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
      IndexImage: "/thumbnail3.png",
    },
    {
      IndexTitle: "CONSEILS ET ASTUCES",
      IndexId: "#AudioVisualTips",
      IndexImage: "/thumbnail1.png",
    },
  ];
}
</script>
