<template>
  <div id="CVFurther">
    <Header></Header>
    <Menu></Menu>
    <h3 id="go-furtherCV">
      POUR ALLER PLUS LOIN{{'\xa0'}}!
    </h3>
    <h4>
        Comment créer un CV très original{{'\xa0'}}?
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
    <p class="text-vid none-margin-top"> Chaîne : Romain RISSOAN</p>
    <h4>
        Quelques exemples de CV très originaux
      </h4>
    <div style="text-align:center;">
      <b-row class="justify-content-md-center">
        <!--affichage des images stockées dans galleryCover-->
        <div v-for="cover in galeryCover" :key="cover">
          <a href="#CarouselScroll" class="scroll-vid">
          <img class="imgCV" v-on:click="display(cover)" v-bind:src="cover"  draggable="false"/>
          </a>
        </div>
      </b-row>
      <!--affichage du carousel correspondant a l'image sélectionnée dans 'display()'-->
      <div v-if="bool" id="CarouselScroll">
        <Carousel
          v-for="(carousel, index) in galeryCarousel"
          :key="carousel"
          v-show="index === nbCarousel"
        >
          <!--affichages des slides du carousel sélectionné-->
          <span v-for="slide in galeryCarousel[index]" :key="slide">
            <slide>
              <img class="imgCV-slide" v-bind:src="slide"  draggable="false" />
            </slide>
          </span>
        </Carousel>
      </div>
    </div>
    <NextPrevBtn v-bind:nxtprev-list="nxtprevCVGoFurther"></NextPrevBtn>
    <Footer></Footer>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Carousel from "@/components/Carousel/Carousel.vue";
import Slide from "@/components/Carousel/Slide.vue";
import NextPrevBtn from "@/components/NextPrevBtn.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Carousel,
    Slide,
    Header,
    Menu,
    NextPrevBtn,
    Footer,
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
      this.$router.push('');
      this.$router.push('#CarouselScroll');
    } else if (this.clicked == srcImg) {
      this.clicked = "";
      this.bool = false;
      
    } else {
      this.clicked = srcImg;
    }
  }
  public nxtprevCVGoFurther =
  {
    BoolPrev: true,
    BoolNext: false,
    PrevImage: "/thumbnail4.png",
    NextImage: " ",
    PrevLink: "/CV/CV_Video",
    NextLink: " ",
  };
}
</script>

<style lang="scss">
#CVFurther{
  scroll-behavior: smooth;
  overflow:auto;
  height:100vh;
}
.imgCV {
  width: 20vw;
  margin: 10px;
  cursor: pointer;
  
  box-shadow: 1px 1px 10px black;
  &:hover{
    box-shadow: 1px 1px 20px black;
  }
}
.imgCV-slide {
  height: 80vh;
}
</style>
