<style>
.text-vid {
  text-align: center;
}
.video-image {
  width: 17vw;
  height: 17vh;
  margin: 2vw;
  background-image: url(../assets/Play.png);
  background-size: 100% 100%;
  border: solid 1px #6a94aa;
  cursor: pointer;
}
</style>

<template>
  <div>
    <b-row class="justify-content-md-center">
      <div v-for="videoImage in galeryVideo" :key="videoImage">
        <div
          class="video-image"
          v-on:click="
            tooglev(
              videoImage.videoSrc,
              videoImage.videoTitle,
              videoImage.videoRoot
            )
          "
        >
          <p class="text-vid">{{ videoImage.videoTitle }} <br /></p>
        </div>
      </div>
    </b-row>

    <h5 class="text-vid">{{ title }}</h5>

    <b-row align-h="center">
      <iframe
        class="video"
        v-bind:width="W"
        v-bind:height="H"
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
import { BIcon, BIconPlay } from "bootstrap-vue";
@Component({
  components: {
    BIcon,
    BIconPlay,
  },
})
export default class Video extends Vue {
  public clickedV = "";
  public title = "";
  public root = "";
  public H = 0;
  public W = 0;
  public tooglev(vidLink: string, vidT: string, vidR: string): void {
    this.clickedV = vidLink;
    this.title = vidT;
    this.root = vidR;
    this.H = 315;
    this.W = 560;
  }
  @Prop() public readonly galeryVideo!: {
    
    videoSrc: string;
    videoTitle: string;
    videoRoot: string;
  };
}
</script>
