<template>
  <div id="CVtips">
    <Header />
    <Menu />
    <h3>
      CONSEILS ET ASTUCES
    </h3>
    <p></p>
    <Video v-bind:galery-video="videoCVTips"  v-bind:id-video="'cv1'"></Video>
    <NextPrevBtn v-bind:nxtprev-list="nxtprevCVTips" />
    <Footer />
  </div>
</template>
<style lang="scss">
  #CVtips{
  scroll-behavior: smooth;
  overflow:auto;
  height:100vh;
  position: relative;
  }
</style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Video from "@/components/Video.vue";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import NextPrevBtn from "@/components/NextPrevBtn.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Video,
    Header,
    Menu,
    NextPrevBtn,
    Footer,
  },
})
export default class CVKeys extends Vue {
  protected videoCVTips = [
    {
      videoSrc: "https://www.youtube.com/embed/ljDuhygWlD4",
      videoTitle: "Méthodologie du CV",
      videoRoot: "Chaîne : digiSchool",
    },
    {
      videoSrc: "https://www.youtube.com/embed/5oHVIuNPtGg",
      videoTitle: "CV : 30 secondes pour convaincre",
      videoRoot: "Chaîne :  AXA France",
    },
    {
      videoSrc: "https://www.youtube.com/embed/l1hhhndMzIs",
      videoTitle: "Les règles d’or du CV",
      videoRoot: "Chaîne :  1er emploi, jobs, stages",
    },
    {
      videoSrc: "https://www.youtube.com/embed/xOqgIDRqoeg",
      videoTitle: "Les astuces pour rédiger son CV",
      videoRoot: "Chaîne : TVBilan",
    },
  ];
  protected nxtprevCVTips =
  {
    BoolPrev: true,
    BoolNext: true,
    PrevImage: "/thumbnail7.png",
    NextImage: "/thumbnail2.png",
    PrevLink: "/CV/Fondamentaux",
    NextLink: "/CV/Exemples",
  };
}
</script>
