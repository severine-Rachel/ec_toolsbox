<template>
  <div>
    <h3 id="ProjectionTips">
      CONSEILS ET ASTUCES
    </h3>
    <Video v-bind:galery-video="videoSlideTips"></Video>
    <Pdf v-bind:galery-pdf="pdfSlideTips"></Pdf>
    <p>
      <strong>
        Créer une animation dynamique avec Prezi
      </strong>
    </p>
    <b-row align-h="center">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Xtc4mktvaoY"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
     
    </b-row>
     <p class="text-vid">Chaîne : Laurene Fayolle</p>
  </div>
</template>
<style lang="scss"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Video from "@/components/Video.vue";
import Pdf from "@/components/Pdf.vue";
import { BIcon, BIconBoxArrowRight } from "bootstrap-vue";

@Component({
  components: {
    Video,
    Pdf,
    BIcon,
    BIconBoxArrowRight,
  },
})
export default class ProjectionTips extends Vue {
  public pdfSlideTips = [
    {
      pdfLink: "/pdf_projection/HelpPP.pdf",
      pdfDownload: "GuidePowerPoint",
      TxtPdf: "Guide PowerPoint",
    },
  ];
  public videoSlideTips = [
    {
      videoSrc: "https://www.youtube.com/embed/vgShczvI1_U",
      videoTitle: "Comment réaliser un diaporama très moche ?",
      videoRoot: "Chaîne :   WORKLAB",
    },
    {
      videoSrc: "https://www.youtube.com/embed/TEq6VUEFHVs",
      videoTitle: "Ces diaporamas moches qu’il faut éviter",
      videoRoot: "Chaîne :  Pascal Haumont",
    },
  ];
}
</script>
