<template>
  <div>
    <h3 id="InfographyInPractise">
      EN PRATIQUE...
    </h3>
    <img
        src="/picture_VisuCom/Poster_PPP.png"
        id="socialpicture"
        alt="ExemplePosterPPP"
        >
    <p>
      <a
        class="subtitle-link"
        href="https://www.spotpink.com/2017/06/26/compilation-meilleures-infographies-2017/"
        target="_blank"
      >
        Exemples des meilleures infographies 2017
        <b-icon icon="box-arrow-right"></b-icon>
      </a>
    </p>
    
  </div>
</template>
<style lang="scss"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {BIcon, BIconBoxArrowRight} from "bootstrap-vue";
@Component({
  components: {
      BIcon,
      BIconBoxArrowRight
  },
})
export default class InfographyInPractise extends Vue {}
</script>
