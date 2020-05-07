<template>
  <b-row>
    <img
      src="/picture_OWcom/Pro/Cover_Page2.png"
      class="interractive"
      alt="bonne page de garde"
    />
    <b-button class="graph-cov-page-2" id="popover-GraphCovPage2"> </b-button>

    <b-popover
      target="popover-GraphCovPage2"
      triggers="hover"
      placement="right"
    >
      Charte graphique interressante qui doit être retrouvée dans tout le
      dossier
    </b-popover>

    <b-button class="sub-title-cov-page-2" id="popover-SubTitleCovPage2"> </b-button>

    <b-popover
      target="popover-SubTitleCovPage2"
      triggers="hover"
      placement="right"
    >
      Sous-titre bien mis en valeur
    </b-popover>
    <b-button class="ico-cov-page-2" id="popover-IcoCovPage2"> </b-button>

    <b-popover target="popover-IcoCovPage2" triggers="hover" placement="right">
      Iconographie bien en lien avec le thème
    </b-popover>
      <b-button class="logo-cov-page-2" variant="danger" id="popover-LogoCovPage2"> </b-button>

    <b-popover target="popover-LogoCovPage2" triggers="hover" placement="right">
      Logo un peu gros. Attention aux oublis (logo IUT)
    </b-popover>
  </b-row>
</template>
<style lang="scss">
.graph-cov-page-2 {
  width: 600px;
  height: 140px;
  opacity: 50%;
  position: relative;
  right: 600px;
  top: 60px;
  z-index: 10;
  display: inline-block;
}
.sub-title-cov-page-2 {
  width: 305px;
  height: 60px;
  opacity: 50%;
  position: relative;
  right: 1050px;
  top: 350px;
  z-index: 10;
  display: inline-block;
}
.ico-cov-page-2{
    width: 400px;
  height: 220px;
  opacity: 50%;
  position: relative;
  right: -300px;
  top: -473px;
  z-index: 10;
  display: inline-block;
}
.logo-cov-page-2 {
  width: 150px;
  height: 120px;
  opacity: 50%;
  position: relative;
  right: -220px;
  top: -220px;
  z-index: 10;
  display: inline-block;
}
</style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BPopover, BButton } from "bootstrap-vue";
@Component({
  components: { BPopover, BButton },
})
export default class FundamentalCoverPage2 extends Vue {}
</script>
