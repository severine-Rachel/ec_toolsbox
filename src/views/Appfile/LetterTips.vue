<template>
  <div id="LetterTips">
    <Header />
    <Menu />
    <h3 id="tipsLetter">
      CONSEILS ET ASTUCES
    </h3>
    <Video v-bind:galery-video="videoLetterTips"   v-bind:id-video="'letter1'"></Video>

    <a
      href="https://baborlelefan.com/2013/12/07/enquete-faut-tenter-des-candidatures-originales/"
      target="_blank"
      class="subtitle-link"
    >
      <strong>Pour dédramatiser <b-icon icon="box-arrow-right" /></strong
    ></a>

    <p>
      N’hésitez pas à faire un rappel de la charte graphique de votre CV dans
      votre lettre de motivation. Modèles de lettres de motivation graphiques{{
        "\xa0"
      }}:
    </p>
    <p>
      <a
        href="https://fr.venngage.com/templates/resumes/cover-letters"
        alt="vennage"
        class="link-help-builder"
        
        target="_blank"
        draggable="false"
        ><img
          class="Help_Builder"
          src="/picture_letter/LetterTool1.jpg"
          draggable="false"
        /><img
          class="supperposition"
          src="../../assets/Boxarrowright.png"
          draggable="false"
      /></a>
      <a
        href="https://fr.venngage.com/blog/modeles-lettres-de-motivation/"
        alt="vennage"
        class="link-help-builder"
        
        target="_blank"
        draggable="false"
        ><img
          class="Help_Builder"
          src="/picture_letter/LetterTool2.jpg"
          draggable="false"
        /><img
          class="supperposition"
          src="../../assets/Boxarrowright.png"
          draggable="false"
      /></a>
    </p>
    <NextPrevBtn v-bind:nxtprev-list="nxtprevLetterTips" />
    <Footer />
  </div>
</template>
<style lang="scss">
#LetterTips {
  scroll-behavior: smooth;
  overflow: auto;
  height: 100vh;
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
export default class LetterKeys extends Vue {
  protected videoLetterTips = [
    {
      videoSrc: "https://www.youtube.com/embed/cZXIs1LWw8I",
      videoTitle: "10 astuces pour écrire votre lettre de motivation",
      videoRoot: "Chaîne : Pôle emploi",
    },
    {
      videoSrc: "https://www.youtube.com/embed/Kuquw_MFX3U",
      videoTitle: "Comment structurer votre lettre de motivation\xa0?",
      videoRoot: "Chaîne : digiSchool",
    },
    {
      videoSrc: "https://www.youtube.com/embed/fYKnSfCR3_0",
      videoTitle: "Les 7 erreurs à éviter dans une lettre de motivation ",
      videoRoot: "Chaîne : QuestionEntretien",
    },
    {
      videoSrc: "https://www.youtube.com/embed/sE72wb2UsM0",
      videoTitle: "Les règles d’or de la lettre de motivation ",
      videoRoot: "Chaîne :  1er emploi, jobs, stages",
    },
  ];
  protected nxtprevLetterTips = {
    BoolPrev: true,
    BoolNext: true,
    PrevImage: "/thumbnail4.png",
    NextImage: "/thumbnail3.png",
    PrevLink: "/Lettre_de_Motivation/Fondamentaux",
    NextLink: "/Lettre_de_Motivation/Analyse",
  };
}
</script>
