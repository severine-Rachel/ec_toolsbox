<template>
  <div id="Perf">
    <Header />
    <Menu />
    <h3>PERFORMANCES D'ÉTUDIANTS IUT GEII</h3>
    <p>
      Le département Génie électrique et informatique industrielle (GEII) de
      l’IUT d’Angers organise, depuis 2017, son concours de performances
      artistiques qui implique près de cent étudiants de première année du DUT
      GEII. La grande finale du « Perf’Art GEII » met à l’honneur une dizaine
      d’équipes sélectionnées lors de la phase qualificative. Lors de la
      dernière édition, c’est "W@tched", dénonçant la surveillance des masses,
      et "Crève-cœur", abordant la question des féminicides, qui ont
      respectivement remporté le prix du jury et le prix du public…
    </p>
    <p>
      Par leur engagement sur scène, les étudiants défendent leur point de vue
      sur des thèmes riches et variés qui leur tiennent à cœur{{ "\xa0" }}:
      surconsommation, sens de la vie, addiction aux réseaux sociaux, souffrance
      animale ou encore harcèlement scolaire… Une grande fête de la créativité,
      une ouverture sur le monde mais aussi et surtout un beau moment de
      partage.
    </p>
    <h4>
      Le Perf’Art GEII en images
    </h4>
    <b-row align-h="center">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/fNd2hcmQtik"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      >
      </iframe>
    </b-row>
    <p class="text-vid">Chaîne : Perf'Art GEII Angers</p>

    <h4>La note d’intention{{ "\xa0" }}: un outil pour créer sa performance</h4>
    <a
      class="subtitle-link  pdf-line"
      href="/pdf_perf/IntentPerf.pdf"
      download="NoteIntentionPerfArt"
    >
      La note d’intention{{ "\xa0" }} Perf’Art
      <img class="logo-pdf" src="../../assets/logo-pdf.png" />
    </a>
    <h4>
      Exemple de performance
    </h4>
    <p>
      <strong> «{{ "\xa0" }}W@tched{{ "\xa0" }}»</strong>. Souriez... Vous êtes
      filmés. Ou comment dénoncer la surveillance de masse ? Performance
      réalisée par des étudiants en IUT GEII (Arthur, Léo et Mathias) dans la
      ville d'Angers puis sur scène avec une douzaine de performeurs...
    </p>
    <b-row align-h="center">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/57CjCvvaCdg"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </b-row>
    <p class="text-vid">Contenu soumis à des droits d'auteurs</p>
    <h4>
      Autres exemples de performances…
    </h4>
    <Video v-bind:galery-video="videoPerf" v-bind:id-video="'perf'"></Video>
    <NextPrevBtn v-bind:nxtprev-list="nxtprevArtPerfStudents" />
    <Footer />
  </div>
</template>
<style lang="scss">
#Perf {
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
import { BIcon, BIconUpload } from "bootstrap-vue";
import NextPrevBtn from "@/components/NextPrevBtn.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    Video,
    BIcon,
    BIconUpload,
    NextPrevBtn,
    Footer,
  },
})
export default class ArtPerfStudents extends Vue {
  protected videoPerf = [
    {
      videoSrc: "https://www.youtube.com/embed/fizlZKMboSE",
      videoTitle: "Océans Bienséants",
      videoRoot: "Contenu soumis à des droits d'auteur",
    },
    {
      videoSrc: "https://www.youtube.com/embed/uxf2s2HgSqw",
      videoTitle: "Jetez moi",
      videoRoot: "Contenu soumis à des droits d'auteur",
    },
    {
      videoSrc: "https://www.youtube.com/embed/juhGAAl08zw",
      videoTitle: "Évolution technologique et corps",
      videoRoot: "Contenu soumis à des droits d'auteur",
    },
    {
      videoSrc: "https://www.youtube.com/embed/jKJ6cm-zUdM",
      videoTitle: "Du champ des possibles",
      videoRoot: "Contenu soumis à des droits d'auteur",
    },
  ];
  protected nxtprevArtPerfStudents = {
    BoolPrev: true,
    BoolNext: true,
    PrevImage: "/thumbnail7.png",
    NextImage: "/thumbnail2.png",
    PrevLink: "/PerformanceArtistique/Origines",
    NextLink: "/PerformanceArtistique/CorpusdeTexte",
  };
}
</script>
