<template>
  <div>
    <h4>LES PREMIÈRES THÉORIES DE LA COMMUNICATION</h4>
    <p>
      La communication a donné lieu à différentes théories.
      Les 1ers modèles ont été développés par des ingénieurs et techniciens dans les années 1920.
      </p>
      <p id="ShannonAndWeaver">
          <b-icon icon="arrow-right" /> Théorie de Shannon et Weaver.
      </p>
      <img class="horizontal" draggable="false" src="/picture_OWcom/schematic/schema_Shannon.jpg" alt="Schéma Théorie de Shannon et Weaver de la communication">
  </div>
</template>

<style lang="scss">

</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BIcon, BIconArrowRight} from "bootstrap-vue";
@Component({
  components: {
    BIcon,
    BIconArrowRight
  }
})
export default class ShareTheory extends Vue {}
</script>
