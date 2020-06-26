<template>
  <div>
    <router-link to="/QuiSuisJe#Publish"
      ><div id="BookRedir"></div
    ></router-link>
   
      <img
        id="BandDesktop"
        draggable="false"
        src="../../assets/basic-Graph/band.png"
        alt="Expression Communciation Boîtes à outils ; les premiers entretiens de recrutement"
      />
 
  
      <img
        id="BandPhone"
        draggable="false"
        src="../../assets/basic-Graph/band2.png"
        alt="Expression Communciation Boîtes à outils ; les premiers entretiens de recrutement"
      />
    
    <a href="#about" id="ArrowLink"
      ><button id="Arrow" alt="descendre" draggable="false"></button
    ></a>
  </div>
</template>

<style lang="scss">
@keyframes appearBand {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@media (max-width: 600px) {
  #Arrow {
    display: none;
  }
  #BookRedir {
    position: absolute;
    height: 20%;
    width: 50vw;
    left: 3%;
  }
  
  #BandDesktop {
    display: none;
  }
  #BandPhone{
    width: 100%;
    border: solid 1px #bce8ff;
    animation-name: appearBand;
    animation-duration: 3s;
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
  height: 8vh;
  position: absolute;
  top: 85%;
  border: none;
  right: 3.1%;
  border-radius: 50%;
  background-image: url("../../assets/arrow.png");
  background-size: 100% 100%;
  &:hover {
    background-image: url("../../assets/arrowhover.png");
    background-size: 100% 100%;
  }
  &:focus {
    outline: none;
  }
}
@media (min-width: 600px) {
  #BookRedir {
    position: absolute;
    height: 90%;
    width: 17vw;
    left: 3%;
  }
  
  #BandDesktop {
    width: 100%;
    border: solid 1px #bce8ff;
    animation-name: appearBand;
    animation-duration: 3s;
  }
  #BandPhone{
    display: none;
  }
  
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class HomeBanner extends Vue {
  public arrow = document.getElementById("arrow");
}
</script>
