<style lang="scss">
@media (min-width: 600px) {
  .fundamentals {
    width: 10vw;
    height: 25vh;
    margin: 1vh 2vw;
    border: solid 1px #85def9;
    cursor: pointer;
    position: relative;
    z-index: 10;
  }
  .superposition {
    width: 10vw;
    height: 25vh;
    opacity: 0.1;
    position: relative;
    top: -104%;
    left: 20%;
    z-index: 11;
    cursor: pointer;
    &:hover {
      opacity: 0.3;
    }
  }
  .element-galery {
    width: 10vw;
    height: 25vh;
    margin: 1vh 2vw 1vh 0;
  }
  .post-up {
    width: 60vw;
    margin: 1% 20vw 1%;
    border: solid 1px #bce8ff;
  }
  .cross {
    position: absolute;
    right: 20.5vw;
    margin-top: 2%;
    cursor: pointer;
  }
}
@media (max-width: 600px) {
  .fundamentals {
    width: 10rem;
    height: 12rem;
    margin: 1vh 2vw;
    border: solid 1px #85def9;
    display: block;
    z-index: 10;
  }
  .superposition {
    display: none;
  }
  .element-galery {
    width: 10rem;
    height: 12rem;
    margin: 1vh 2vw 1vh 0;
  }
  .post-up {
    width: 90vw;
    margin: 1%;
    border: solid 1px #bce8ff;
  }
  .cross {
    position: absolute;
    right: 10.5vw;
    margin-top: 2%;
    cursor: pointer;
  }
}
</style>

<template>
  <div>
    <b-row class="justify-content-md-left rowcomponents">
      <div
        class="element-galery"
        v-for="imageElement in galeryPicture"
        :key="imageElement"
      >
        <img
          class="fundamentals"
          v-bind:src="imageElement"
          v-on:click="toogle(imageElement)"
          draggable="false"
        />
        <img
          class="superposition"
          draggable="false"
          v-on:click="toogle(imageElement)"
          src="../assets/snag.png"
        />
      </div>
    </b-row>

    <span class="cross" v-on:click="erased()" v-if="bool">
      <p>
        <b-icon icon="x-square-fill" font-scale="4" variant="danger"> </b-icon>
      </p>
    </span>

    <div v-if="bool">
      <img class="post-up" v-bind:class="classheight" v-bind:src="clicked" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { BIcon, BIconXSquareFill, BIconSearch } from "bootstrap-vue";
@Component({
  components: {
    BIcon,
    BIconXSquareFill,
    BIconSearch,
  },
})
export default class Galery extends Vue {
  // export default==public class
  public image = "";
  public clicked = "";
  public bool = false;

  public toogle(srcImg: string): void {
    if (this.bool == false) {
      this.clicked = srcImg;
      this.bool = true;
    } else if (this.clicked == srcImg) {
      this.clicked = "";
      this.bool = false;
    } else {
      this.clicked = srcImg;
    }
  }
  public erased(): void {
    this.clicked = "";
    this.bool = false;
  }

  @Prop() public readonly galeryPicture!: string[]; //tableau de donnée
  @Prop() public readonly classheight!: string; //donnée
}
</script>
