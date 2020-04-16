<template>
  <div>
    <h3 id="go-furtherCV">
      POUR ALLER PLUS LOIN !
    </h3>
    <p>
      <strong>
        Comment créer un CV très original ?
      </strong>
    </p>
    <p>
      <strong>
        Quelques exemples de CV très originaux:
      </strong>
    </p>
    <div style="text-align:center;">
      <b-row class="justify-content-md-center">
        <div v-for="cover in galeryCover" :key="cover">
          <img class="imgCV" v-on:click="display(cover)" v-bind:src="cover" />
        </div>
      </b-row>
      <div v-if="bool">
        <Carousel
          v-for="(carousel, index) in galeryCarousel"
          :key="carousel"
          v-show="index === nbCarousel"
        >
          <span v-for="slide in galeryCarousel[index]" :key="slide">
            <slide>
              <img class="imgCV-slide" v-bind:src="slide" />
            </slide>
          </span>
        </Carousel>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { BIcon, BIconXCircle } from "bootstrap-vue";
import Carousel from "@/components/Carousel/Carousel.vue";
import Slide from "@/components/Carousel/Slide.vue";
@Component({
  components: {
    Carousel,
    Slide,
  },
})
export default class CVGoFurther extends Vue {
  public clicked = "";
  public bool = false;
  public nbCarousel = 0;
  public galeryCover: string[] = [
    "/picture_cv/gofurther_CV/cv-original-burger1.jpg",
    "/picture_cv/gofurther_CV/cv-original-lego.jpg",
    "/picture_cv/gofurther_CV/cv-original-magazine.jpg",
    "/picture_cv/gofurther_CV/cv-original-packagin1.jpg",
  ];
  public galerySlide1: string[] = [
    "/picture_cv/gofurther_CV/cv-original-burger1.jpg",
    "/picture_cv/gofurther_CV/cv-original-burger2.jpg",
    "/picture_cv/gofurther_CV/cv-original-burger3.jpg",
    "/picture_cv/gofurther_CV/cv-original-burger4.jpg",
  ];
  public galerySlide2: string[] = [
    "/picture_cv/gofurther_CV/cv-original-lego.jpg",
    "/picture_cv/gofurther_CV/cv-original-lego1.jpg",
  ];
  public galerySlide3: string[] = [
    "/picture_cv/gofurther_CV/cv-original-magazine.jpg",
    "/picture_cv/gofurther_CV/cv-original-magazine1.jpg",
    "/picture_cv/gofurther_CV/cv-original-magazine2.jpg",
    "/picture_cv/gofurther_CV/cv-original-magazine3.jpg",
    "/picture_cv/gofurther_CV/cv-original-magazine4.jpg",
    "/picture_cv/gofurther_CV/cv-original-magazine5.jpg",
    "/picture_cv/gofurther_CV/cv-original-magazine6.jpg",
    "/picture_cv/gofurther_CV/cv-original-magazine7.jpg",
    "/picture_cv/gofurther_CV/cv-original-magazine8.jpg",
    "/picture_cv/gofurther_CV/cv-original-magazine9.jpg",
  ];
  public galerySlide4: string[] = [
    "/picture_cv/gofurther_CV/cv-original-packagin1.jpg",
    "/picture_cv/gofurther_CV/cv-original-packagin2.jpg",
  ];
  public galeryCarousel: string[][] = [
    this.galerySlide1,
    this.galerySlide2,
    this.galerySlide3,
    this.galerySlide4,
  ];
  public display(srcImg: string): void {
    this.nbCarousel = this.galeryCover.indexOf(srcImg);
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
}
</script>
<style>
.imgCV {
  width: 20vw;
  
  margin: 10px;
}
.imgCV-slide{
    height:80vh;
    
}
</style>
