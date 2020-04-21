<template>
  <div>
    <h3 id="tipsInterview">
      CONSEILS ET ASTUCES
    </h3>
    <Video v-bind:galery-video="videoInterviewTips"></Video>
    <p><strong>Pour dédramatiser…</strong></p>
    <Video v-bind:galery-video="videoInterviewRelax"></Video>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Video from "@/components/Video.vue";
@Component({
  components: {
    Video,
  }
})
export default class InterviewTips extends Vue {
    public videoInterviewTips = [
    {
      videoSrc: "https://www.youtube.com/embed/Fsb3CeFWoDs",
      videoTitle: "Conseils de professionnels",
      videoRoot: "Chaîne :  Jérôme et Valentin",
    },
    {
      videoSrc: "https://www.youtube.com/embed/RAFrOBMUITk",
      videoTitle: "Trucs de chasseurs de tête",
      videoRoot: "Chaîne : Les Vidéos du Succès",
    },
    {
      videoSrc: "https://www.youtube.com/embed/LQqaRuE3Pwk",
      videoTitle: "Les 10 erreurs à éviter en entretien",
      videoRoot: "Chaîne : QuestionEntretien",
    },
    {
      videoSrc: "https://www.youtube.com/embed/XnBAvuiOSGk",
      videoTitle: "Astuces de recruteurs",
      videoRoot: "Chaîne :   cadremploi",
    },

       {
      videoSrc: "https://www.youtube.com/embed/ag7rkskWsvw",
      videoTitle: "Parlez-moi de vous : le piège",
      videoRoot: "Chaîne :  QuestionEntretien",
    },
    {
      videoSrc: "https://www.youtube.com/embed/bD8_sFAgia0",
      videoTitle: "L’entretien collectif",
      videoRoot: "Chaîne :  Winentretien",
    },
    {
      videoSrc: "https://www.youtube.com/embed/4Fd7UJZPIOQ",
      videoTitle: "Le truc qui tue en entretien",
      videoRoot: "Chaîne : cadremploi",
    },
    {
      videoSrc: "https://www.youtube.com/embed/o8LxPZVNQNk",
      videoTitle: "Quand votre corps parle :",
      videoRoot: "Chaîne :   cadremploi",
    },
      {
      videoSrc: "https://www.youtube.com/embed/916bTmTMLng",
      videoTitle: "Comment négocier en entretien :",
      videoRoot: "Chaîne : cadremploi",
    },
    {
      videoSrc: "https://www.youtube.com/embed/Lbz30MjQP3k",
      videoTitle: "Recettes de recrutement avec Michel et Augustin :",
      videoRoot: "Chaîne :   cadremploi",
    },
  ];
  public videoInterviewRelax = [
    {
      videoSrc: "https://www.youtube.com/embed/MQjvpPpAjgo",
      videoTitle: "Bref, j’ai passé un entretien",
      videoRoot: "Chaîne :  bref.",
    },
    {
      videoSrc: "https://www.dailymotion.com/embed/video/x3hdpcd",
      videoTitle: "Je suis UN entretien",
      videoRoot: "Chaîne : Nikon Film Festival",
    },
  ]
}
</script>
