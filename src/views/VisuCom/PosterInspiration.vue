<template>
  <div id="PosterInsp">
    <Header />
    <Menu />
    <h3>POUR TROUVER L'INSPIRATION...</h3>
    <h4>
      Sites ressources sur l’affiche et les arts
    </h4>
    <p>
      Communication par l'image - et sur le web
    </p>
    <p>
      <a
        href="http://www.pearltrees.com/helfr/communication-par-image-sur/id24968027"
        alt=" a-g-i"
        class="link-help-builder"
        
        target="_blank"
        ><img class="Help_Builder" src="/picture_Visu/Tool4.jpg"/><img
          class="supperposition"
          src="../../assets/Boxarrowright.png"
          draggable="false"
      /></a>
    </p>
    <p>
      Alliance graphique internationale
    </p>
    <p>
      <a
        href="https://a-g-i.org/"
        class="link-help-builder"
        
        alt=" a-g-i"
        target="_blank"
        ><img class="Help_Builder" src="/picture_Visu/Tool1.jpg"/><img
          class="supperposition"
          src="../../assets/Boxarrowright.png"
          draggable="false"
      /></a>
    </p>
    <p>
      Posters for tomorrow : galerie d’exemples
    </p>
    <p>
      <a
        href="http://www.posterfortomorrow.org/en/gallery"
        alt=" posterfortomorrow"
        class="link-help-builder"
        
        target="_blank"
        ><img class="Help_Builder" src="/picture_Visu/Tool2.jpg"/><img
          class="supperposition"
          src="../../assets/Boxarrowright.png"
          draggable="false"
      /></a>
    </p>
    <h4>
      Le choix de la police de caractères
    </h4>
    <p>
      Une minisérie de 12 courts métrages à retrouver sur l’histoire des polices
      de caractères{{ "\xa0" }}! Une bonne source d’inspiration pour vos futurs
      supports de communication{{ "\xa0" }}? En voici quelques-uns{{ "\xa0" }}!
    </p>
    <Video v-bind:galery-video="videoFont" v-bind:id-video="'poster'"></Video>

    <NextPrevBtn v-bind:nxtprev-list="nxtprevPosterInspiration" />
    <Footer />
  </div>
</template>

<style lang="scss">
#PosterInsp {
  scroll-behavior: smooth;
  overflow: auto;
  height: 100vh;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Video from "@/components/Video.vue";
import { BIcon, BIconBoxArrowRight } from "bootstrap-vue";
import NextPrevBtn from "@/components/NextPrevBtn.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    Video,
    Footer,
    BIconBoxArrowRight,
    NextPrevBtn,
    BIcon,
  },
})
export default class PosterInspiration extends Vue {
  protected videoFont = [
    {
      videoSrc: "https://www.dailymotion.com/embed/video/x284c63",
      videoTitle: "Sacrés caractères - Futura",
      videoRoot: "Chaîne : France Culture",
    },
    {
      videoSrc: "https://www.dailymotion.com/embed/video/x284bzz",
      videoTitle: "Sacrés caractères - Times",
      videoRoot: "Chaîne : France Culture",
    },
    {
      videoSrc: "https://www.dailymotion.com/embed/video/x284c6l",
      videoTitle: "Sacrés caractères - Garamond",
      videoRoot: "Chaîne : France Culture",
    },
    {
      videoSrc: "https://www.dailymotion.com/embed/video/x284c9t",
      videoTitle: "Sacrés caractères - Comic Sans",
      videoRoot: "Chaîne : France Culture",
    },
    {
      videoSrc: "https://www.dailymotion.com/embed/video/x284c7s",
      videoTitle: "Sacrés caractères - Trajan",
      videoRoot: "Chaîne : France Culture",
    },
    {
      videoSrc: "https://www.dailymotion.com/embed/video/x284c2z",
      videoTitle: "Sacrés caractères - Cooper Black",
      videoRoot: "Chaîne : France Culture",
    },
    {
      videoSrc: "https://www.dailymotion.com/embed/video/x284c57",
      videoTitle: "Sacrés caractères - Bodoni",
      videoRoot: "Chaîne : France Culture",
    },
    {
      videoSrc: "https://www.dailymotion.com/embed/video/x284c8v",
      videoTitle: "Sacrés caractères - Transport",
      videoRoot: "Chaîne : France Culture",
    },
  ];
  protected nxtprevPosterInspiration = {
    BoolPrev: true,
    BoolNext: false,
    PrevImage: "/thumbnail1.png",
    NextImage: "",
    PrevLink: "/Affiche/EnPratique",
    NextLink: "",
  };
}
</script>
