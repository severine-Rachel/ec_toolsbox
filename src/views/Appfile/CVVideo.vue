<template>
  <div id="CVVideo">
    <Header></Header>
    <Menu></Menu>
    <h3 id="videoCV">
      LE CV VIDÉO
    </h3>
    <p class=" none-margin-bottom">
      Le CV vidéo vous donne une occasion de vous démarquer, de mettre davantage
      de chances de votre côté. Il montre également que vous maîtrisez les
      nouveaux outils de communication, que vous vous exprimez avec aisance à
      l'oral et éventuellement en plusieurs langues.
    </p>

    <strong>
      <a
        href="https://www.cadremploi.fr/editorial/conseils/conseils-candidature/cv/detail/article/les-10-commandements-du-cv-video.html"
        target="_blank"
        class="subtitle-link"
        >Conseils pour un bon CV vidéo <b-icon icon="box-arrow-right"></b-icon
      ></a>
    </strong>

    <h4>
      Réaliser son CV vidéo avec Fyte4U
    </h4>

    <b-row align-h="center">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/sZhHXX8o-LM"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </b-row>
    <p class="text-vid">Chaîne{{'\xa0'}}: Fyte4U</p>
    <h4>
        Exemples de CV vidéo
      </h4>
    <p>
      Marketing, traduction, design... Tous ces CV vidéo ne manquent pas d'idées
      et vous fournissent la preuve qu'il est toujours possible de trouver des idées
      pour vour exprimer par l'audiovisuel, peu importent votre domaine d'études et vos
      compétences.
    </p>
    <Video v-bind:galery-video="videoCVVideo"  v-bind:id-video="'cv2'"></Video>
    <NextPrevBtn v-bind:nxtprev-list="nxtprevCVVideo"></NextPrevBtn>
    <Footer></Footer>
  </div>
</template>
<style lang="scss">
#CVVideo{
  scroll-behavior: smooth;
  overflow:auto;
  height:100vh;
}
</style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Video from "@/components/Video.vue";
import { BIcon, BIconBoxArrowRight } from "bootstrap-vue";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import NextPrevBtn from "@/components/NextPrevBtn.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Video,
    BIcon,
    BIconBoxArrowRight,
    Header,
    Menu,
    NextPrevBtn,
    Footer,
    
  },
})
export default class CVVideo extends Vue {
  public videoCVVideo = [
    {
      videoSrc: "https://www.youtube.com/embed/Fz6bZaPzPuw",
      videoTitle: "Le film d'animation - Dai Duong Tran",
      videoRoot: "Chaîne :  Dai Duong Tran",
    },
    {
      videoSrc: "https://www.youtube.com/embed/SHY3Etcag4w",
      videoTitle: "Génialement simple - Cristina Castro",
      videoRoot: "Chaîne :   Cristina Castro",
    },
    {
      videoSrc: "https://www.youtube.com/embed/0OyPyRkwszs",
      videoTitle: "Agréable à lire - Patrice Co",
      videoRoot: "Chaîne : Patrice Co",
    },
    {
      videoSrc: "https://www.youtube.com/embed/OPMZoS1CcAI",
      videoTitle: "cerveau disponible Edouard PRIET",
      videoRoot: "Chaîne :  edouard priet",
    },
    {
      videoSrc: "https://www.youtube.com/embed/1SkeJ5fzk6Q",
      videoTitle: "CV Jean-Benoist Werth",
      videoRoot: "Chaîne :   Jean-Benoist Werth",
    },
    {
      videoSrc: "https://www.youtube.com/embed/ZusmOZ65NPs",
      videoTitle: "CV vidéo Sophie Garrigues",
      videoRoot: "Chaîne : sophie",
    },
    {
      videoSrc: "https://www.dailymotion.com/embed/video/x72m5n",
      videoTitle: "Charlotte Ruault CV",
      videoRoot: "Chaîne :  krakotte_53",
    },
  ];
  public nxtprevCVVideo =
  {
    BoolPrev: true,
    BoolNext: true,
    PrevImage: "/thumbnail3.png",
    NextImage: "/thumbnail5.png",
    PrevLink: "/CV/Outils",
    NextLink: "/CV/Aller_Plus_Loin",
  };
}
</script>
