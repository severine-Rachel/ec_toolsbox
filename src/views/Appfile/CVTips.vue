<template>
  <div>
    <h3 id="tipsCV">
      CONSEILS ET ASTUCES
    </h3>
    <Video v-bind:galery-video="videoCVTips"></Video>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Video from "@/components/Video.vue";
@Component({
  components: {
    Video,
  },
})
export default class CVKeys extends Vue {
  public videoCVTips = [
    {
      videoSrc: "https://www.youtube.com/embed/ljDuhygWlD4",
      videoTitle: "Méthodologie du CV",
      videoRoot: "Chaîne : digiSchool",
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
    {
      videoSrc: "https://www.youtube.com/embed/5oHVIuNPtGg",
      videoTitle: "CV : 30 secondes pour convaincre",
      videoRoot: "Chaîne :  AXA France",
    },
  ];
}
</script>
