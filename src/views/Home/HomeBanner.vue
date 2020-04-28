<template>
<div>
  <img id="band" src="../../assets/basic-Graph/band.png">
  <a href="#about" id="arrow-link"><img id="arrow" src="../../assets/arrow.png"></a>
 </div>
</template>

<style lang="scss">

  #band{
    width: 100%;
    border:solid 1px #bce8ff;
  }
  #arrow-link{
    display: block;
    width: 4vw;
    margin-left: auto; //auto need width to work
    margin-right: auto;
  }
  #arrow{

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