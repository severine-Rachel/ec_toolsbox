<template>
  <div>
    <router-link to="/QuiSuisJe#Publish"><div id="BookRedir"></div></router-link>
      <img
      id="Band"
      draggable="false"
      src="../../assets/basic-Graph/band.png"
      alt="Expression Communciation Boîtes à outils ; les premiers entretiens de recrutement"
    />
    <a href="#about" id="ArrowLink"
      ><img
        id="Arrow"
        src="../../assets/arrow.png"
        alt="descendre"
        draggable="false"
    /></a>
  </div>
</template>

<style lang="scss">
#Band {
  height: 50vh;
  width: 100%;
  border: solid 1px #bce8ff;
  animation-name: appearBand;
  animation-duration: 3s;
}
@keyframes appearBand {
  from{
    opacity:0;
  } 
  to{
    opacity: 1;
  }
}
#ArrowLink {
  display: block;
  width: 4vw;
  margin-left: auto; //auto need width to work
  margin-right: auto;
  animation-name: appear2ndWelcome;
  animation-duration: 3s;
}

#Arrow {
  width: 4vw;
  position: absolute;
  top: 85%;
  right:3.1%;
}
#BookRedir{
  position: absolute;
  height:45%;
  width:17vw;
  left:3%;
  
  
  
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class HomeBanner extends Vue {
  public arrow = document.getElementById("arrow");

 
}
</script>
