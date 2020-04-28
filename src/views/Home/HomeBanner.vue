<template>
<div>
  <img id="band" src="../../assets/basic-Graph/band.png">
  <img id="arrow" src="../../assets/arrow.png">
 </div>
</template>

<style >

  #band{
    width: 100%;
    border:solid 1px #bce8ff;
  }
  #arrow{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 4vw;
  }
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class HomeBanner extends Vue {
  // export default==public class
}
</script>