<template>
  <b-row>
    <img
      src="/picture_OWcom/Pro/Summary3.png"
      class="interractive"
      alt="mauvais sommaire"
    />
    <b-button
      class="title-summary-3"
      variant="danger"
      id="popover-TitleSummary3"
    >
    </b-button>

    <b-popover
      target="popover-TitleSummary3"
      triggers="hover"
      placement="right"
    >
      Les titres doivent être problématisés en fonction du sujet.
    </b-popover>
    <b-button
      class="struct-summary-3"
      variant="danger"
      id="popover-StructSummary3"
    >
    </b-button>

    <b-popover
      target="popover-StructSummary3"
      triggers="hover"
      placement="right"
    >
      L'ensemble est bien structuré mais il y a trop de sous-parties. Il faut les réunir sous de grands ensembles thématiques.
    </b-popover>


    <b-button class="line-summary-3" variant="danger" id="popover-LineSummary3">
    </b-button>

    <b-popover target="popover-LineSummary3" triggers="hover" placement="right">
      Prévoyez un saut de ligne entre les grandes parties pour rendre le sommaire plus lisible.
    </b-popover>
        <b-button class="num-summary-3" variant="danger" id="popover-NumSummary3">
    </b-button>

    <b-popover target="popover-NumSummary3" triggers="hover" placement="right">
      On ne numérote jamais ni l'introduction, ni la conclusion, ni les annexes qui ne font pas partie du plan.
    </b-popover>
  </b-row>
</template>
<style lang="scss">
.title-summary-3 {
  width: 220px;
  height: 30px;
  opacity: 0.5;
  position: relative;
  right: 550px;
  top: 180px;
  z-index: 10;
  display: inline-block;
}
.struct-summary-3 {
  width: 25px;
  height: 125px;
  opacity: 0.5;
  position: relative;
  right: 760px;
  top: 210px;
  z-index: 10;
  display: inline-block;
}

.line-summary-3 {
  width: 200px;
  height: 10px;
  opacity: 0.5;
  position: relative;
  right: 800px;
  top: 345px;
  z-index: 10;
  display: inline-block;
}
.num-summary-3 {
  width: 10px;
  height: 30px;
  opacity: 0.5;
  position: relative;
  right: 520px;
  top: 480px;
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
export default class Summary3 extends Vue {}
</script>
