<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>EXEMPLES DE RÉALISATIONS</h3>
    <p></p>
    <div style="text-align: center">
      <!--
    <Carousel
          v-for="(carousel, index) in galeryCarousel"
          :key="carousel"
        >
      <span v-for="slide in galeryCarousel[index]" :key="slide">
        <slide>
          <img class="imgCV-slide" v-bind:src="slide" />
        </slide>
      </span>
    </Carousel>-->
    <b-row class="justify-content-md-center">
    <!--affichage des images stockées dans galleryCover-->
      <div v-for="(cover, index) in galeryCover" :key="cover">
        <h4>{{galeryTitres[index]}}</h4>
        <img class="img_exemple" v-on:click="display(cover)" v-bind:src="cover" />
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

    <Footer></Footer>
  </div>
</template>

<style lang="scss"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Pdf from "@/components/Pdf.vue";
import Galery from "@/components/Galery.vue";
import Footer from "@/components/Footer.vue";
import Carousel from "@/components/Carousel/Carousel.vue";
import Slide from "@/components/Carousel/Slide.vue";
@Component({
  components: {
    Header,
    Menu,
    Pdf,
    Galery,
    Footer,
    Carousel,
    Slide,
  },
})
export default class ProExample extends Vue {
  public clicked = "";
  public bool = false;
  public nbCarousel = 0;
  public galeryTitres: string[] = [
    "Magazine de GEII de l'IUT",
    "Challenge robotique 1",
    "Challenge robotique 2",
    "Dossier Perf'Art",
    "Analyse de presse - Covid-19",
    "Analyse de presse - Covid-19 Final",
    "Analyse de presse - Turquie-Syrie",
    "Analyse de presse - Turquie-Syrie Final",
    "Critique de cinéma",
  ];
  //tableaux de stockage des images des carousels
  public galeryCover: string[] = [
    "/picture_OWcom/Magazine/Magazine1.png",
    "/picture_OWcom/Press/_PressRobotic1.png",
    "/picture_OWcom/Press/PressRobotic1.png",
    "/picture_OWcom/Press/PressArt1.png",
    "/picture_OWcom/Press/PressCovid19Correction1.png",
    "/picture_OWcom/Press/PressCovid19Final1.png",
    "/picture_OWcom/Press/PressTurcCorrection1.png",
    "/picture_OWcom/Press/PressTurcFinal1.png",
    "/picture_OWcom/Criticism/CinemaCriticism1.png",
  ];
  public galeryMagazine: string[] = [
    "/picture_OWcom/Magazine/Magazine1.png",
    "/picture_OWcom/Magazine/Magazine2.png",
    "/picture_OWcom/Magazine/Magazine3.png",
    "/picture_OWcom/Magazine/Magazine4.png",
    "/picture_OWcom/Magazine/Magazine5.png",
    "/picture_OWcom/Magazine/Magazine6.png",
    "/picture_OWcom/Magazine/Magazine7.png",
    "/picture_OWcom/Magazine/Magazine8.png",
    "/picture_OWcom/Magazine/Magazine9.png",
    "/picture_OWcom/Magazine/Magazine10.png",
    "/picture_OWcom/Magazine/Magazine11.png",
    "/picture_OWcom/Magazine/Magazine12.png",
    "/picture_OWcom/Magazine/Magazine13.png",
    "/picture_OWcom/Magazine/Magazine14.png",
    "/picture_OWcom/Magazine/Magazine15.png",
    "/picture_OWcom/Magazine/Magazine16.png",
  ];
  public galeryPress1: string[] = [
    "/picture_OWcom/Press/_PressRobotic1.png",
    "/picture_OWcom/Press/_PressRobotic2.png",
    "/picture_OWcom/Press/_PressRobotic3.png",
    "/picture_OWcom/Press/_PressRobotic4.png",
    "/picture_OWcom/Press/_PressRobotic5.png",
    "/picture_OWcom/Press/_PressRobotic6.png",
    "/picture_OWcom/Press/_PressRobotic7.png",
    "/picture_OWcom/Press/_PressRobotic8.png",
    "/picture_OWcom/Press/_PressRobotic9.png",
    "/picture_OWcom/Press/_PressRobotic10.png",
    "/picture_OWcom/Press/_PressRobotic11.png",
    "/picture_OWcom/Press/_PressRobotic12.png",
  ];
  public galeryPress2: string[] = [
    "/picture_OWcom/Press/PressRobotic1.png",
    "/picture_OWcom/Press/PressRobotic2.png",
    "/picture_OWcom/Press/PressRobotic3.png",
    "/picture_OWcom/Press/PressRobotic4.png",
    "/picture_OWcom/Press/PressRobotic5.png",
    "/picture_OWcom/Press/PressRobotic6.png",
    "/picture_OWcom/Press/PressRobotic7.png",
    "/picture_OWcom/Press/PressRobotic8.png",
    "/picture_OWcom/Press/PressRobotic9.png",
    "/picture_OWcom/Press/PressRobotic10.png",
    "/picture_OWcom/Press/PressRobotic11.png",
  ];
  public galeryPress3: string[] = [
    "/picture_OWcom/Press/PressArt1.png",
    "/picture_OWcom/Press/PressArt2.png",
    "/picture_OWcom/Press/PressArt3.png",
    "/picture_OWcom/Press/PressArt4.png",
    "/picture_OWcom/Press/PressArt5.png",
    "/picture_OWcom/Press/PressArt6.png",
    "/picture_OWcom/Press/PressArt7.png",
    "/picture_OWcom/Press/PressArt8.png",
    "/picture_OWcom/Press/PressArt9.png",
    "/picture_OWcom/Press/PressArt10.png",
    "/picture_OWcom/Press/PressArt11.png",
    "/picture_OWcom/Press/PressArt12.png",
    "/picture_OWcom/Press/PressArt12.png",
  ];
  public galeryPress4: string[] = [
    "/picture_OWcom/Press/PressCovid19Correction1.png",
    "/picture_OWcom/Press/PressCovid19Correction2.png",
    "/picture_OWcom/Press/PressCovid19Correction3.png",
    "/picture_OWcom/Press/PressCovid19Correction4.png",
    "/picture_OWcom/Press/PressCovid19Correction5.png",
    "/picture_OWcom/Press/PressCovid19Correction6.png",
    "/picture_OWcom/Press/PressCovid19Correction7.png",
    "/picture_OWcom/Press/PressCovid19Correction8.png",
    "/picture_OWcom/Press/PressCovid19Correction9.png",
    "/picture_OWcom/Press/PressCovid19Correction10.png",
    "/picture_OWcom/Press/PressCovid19Correction11.png",
    "/picture_OWcom/Press/PressCovid19Correction12.png",
    "/picture_OWcom/Press/PressCovid19Correction12.png",
  ];
  public galeryPress5: string[] = [
    "/picture_OWcom/Press/PressCovid19Final1.png",
    "/picture_OWcom/Press/PressCovid19Final2.png",
    "/picture_OWcom/Press/PressCovid19Final3.png",
    "/picture_OWcom/Press/PressCovid19Final4.png",
    "/picture_OWcom/Press/PressCovid19Final5.png",
    "/picture_OWcom/Press/PressCovid19Final6.png",
    "/picture_OWcom/Press/PressCovid19Final7.png",
    "/picture_OWcom/Press/PressCovid19Final8.png",
    "/picture_OWcom/Press/PressCovid19Final9.png",
    "/picture_OWcom/Press/PressCovid19Final10.png",
    "/picture_OWcom/Press/PressCovid19Final11.png",
    "/picture_OWcom/Press/PressCovid19Final12.png",
    "/picture_OWcom/Press/PressCovid19Final12.png",
    "/picture_OWcom/Press/PressCovid19Final13.png",
  ];
  public galeryPress6: string[] = [
    "/picture_OWcom/Press/PressTurcCorrection1.png",
    "/picture_OWcom/Press/PressTurcCorrection2.png",
    "/picture_OWcom/Press/PressTurcCorrection3.png",
    "/picture_OWcom/Press/PressTurcCorrection4.png",
    "/picture_OWcom/Press/PressTurcCorrection5.png",
    "/picture_OWcom/Press/PressTurcCorrection6.png",
    "/picture_OWcom/Press/PressTurcCorrection7.png",
    "/picture_OWcom/Press/PressTurcCorrection8.png",
    "/picture_OWcom/Press/PressTurcCorrection9.png",
    "/picture_OWcom/Press/PressTurcCorrection10.png",
    "/picture_OWcom/Press/PressTurcCorrection11.png",
    "/picture_OWcom/Press/PressTurcCorrection12.png",
  ];
  public galeryPress7: string[] = [
    "/picture_OWcom/Press/PressTurcFinal1.png",
    "/picture_OWcom/Press/PressTurcFinal2.png",
    "/picture_OWcom/Press/PressTurcFinal3.png",
    "/picture_OWcom/Press/PressTurcFinal4.png",
    "/picture_OWcom/Press/PressTurcFinal5.png",
    "/picture_OWcom/Press/PressTurcFinal6.png",
    "/picture_OWcom/Press/PressTurcFinal7.png",
    "/picture_OWcom/Press/PressTurcFinal8.png",
    "/picture_OWcom/Press/PressTurcFinal9.png",
    "/picture_OWcom/Press/PressTurcFinal10.png",
    "/picture_OWcom/Press/PressTurcFinal11.png",
    "/picture_OWcom/Press/PressTurcFinal12.png",
  ];
  public galeryPress8: string[] = [
    "/picture_OWcom/Criticism/CinemaCriticism1.png",
    "/picture_OWcom/Criticism/CinemaCriticism2.png",
  ];
  //tableau de stockage des carousels
public galeryCarousel: string[][] =[
    this.galeryMagazine,
    this.galeryPress1,
    this.galeryPress2,
    this.galeryPress3,
    this.galeryPress4,
    this.galeryPress5,
    this.galeryPress6,
    this.galeryPress7,
    this.galeryPress8,
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
  .h4{
    color: black;
  }
  .img_exemple{
    height: 450px;
    width: auto;
    margin: 40px;
  }
</style>
