<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>CONSEILS ET ASTUCES</h3>

    <Video v-bind:galery-video="videoSpeech"></Video>

    <p><strong>Pour aller plus loin: la prise de parole au féminin</strong></p>
    <p>
      <a href="/pdf_OWcom/female_Speaking.pdf" download="Prise_Parole_Feminin"
        >Article de Sylvie Lec Herbonnier, «Les étudiantes s’arment pourprendre
        la parole», Le Monde, 14 mars 2020.</a
      >
    </p>
    <p>
      Dans les écoles de management comme à Sciences Po, des formations pour
      apprendre l’aisance à l’oral visent particulièrement les femmes, moins
      encouragées à faire preuve d’éloquence.
    </p>

    <Footer></Footer>
  </div>
</template>

<style></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Video from "@/components/Video.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    Video,
    Footer,
  },
})
export default class SpeechTips extends Vue {
  public videoSpeech = [
    {
      videoSrc: "https://www.youtube.com/embed/wkOk1wdTdrQ ",
      videoTitle: "L’art de bien parler",
      videoRoot: "Chaîne : Evolution Factory",
    },
    {
      videoSrc: "https://www.youtube.com/embed/IDZGAbCY_Zw",
      videoTitle: "Comment bien communiquer en public",
      videoRoot: "Chaîne : Jean Sommer Coach Vocal ",
    },
    {
      videoSrc: "https://www.youtube.com/embed/DM5rrmigZZU",
      videoTitle: "Les secrets d’une intervention orale réussie",
      videoRoot: "Chaîne : DunodVideos",
    },
    {
      videoSrc: "https://www.youtube.com/embed/um2TfrSGJ7o",
      videoTitle: "7 astuces pour bien parler en public",
      videoRoot: "Chaîne : Cyril Chambard",
    },
    {
      videoSrc: "https://www.youtube.com/embed/yV4Ia3qYj3c",
      videoTitle: "Comment vaincre la peur de parler en public ? 1",
      videoRoot: "Chaîne : QuestionEntretien",
    },
    {
      videoSrc: "https://www.youtube.com/embed/YbhOsZtWuMY",
      videoTitle: "Comment vaincre la peur de parler en public ? 2",
      videoRoot: "Chaîne : Cyril Chambard",
    },
    {
      videoSrc: "https://www.youtube.com/embed/zApHS2LJxIk",
      videoTitle: "Comment parler en public sans stress ?",
      videoRoot: "Chaîne : Français avec Pierre",
    },
    {
      videoSrc: "https://www.youtube.com/embed/6JG4_6sUPvg",
      videoTitle: "Comment bien accrocher son auditoire ?",
      videoRoot: "Chaîne : Cyril Chambard",
    },
    {
      videoSrc: "https://www.youtube.com/embed/kk0yINlr2ro",
      videoTitle:
        "Quand prendre la parole devient un jeu : concours d’éloquence HEC 1",
      videoRoot: "Chaîne : HEC Paris",
    },
    {
      videoSrc: "https://www.youtube.com/embed/x8mGosE1zH4",
      videoTitle:
        "Quand prendre la parole devient un jeu : concours d’éloquence HEC 2",
      videoRoot: "Chaîne : HEC Paris",
    },
  ];
}
</script>
