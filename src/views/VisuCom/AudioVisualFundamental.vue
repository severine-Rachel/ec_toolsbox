<template>
  <div>
    <h3 id="AudioVisualFundamental">
      LES FONDAMENTAUX
    </h3>
    <p>
      <strong>
        Le spot publicitaire, le film institutionnel, Céline Clavel
      </strong>
    </p>
    <a
      class="fundamentals-pdf"
      href="/pdf_AV/Commercial.pdf"
      download="SpotPublicitaire"
    >
      Préparer spot pub, institutionnel
      <b-icon icon="upload"></b-icon>
    </a>
    <p>
      <strong>
        Le reportage
      </strong>
    </p>
    <p>
    <a
      href="https://movilab.org/index.php?title=Cr%C3%A9er_un_reportage_audiovisuel"
      target="_blank"
      class="subtitle-link"
      >Créer un reportage audiovisuel <b-icon icon="box-arrow-right"></b-icon
    ></a>
    </p>
    <a
      class="fundamentals-pdf"
      href="/pdf_AV/Reportage.pdf"
      download="ReportageVideo"
    >
      Méthodologie du reportage vidéo, Philippe Bouesse, Sceren CRDP Pays de la
      Loire, 2002
      <b-icon icon="upload"></b-icon>
    </a>
    <p>
      <strong>
        La capsule vidéo
      </strong>
    </p>
    <Video v-bind:galery-video="videoVideo"></Video>
    <a
      class="fundamentals-pdf"
      href="/pdf_AV/Capsule.pdf"
      download="CapsuleVideo"
    >
      Capsule vidéo pédagogique
      <b-icon icon="upload"></b-icon>
    </a>
    <p>
      <strong>
        Le court métrage
      </strong>
    </p>
    <a
      class="fundamentals-pdf"
      href="/pdf_AV/ShortFilm.pdf"
      download="CourtMetrage"
    >
      Réaliser un court métrage - PASSEURS D’IMAGES, PAYS DE LA LOIRE, FESTIVAL
      1ERS PLANS – ANGERS
      <b-icon icon="upload"></b-icon>
    </a>
    <h3 class="text-vid">6 étapes pour écrire un scénario de court métrage</h3>
    <b-row align-h="center">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/isgqmDXLzTQ"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </b-row>
    <p class="text-vid">Chaîne : Pros et Heros</p>
    <p>
      Comment composer son story-board ? - TUMMINELLO Wendy, Techniques de
      storyboards, Eyrolles, 2007
    </p>
    <div style="text-align:center;">
      <div style="margin:8px 0px 4px;">
        <a
          href="https://www.calameo.com/books/0053223625f0f98f0cbd8"
          target="_blank"
          >Chapitre 3 : Les caractéristiques fondamentales du plan</a
        >
      </div>
      <iframe
        src="//v.calameo.com/?bkcode=0053223625f0f98f0cbd8"
        width="300"
        height="194"
        frameborder="0"
        scrolling="no"
        allowtransparency
        allowfullscreen
        style="margin:0 auto;"
      ></iframe>
      <div style="margin:4px 0px 8px;">
        <a href="http://www.calameo.com/">Publish at Calameo</a>
      </div>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BIcon, BIconUpload, BIconBoxArrowRight } from "bootstrap-vue";
import Video from "@/components/Video.vue";
@Component({
  components: {
    BIcon,
    BIconUpload,
    BIconBoxArrowRight,
    Video,
  },
})
export default class AudioVisualFundamental extends Vue {
  public videoVideo = [
    {
      videoSrc: "https://www.youtube.com/embed/PUPuemxfm2c",
      videoTitle: "Comment faire une capsule vidéo ?",
      videoRoot: "Chaîne : La classe de JJonet",
    },
    {
      videoSrc: "https://www.youtube.com/embed/YRQb8cHhwj0",
      videoTitle: "La capsule animée",
      videoRoot: " Chaîne : Jerome Blanstier",
    },
  ];
}
</script>
