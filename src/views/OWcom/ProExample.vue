<template>
  <div id="ProExample">
    <Header />
    <Menu />
    <h3>EXEMPLES DE RÉALISATIONS</h3>
    <p></p>
    <div style="text-align: center">
      <b-row class="justify-content-md-center">
        <!--affichage des images stockées dans galleryCover-->
        <div class="colonne" v-for="(Galery, index) in galery" :key="Galery">
          <h4>{{ galeryTitres[index] }}</h4>
          <a href="#ScrollImage" class="scroll-vid">
            <div class="mos_content" v-on:click="displayGalery(Galery)">
              <div class="img_align" v-for="carousel in Galery" :key="carousel">
                <span>
                  <img
                    class="mosaique"
                    v-bind:src="carousel[0]"
                    draggable="false"
                  />
                </span>
              </div>
            </div>
          </a>
        </div>
      </b-row>
      <b-row id="ScrollImage">
        <div class="img_align" v-if="galerySelected">
          <div
            v-for="(Galery, index) in galery"
            :key="Galery"
            v-show="index === nbGalery"
          >
            <div
              class="img_align"
              v-for="carousel in Galery"
              :key="carousel"
              v-on:click="displayCarousel(carousel)"
            >
              <a href="#ScrollCarousel" class="scroll-vid">
                <img class="imgCV" v-bind:src="carousel[0]" draggable="false" />
              </a>
            </div>
          </div>
        </div>
      </b-row>
      <b-row id="ScrollCarousel">
        <div v-if="carouselSelected" class="div-align">
          <div v-for="(Galery, index) in galery" :key="Galery">
            <span v-if="index === nbGalery">
              <Carousel
                v-for="(carousel, index) in Galery"
                :key="carousel"
                v-show="nbCarousel - 1 === index"
              >
                <span v-for="slide in carousel" :key="slide">
                  <slide>
                    <img
                      class="img_slide"
                      v-bind:src="slide"
                      draggable="false"
                    />
                  </slide>
                </span>
              </Carousel>
            </span>
          </div>
        </div>
      </b-row>
      <!--affichage du carousel correspondant a l'image sélectionnée dans 'display()'-->
    </div>
    <NextPrevBtn v-bind:nxtprev-list="nxtprevProExample" />
    <Footer />
  </div>
</template>

<style lang="scss">
#ProExample {
  scroll-behavior: smooth;
  overflow: auto;
  height: 100vh;
  position: relative;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Pdf from "@/components/Pdf.vue";
import Galery from "@/components/Galery.vue";
import Footer from "@/components/Footer.vue";
import Carousel from "@/components/Carousel/Carousel.vue";
import Slide from "@/components/Carousel/Slide.vue";
import NextPrevBtn from "@/components/NextPrevBtn.vue";
@Component({
  components: {
    Header,
    Menu,
    Pdf,
    Galery,
    Footer,
    Carousel,
    NextPrevBtn,
    Slide,
  },
})
export default class ProExample extends Vue {
  protected galerySelected = false;
  protected carouselSelected = false;
  protected nbCarousel = 0;
  protected nbGalery = 0;
  protected nb = 0;
  protected galeryTitres: string[] = [
    "Magazine de GEII de l'IUT",
    "Critique de cinéma",
    "Le dossier de presse",
    "Analyse d'articles de presse",
  ];
  //tableaux de stockage des images des carousels
  protected carouselMagazine1: string[] = [
    "/picture_OWcom/Magazine/Magazine1.jpg",
    "/picture_OWcom/Magazine/Magazine2.jpg",
    "/picture_OWcom/Magazine/Magazine3.jpg",
    "/picture_OWcom/Magazine/Magazine4.jpg",
    "/picture_OWcom/Magazine/Magazine5.jpg",
    "/picture_OWcom/Magazine/Magazine6.jpg",
    "/picture_OWcom/Magazine/Magazine7.jpg",
    "/picture_OWcom/Magazine/Magazine8.jpg",
    "/picture_OWcom/Magazine/Magazine9.jpg",
    "/picture_OWcom/Magazine/Magazine10.jpg",
    "/picture_OWcom/Magazine/Magazine11.jpg",
    "/picture_OWcom/Magazine/Magazine12.jpg",
    "/picture_OWcom/Magazine/Magazine13.jpg",
    "/picture_OWcom/Magazine/Magazine14.jpg",
    "/picture_OWcom/Magazine/Magazine15.jpg",
    "/picture_OWcom/Magazine/Magazine16.jpg",
  ];
  protected carouselCriticCinema: string[] = [
    "/picture_OWcom/Criticism/CinemaCriticismGard.jpg",
    "/picture_OWcom/Criticism/CinemaCriticism1.png",
    "/picture_OWcom/Criticism/CinemaCriticism2.png",
  ];
  protected carouselPress1: string[] = [
    "/picture_OWcom/Press/_PressRobotic1.jpg",
    "/picture_OWcom/Press/_PressRobotic2.jpg",
    "/picture_OWcom/Press/_PressRobotic3.jpg",
    "/picture_OWcom/Press/_PressRobotic4.jpg",
    "/picture_OWcom/Press/_PressRobotic5.jpg",
    "/picture_OWcom/Press/_PressRobotic6.jpg",
    "/picture_OWcom/Press/_PressRobotic7.jpg",
    "/picture_OWcom/Press/_PressRobotic8.jpg",
    "/picture_OWcom/Press/_PressRobotic9.jpg",
    "/picture_OWcom/Press/_PressRobotic10.jpg",
    "/picture_OWcom/Press/_PressRobotic11.jpg",
    "/picture_OWcom/Press/_PressRobotic12.jpg",
  ];
  protected carouselPress2: string[] = [
    "/picture_OWcom/Press/PressRobotic1.jpg",
    "/picture_OWcom/Press/PressRobotic2.jpg",
    "/picture_OWcom/Press/PressRobotic3.jpg",
    "/picture_OWcom/Press/PressRobotic4.jpg",
    "/picture_OWcom/Press/PressRobotic5.jpg",
    "/picture_OWcom/Press/PressRobotic6.jpg",
    "/picture_OWcom/Press/PressRobotic7.jpg",
    "/picture_OWcom/Press/PressRobotic8.jpg",
    "/picture_OWcom/Press/PressRobotic9.jpg",
    "/picture_OWcom/Press/PressRobotic10.jpg",
    "/picture_OWcom/Press/PressRobotic11.jpg",
  ];
  protected carouselPress3: string[] = [
    "/picture_OWcom/Press/PressArt1.jpg",
    "/picture_OWcom/Press/PressArt2.jpg",
    "/picture_OWcom/Press/PressArt3.jpg",
    "/picture_OWcom/Press/PressArt4.jpg",
    "/picture_OWcom/Press/PressArt5.jpg",
    "/picture_OWcom/Press/PressArt6.jpg",
    "/picture_OWcom/Press/PressArt7.jpg",
    "/picture_OWcom/Press/PressArt8.jpg",
    "/picture_OWcom/Press/PressArt9.jpg",
    "/picture_OWcom/Press/PressArt10.jpg",
    "/picture_OWcom/Press/PressArt11.jpg",
    "/picture_OWcom/Press/PressArt12.jpg",

  ];

  protected carouselPressCovid2: string[] = [
    "/picture_OWcom/Press/PressCovid19Final1.jpg",
    "/picture_OWcom/Press/PressCovid19Final2.jpg",
    "/picture_OWcom/Press/PressCovid19Final3.jpg",
    "/picture_OWcom/Press/PressCovid19Final4.jpg",
    "/picture_OWcom/Press/PressCovid19Final5.jpg",
    "/picture_OWcom/Press/PressCovid19Final6.jpg",
    "/picture_OWcom/Press/PressCovid19Final7.jpg",
    "/picture_OWcom/Press/PressCovid19Final8.jpg",
    "/picture_OWcom/Press/PressCovid19Final9.jpg",
    "/picture_OWcom/Press/PressCovid19Final10.jpg",
    "/picture_OWcom/Press/PressCovid19Final11.jpg",
    "/picture_OWcom/Press/PressCovid19Final12.jpg",
    "/picture_OWcom/Press/PressCovid19Final13.jpg",
  ];

  protected carouselPressTurc2: string[] = [
    "/picture_OWcom/Press/PressTurcFinal1.jpg",
    "/picture_OWcom/Press/PressTurcFinal2.jpg",
    "/picture_OWcom/Press/PressTurcFinal3.jpg",
    "/picture_OWcom/Press/PressTurcFinal4.jpg",
    "/picture_OWcom/Press/PressTurcFinal5.jpg",
    "/picture_OWcom/Press/PressTurcFinal6.jpg",
    "/picture_OWcom/Press/PressTurcFinal7.jpg",
    "/picture_OWcom/Press/PressTurcFinal8.jpg",
    "/picture_OWcom/Press/PressTurcFinal9.jpg",
    "/picture_OWcom/Press/PressTurcFinal10.jpg",
    "/picture_OWcom/Press/PressTurcFinal11.jpg",
    "/picture_OWcom/Press/PressTurcFinal12.jpg",
  ];
  //tableau de stockage des carousels
  protected galeryPressFolder: string[][] = [
    this.carouselPress1,
    this.carouselPress2,
    this.carouselPress3,
  ];
  protected galeryPress: string[][] = [
    this.carouselPressCovid2,

    this.carouselPressTurc2,
  ];

  protected galeryMagazine: string[][] = [this.carouselMagazine1];
  protected galeryCritic: string[][] = [this.carouselCriticCinema];
  protected galery: string[][][] = [
    this.galeryMagazine,
    this.galeryCritic,
    this.galeryPressFolder,
    this.galeryPress,
  ];

  protected displayGalery(src: string[][]): void {
    this.carouselSelected = false;
    this.nbGalery = this.galery.indexOf(src);
    if (this.galerySelected == false) {
      this.galerySelected = true;
    }
  }
  protected displayCarousel(src: string[]): void {
    this.nbCarousel = this.galery[this.nbGalery].indexOf(src) + 1;
    if (this.carouselSelected == false) {
      this.carouselSelected = true;
    }
  }
  protected nxtprevProExample = {
    BoolPrev: true,
    BoolNext: false,
    PrevImage: "/thumbnail5.png",
    NextImage: "",
    PrevLink: "/Ecrit_Pro/Orthographe",
    NextLink: "",
  };
}
</script>
<style lang="scss">
.img_exemple {
  height: 450px;
  width: auto;
  margin: 40px;
}

.mosaique {
  height: 200px;
  max-width: 120px;
  max-height: 160px;
  width: auto;
  height: auto;
  margin: 0px !important;
}
@media (min-width: 600px) {
  .colonne {
    width: 22% !important;
    
  }
  .img_slide {
  height: 90vh;
}
}
@media (max-width: 600px){
  .colonne {
    width: 80% !important;
    margin-left:10%;
  }
  .img_slide {
  width: 90vw;
}
}
.img_align {
  display: inline-block;
  margin-right: auto;
  margin-left: auto;
}
.mos_content {
  border-color: #2694cd;
  border-style: solid;
  border-radius: 6px;
  cursor: pointer;
  background-color: #bce8ff;
  padding: 10px !important;
  margin: 10px !important;
  &:hover {
    border-color: #2e367f;
  }
}
.div-align {
  width: 100%;
}
</style>
