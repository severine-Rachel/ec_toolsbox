<template>
  <div>
    <h3 id="go-furtherCV">
      POUR ALLER PLUS LOIN&nbsp;!
    </h3>
    <h4 class="text-vid">
        Comment créer un CV très original&nbsp;?
      </h4>
    <b-row align-h="center">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/5JG6Ec7xRag"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </b-row>
    <p class="text-vid"> Chaîne : Romain RISSOAN</p>
    <p>
      <strong>
        Quelques exemples de CV très originaux:
      </strong>
    </p>
    <div style="text-align:center;">
      <b-row class="justify-content-md-center">
        <!--affichage des images stockées dans galleryCover-->
        <div v-for="cover in galeryCover" :key="cover">
          <img class="imgCV" v-on:click="display(cover)" v-bind:src="cover" />
        </div>
      </b-row>
      <!--affichage du carousel correspondant a l'image sélectionnée dans 'display()'-->
      <div v-if="bool">
        <Carousel
          v-for="(carousel, index) in galeryCarousel"
          :key="carousel"
          v-show="index === nbCarousel"
        >
          <!--affichages des slides du carousel sélectionné-->
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
  //tableaux stockage des images des carousels
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
  //tableau de stockage des carousel
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

<style lang="scss">
.imgCV {
  width: 20vw;
  margin: 10px;
  cursor: pointer;
  box-shadow: 1px 1px 10px;
  &:hover{
    box-shadow: 1px 1px 20px;
  }
}
.imgCV-slide {
  height: 80vh;
}
</style>
