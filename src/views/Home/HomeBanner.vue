<template>
  <div>
    <img 
      id="Band" 
      draggable="false"
      src="../../assets/basic-Graph/band.png" 
      alt="Expression Communciation Boîtes à outils ; les premiers entretiens de recrutement"/>
    <a href="#about" id="ArrowLink"
      ><img id="Arrow" src="../../assets/arrow.png" alt="descendre" draggable="false"
    /></a>
  </div>
</template>

<style lang="scss">
#Band {
  width: 100%;
  border: solid 1px #bce8ff;
}
#ArrowLink {
  display: block;
  width: 4vw;
  margin-left: auto; //auto need width to work
  margin-right: auto;
}
#Arrow {
  width: 4vw;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class HomeBanner extends Vue {
  public arrow = document.getElementById("arrow");

  public scrollbehave() {
    this.$emit("smooth");
  }
}
</script>
