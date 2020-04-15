<style>
.fundamentals {
  width: 10vw;
  height: 25vh;
  margin:  2vw ;
  border: solid 1px #bce8ff;
}

.post-up {
  width: 60vw;
  margin: 0 20vw;
  border: solid 1px #bce8ff;
}
.cross{
  position: absolute;
  right: 20vw;
}

</style>

<template>
  <div>

    <b-row class="justify-content-md-center">
      <div v-for="imageElement in galeryPicture" :key="imageElement">
        <img
          class="fundamentals"
          v-on:click="toogle(imageElement)"
          v-bind:src="imageElement"
        />
      </div>
    </b-row>

    <span class="cross" v-on:click="erased()" v-if="bool">
      <p>
        <b-icon icon="x-circle" font-scale="5" variant="danger"> </b-icon>
      </p>
    </span>

    <div v-if="bool">
      <img class="post-up" v-bind:src="clicked" />
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { BIcon, BIconXCircle } from "bootstrap-vue";
@Component({
  components: {
    BIcon,
    BIconXCircle
  }
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

  @Prop() public readonly galeryPicture!: string[];
}
</script>
