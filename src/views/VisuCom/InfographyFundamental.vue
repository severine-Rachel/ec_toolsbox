<template>
  <div>
    <h3 id="InfographyFundamental">
      LES FONDAMENTAUX
    </h3>
    <Galery v-bind:galery-picture="galeryInfographyFundamental"></Galery>
  </div>
</template>
<style lang="scss"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Galery from "@/components/Galery.vue";
@Component({
  components: {
      Galery,
  },
})
export default class InfographyFundamental extends Vue {
    public galeryInfographyFundamental: string[] = [
        "picture_Infography/fundamental_infography.png",
        "picture_Infography/fundamental_infography2.jpg",
    ]
}
</script>
