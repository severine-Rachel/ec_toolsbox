<style lang="scss">
.text-group-vid {
  text-align: center;
  color: white;
}
@media (min-width: 600px) {
  .video-image {
    width: 17vw;
    height: 17vh;
    margin: 1vh 2vw;
    background-image: url(../assets/Play.png);
    background-size: 100% 100%;
    border-radius: 20px;

    cursor: pointer;
    &:hover {
      background-image: url(../assets/Playhover.png);
      background-size: 100% 100%;
    }
  }
}
@media (max-width: 600px) {
  .video-image {
    margin:1vh 10vw;
    width: 10rem;
    height: 5rem;
    background-image: url(../assets/Play.png);
    background-size: 100% 100%;
    border-radius: 20px;
  }
}

.scroll-vid {
  display: block;
  &:hover {
    text-decoration: none;
  }
}
</style>

<template>
  <div>
    <b-row class="justify-content-md-center">
      <div v-for="videoImage in galeryVideo" :key="videoImage.videoSrc">
        <a v-bind:href="`#${idVideo}`" class="scroll-vid">
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
            <h6 class="text-group-vid">{{ videoImage.videoTitle }} <br /></h6>
          </div>
        </a>
      </div>
    </b-row>
    <h5 v-bind:id="idVideo" class="text-vid">{{ title }}</h5>

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
  protected clickedV = "";
  protected title = "";
  protected root = "";
  protected H = 0;
  protected W = 0;
  protected tooglev(vidLink: string, vidT: string, vidR: string): void {
    this.clickedV = vidLink;
    this.title = vidT;
    this.root = vidR;
    this.H = 315;
    this.W = 560;
  }
  @Prop() protected readonly galeryVideo!: {
    videoSrc: string;
    videoTitle: string;
    videoRoot: string;
  }[];
  @Prop() protected readonly idVideo!: string;
}
</script>
