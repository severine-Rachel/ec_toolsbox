<template>
  <div>
    <h3 id="tipsLetter">
      CONSEILS ET ASTUCES
    </h3>
    <Video v-bind:galery-video="videoLetterTips"></Video>

    <a
      href="https://baborlelefan.com/2013/12/07/enquete-faut-tenter-des-candidatures-originales/"
      target="_blank"
      class="subtitle-link"
     
    >
      <strong>Pour dédramatiser 
      <b-icon icon="box-arrow-right"></b-icon
    ></strong></a>

    <p>
      N’hésitez pas à faire un rappel de la charte graphique de votre CV dans
      votre lettre de motivation. Modèles de lettres de motivation graphiques&nbsp;:
    </p>
    <p>
      <a
        href="https://fr.venngage.com/templates/resumes/cover-letters"
        alt="vennage"
        target="_blank" draggable="false"
        ><img
          class="Help_Builder"  
          src="/picture_letter/LetterTool1.jpg" draggable="false"
        /><b-icon icon="box-arrow-right"></b-icon>
      </a>
      <a
        href="https://fr.venngage.com/blog/modeles-lettres-de-motivation/"
        alt="vennage"
        target="_blank" draggable="false"
        ><img
          class="Help_Builder"  
          src="/picture_letter/LetterTool2.jpg" draggable="false"
        /><b-icon icon="box-arrow-right"></b-icon>
      </a>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Video from "@/components/Video.vue";
import { BIcon, BIconBoxArrowRight } from "bootstrap-vue";
@Component({
  components: {
    Video,
    BIcon,
    BIconBoxArrowRight,
  },
})
export default class LetterKeys extends Vue {
  public videoLetterTips = [
    {
      videoSrc: "https://www.youtube.com/embed/cZXIs1LWw8I",
      videoTitle: "10 astuces pour écrire votre lettre de motivation",
      videoRoot: "Chaîne : Pôle emploi",
    },
    {
      videoSrc: "https://www.youtube.com/embed/Kuquw_MFX3U",
      videoTitle: "Comment structurer sa lettre de motivation ?",
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
}
</script>
