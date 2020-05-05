<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>POUR TROUVER L'INSPIRATION...</h3>
    <p>
      <strong>
        Le choix de la police de caractères
      </strong>
    </p>
    <p>
      Une minisérie de 12 courts métrages à retrouver sur l’histoire des polices
      de caractères ! Une bonne source d’inspiration pour vos futurs supports de
      communication ? En voici quelques-uns !
    </p>
    <Video v-bind:galery-video="videoFont"></Video>
    <p>
      <strong>
        Sites sur l’affiche et les arts
      </strong>
    </p>
    <p>Alliance graphique internationale
      <a
        href="https://a-g-i.org/"
        alt=" a-g-i"
        target="_blank"
        ><img class="Help_Builder" src="/picture_Visu/Tool1.jpg"/><b-icon
          icon="box-arrow-right"
        ></b-icon
      ></a>
    </p>
    <p>Posters for tomorrow : galerie d’exemples
      <a
        href="http://www.posterfortomorrow.org/en/gallery"
        alt=" posterfortomorrow"
        target="_blank"
        ><img class="Help_Builder" src="/picture_Visu/Tool2.jpg"/><b-icon
          icon="box-arrow-right"
        ></b-icon
      ></a>
    </p>
    <Footer></Footer>
  </div>
</template>

<style lang="scss"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Video from "@/components/Video.vue";
import {BIcon, BIconBoxArrowRight} from "bootstrap-vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    Video,
    Footer,
    BIconBoxArrowRight,
    BIcon,
  },
})
export default class PosterInspiration extends Vue {
  public videoFont = [
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
}
</script>
