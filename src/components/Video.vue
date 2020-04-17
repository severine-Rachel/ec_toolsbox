<style>
.text-vid{
  text-align: center;
}
.video-image {
  width: 17vw;
  height: 17vh;
  margin: 2vw;
  border: solid 1px #bce8ff;
}
</style>

<template>
  <div>
    <b-row class="justify-content-md-center">
      <div v-for="videoImage in galeryVideo" :key="videoImage">
        <img
          class="video-image"
          v-on:click="
            tooglev(
              videoImage.videoSrc,
              videoImage.videoTitle,
              videoImage.videoRoot
            )
          "
          v-bind:src="videoImage.videoMiniature"
        />
      </div>
    </b-row>
   
      
    <h5 class="text-vid">{{ title }}</h5>
    
     <b-row align-h="center">
    <iframe
      class="video"
      width="560"
      height="315"
      v-bind:src="clickedV"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    </b-row>
    
    <p class="text-vid">{{ root }}</p>
   
  
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
  components: {},
})
export default class Video extends Vue {
  public clickedV = "";
  public title = "";
  public root = "";
  public tooglev(vidLink: string, vidT: string, vidR: string): void {
    this.clickedV = vidLink;
    this.title = vidT;
    this.root = vidR;
  }
  @Prop() public readonly galeryVideo!: {
    videoMiniature: string;
    videoSrc: string;
    videoTitle: string;
    videoRoot: string;
  };
}
</script>
