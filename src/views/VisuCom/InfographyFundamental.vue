<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3 id="InfographyFundamental">
      LES FONDAMENTAUX DE L'INFOGRAPHIE
    </h3>
    <p>
      L’infographie est un format de communication très utilisé sur le web et
      dans la presse, réalisée à l’aide d’un outil informatique. Elle propose au
      lecteur une information illustrée en recourant à des graphiques, des
      chiffres, des images et du texte. Son objectif est de restituer sous un
      format visuel et synthétique un contenu ciblé. Percutante et attrayante,
      l’infographie privilégie une organisation rigoureuse des données afin de
      permettre au lecteur d’appréhender rapidement l’information rassemblée.
      Pourquoi l’infographie est-elle si efficace{{'\xa0'}}? Comment créer sa propre
      infographie{{'\xa0'}}? Quels sont les outils en ligne pour la concevoir{{'\xa0'}}?
    </p>
    <h4>
      Comprendre l'infographie grâce à l'infographie
    </h4>
    <p>
      Créer une infographie c'est proposer une organisation visuelle de
      l'information avec un message, une rédaction et une visualisation.
    </p>
    <Galery v-bind:galery-picture="galeryInfographyFundamental"></Galery>

    <h4 class="breath">
      Réaliser une infographie : comment et avec quels outils ?
    </h4>
    <b-row align-h="center">
      <iframe
        src="//www.slideshare.net/slideshow/embed_code/key/clMtUzqEiuZp3S"
        width="595"
        height="485"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        scrolling="no"
        style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;"
        allowfullscreen
      >
      </iframe>
    </b-row>
    <p class="text-vid">De Virginie Colombel</p>
    <NextPrevBtn
      v-bind:nxtprev-list="nxtprevInfographyFundamental"
    ></NextPrevBtn>
    <Footer></Footer>
  </div>
</template>
<style lang="scss"></style>

<script lang="ts">
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import { Component, Vue } from "vue-property-decorator";
import Galery from "@/components/Galery.vue";
import NextPrevBtn from "@/components/NextPrevBtn.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Galery,
    Header,
    Menu,
    NextPrevBtn,
    Footer,
  },
})
export default class InfographyFundamental extends Vue {
  public galeryInfographyFundamental: string[] = [
    "picture_Infography/fundamental_infography.png",
    "picture_Infography/fundamental_infography2.jpg",
  ];
  public nxtprevInfographyFundamental = {
    BoolPrev: false,
    BoolNext: true,
    PrevImage: "",
    NextImage: "/thumbnail6.png",
    PrevLink: "",
    NextLink: "/Infographie/Astuces",
  };
}
</script>
