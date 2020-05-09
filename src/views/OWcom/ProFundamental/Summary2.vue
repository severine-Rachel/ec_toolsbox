<template>
  <b-row>
    <img
      src="/picture_OWcom/Pro/Summary2.png"
      class="interractive"
      alt="mauvais sommaire"
       draggable="false"
    />
    <b-button
      class="title-summary-2"
      variant="danger"
      id="popover-TitleSummary2"
    >
    </b-button>

    <b-popover
      target="popover-TitleSummary2"
      triggers="hover"
      placement="right"
    >
      Le titre doit être plus mis en valeur
    </b-popover>
    <b-button
      class="intro-summary-2"
      variant="danger"
      id="popover-IntroSummary2"
    >
    </b-button>

    <b-popover
      target="popover-IntroSummary2"
      triggers="hover"
      placement="right"
    >
      L'introduction n'est pas une partie, on ne l'inclue donc pas dans la
      numérotation du plan
    </b-popover>

    <b-button class="plan-summary-2" variant="danger" id="popover-PlanSummary2">
    </b-button>

    <b-popover target="popover-PlanSummary2" triggers="hover" placement="right">
      Le plan est incohérent. Quid de la conclusion placé en plein milieu ?
    </b-popover>
    <b-button class="part-summary-2" variant="danger" id="popover-PartSummary2">
    </b-button>

    <b-popover target="popover-PartSummary2" triggers="hover" placement="right">
      Il y a trop de partie dans ce plan désorganisé
    </b-popover>
    <b-button class="num-summary-2" variant="danger" id="popover-NumSummary2">
    </b-button>

    <b-popover target="popover-NumSummary2" triggers="hover" placement="right">
      Il manque l'essentiel dans ce sommaire : les numéros de pages !
    </b-popover>
  </b-row>
</template>
<style lang="scss">
.title-summary-2 {
  width: 100px;
  height: 30px;
  opacity: 90%;
  position: relative;
  right: 530px;
  top: 115px;
  z-index: 10;
  display: inline-block;
}
.intro-summary-2 {
  width: 125px;
  height: 30px;
  opacity: 90%;
  position: relative;
  right: 630px;
  top: 150px;
  z-index: 10;
  display: inline-block;
}
.plan-summary-2 {
  width: 100px;
  height: 30px;
  opacity: 90%;
  position: relative;
  right: 725px;
  top: 340px;
  z-index: 10;
  display: inline-block;
}
.part-summary-2 {
  width: 30px;
  height: 400px;
  opacity: 90%;
  position: relative;
  right: 855px;
  top: 180px;
  z-index: 10;
  display: inline-block;
}
.num-summary-2 {
  width: 30px;
  height: 500px;
  opacity: 90%;
  position: relative;
  right: 430px;
  top: 120px;
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
export default class Summary2 extends Vue {}
</script>
