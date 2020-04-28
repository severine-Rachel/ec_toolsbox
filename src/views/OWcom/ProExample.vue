<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>EXEMPLES DE RÉALISATIONS</h3>
    <p></p>
    <div style="text-align: center">
    <b-row class="justify-content-md-center">
    <!--affichage des images stockées dans galleryCover-->
      <div class="colonne" v-for="(Galery, index) in galery" :key="Galery">
        <h4>{{galeryTitres[index]}}</h4>
        <div class="mos_content" v-on:click="displayGalery(Galery)">
          <div class="img_align" v-for="carousel in Galery" :key="carousel">
            <span>
              <img class="mosaique" v-bind:src="carousel[0]" />
            </span>
          </div>
        </div>
      </div>
    </b-row>
    <b-row>
      <div class="img_align" v-if="galerySelected">
        <div 
        v-for="(Galery,index) in galery" :key="Galery" 
        v-show="index === nbGalery"
        >

          <div class="img_align" 
            v-for="carousel in Galery" :key="carousel"
            v-on:click="displayCarousel(carousel)"
            >
            <img class="imgCV" v-bind:src="carousel[0]" />
          </div>
        </div>
      </div>
    </b-row>
    <b-row>
      <div v-if="carouselSelected" class="div-align">
        <div v-for="(Galery,index) in galery" :key="Galery">
          <span v-if="index === nbGalery">
          <Carousel
            v-for="(carousel,index) in Galery" 
            :key="carousel"
            v-show="(nbCarousel-1) === index"
            >
            <span v-for="slide in carousel" :key="slide">
              <slide>
                <img class="img_slide" v-bind:src="slide" />
              </slide>
            </span>
          </Carousel>
          </span>
        </div>
      </div>
    </b-row>
    <!--affichage du carousel correspondant a l'image sélectionnée dans 'display()'-->
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
  public galerySelected = false;
  public carouselSelected = false;
  public nbCarousel = 0;
  public nbGalery = 0;
  public nb=0;
  public galeryTitres: string[] = [
    "Magazine de GEII de l'IUT",
    "Critique de cinéma",
    "Analyse comparative d'articles de presse",
    "Le dossier de presse"

  ];
  //tableaux de stockage des images des carousels
  public carouselMagazine1: string[] = [
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
  public carouselCriticCinema: string[] = [
    "/picture_OWcom/Criticism/CinemaCriticism1.png",
    "/picture_OWcom/Criticism/CinemaCriticism2.png",
  ];
  public carouselPress1: string[] = [
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
  public carouselPress2: string[] = [
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
  public carouselPress3: string[] = [
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
  public carouselPressCovid1: string[] = [
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
  public carouselPressCovid2: string[] = [
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
  public carouselPressTurc1: string[] = [
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
  public carouselPressTurc2: string[] = [
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
  //tableau de stockage des carousels
public galeryPressFolder: string[][]=[
  this.carouselPress1,
  this.carouselPress2,
  this.carouselPress3,
];
public galeryPress: string[][]=[
  this.carouselPressCovid1,
  this.carouselPressCovid2,
  this.carouselPressTurc1,
  this.carouselPressTurc2,
];

public galeryMagazine: string[][] =[
    this.carouselMagazine1,
];
public galeryCritic: string[][]=[
    this.carouselCriticCinema,
];
public galery: string[][][]=[
  this.galeryMagazine,
  this.galeryCritic,
  this.galeryPressFolder,
  this.galeryPress,
];

public displayGalery(src: string[][]): void {
    this.carouselSelected = false;
    this.nbGalery = this.galery.indexOf(src);
    if (this.galerySelected == false) {
      this.galerySelected = true;
    }
}
public displayCarousel(src: string[]): void {
    this.nbCarousel = (this.galery[this.nbGalery].indexOf(src))+1;
    if (this.carouselSelected == false) {
      this.carouselSelected = true;
    }
}
}
</script>
<style>
  .img_exemple{
    height: 450px;
    width: auto;
    margin: 40px;
  }
  .img_slide{
    width: 50%;
  }
  .mosaique{
    height: 200px;
    max-width:120px;
    max-height:160px;
    width: auto;
    height: auto;
    margin: 0px !important;
  }
  .colonne{
    width:22% !important;
  }
  .img_align{
    display: inline-block;
    margin-right: auto;
    margin-left: auto;
  }
  .mos_content{
    border-color: rgb(56, 133, 172);
    border-style: solid;
    background-color: #BCE8FF ;
    padding: 10px !important;
    margin: 10px !important;
  }
  .div-align{
    width: 100%;
  }
</style>
