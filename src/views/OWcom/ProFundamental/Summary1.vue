<template>
  <b-row>
    <img
      src="/picture_OWcom/Pro/Summary1.png"
      class="interractive"
      alt="mauvais sommaire"
    />
    <b-button
      class="sum-summary-1"
      variant="danger"
      id="popover-SumSummary1"
    >
    </b-button>

    <b-popover target="popover-SumSummary1" triggers="hover" placement="right">
      Le sommaire doit être généré informatiquement et les numéros de page relégués à droite.
    </b-popover>
    <b-button
      class="part-summary-1"
      variant="danger"
      id="popover-PartSummary1"
    >
    </b-button>

    <b-popover
      target="popover-PartSummary1"
      triggers="hover"
      placement="right"
    >
      Les parties et sous-parties doivent être organisées à l'aide d'une hiérarchisation bien précise ; les parties et sous-parties doivent être associées à un plan numéroté.
    </b-popover>
   
  </b-row>
</template>
<style lang="scss">
.sum-summary-1 {
  width: 50px;
  height: 305px;
  opacity: 0.5;
  position: relative;
  right: 530px;
  top: 175px;
  z-index: 10;
  display: inline-block;
}
.part-summary-1 {
  width: 250px;
  height: 160px;
  opacity: 0.5;
  position: relative;
  right: 500px;
  top: 330px;
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
export default class Summary1 extends Vue {}
</script>
