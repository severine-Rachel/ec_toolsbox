<template>
  <b-row>
    <img
      src="/picture_OWcom/Pro/Cover_Page1.png"
      class="interractive"
      alt="mauvaise page de garde"
       draggable="false"
    />
    <b-button
      class="name-cov-page-1"
      variant="danger"
      id="popover-NameCovPage1"
    >
    </b-button>

    <b-popover target="popover-NameCovPage1" triggers="hover" placement="right">
      Le prénom doit être placé avant le nom, l'ensemble doit être placé sous le
      titre du projet
    </b-popover>
    <b-button
      class="title-cov-page-1"
      variant="danger"
      id="popover-TitleCovPage1"
    >
    </b-button>

    <b-popover
      target="popover-TitleCovPage1"
      triggers="hover"
      placement="right"
    >
      Le titre n'est pas suffisamment explicite. C'est un titre générique du
      type "rapport de stage". Ce n'est pas lui qui doit être central. Le titre
      ne doit pas être souligné
    </b-popover>
    <b-button
      class="logo-cov-page-1"
      variant="danger"
      id="popover-LogoCovPage1"
    >
    </b-button>

    <b-popover
      target="popover-LogoCovPage1"
      triggers="hover"
      placement="right"
    >
      Les logos sont bien positionnés mais doivent apparaître plus petits
    </b-popover>
  </b-row>
</template>
<style lang="scss">
.name-cov-page-1 {
  width: 150px;
  height: 50px;
  opacity: 90%;
  position: relative;
  right: 550px;
  top: 145px;
  z-index: 10;
  display: inline-block;
}
.title-cov-page-1 {
  width: 300px;
  height: 120px;
  opacity: 90%;
  position: relative;
  right: 600px;
  top: 320px;
  z-index: 10;
  display: inline-block;
}
.logo-cov-page-1 {
  width: 500px;
  height: 120px;
  opacity: 90%;
  position: relative;
  right: 1000px;
  top: 670px;
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
export default class FundamentalCoverPage1 extends Vue {}
</script>
