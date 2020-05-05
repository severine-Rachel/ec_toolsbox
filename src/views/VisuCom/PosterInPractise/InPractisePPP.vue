<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BRow, BCol, BCard, BCardGroup } from "bootstrap-vue";
@Component({
  components: {
    BRow,
    BCol,
    BCard,
    BCardGroup,
  },
})
export default class InPractisePPP extends Vue {}
</script>

<style lang="scss">
.poster-ppp{
    width:100%;
}
</style>

<template>
  <div>
    <b-row>
      <b-col cols="6"> 
          <img src="/picture_Visu/Poster/ppp_Poster2.jpg" alt="Poster Projet Professionnel Personnalisé" class="poster-ppp">
      </b-col>
      <b-col cols="6">
          <img src="/picture_Visu/Poster/anti-Poster2.jpg" alt="Mauvais Poster Projet Professionnel Personnalisé" class="poster-ppp">
      </b-col>
    </b-row>
  </div>
</template>
