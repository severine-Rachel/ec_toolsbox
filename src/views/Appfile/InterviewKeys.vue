<template>
  <div>
    <h3 id="keysInterview">
      LES FONDAMENTAUX : FICHES-CLEFS
    </h3>
     <Pdf v-bind:galery-pdf="pdfInterview"></Pdf>

    <Galery v-bind:galery-picture="galeryInterview"></Galery>

    <a
      class="subtitle-link"
      href="https://www.univ-angers.fr/fr/formations/insertion-professionnelle/ip-box/entretien-de-recrutement.html?search-keywords=entretien+recrutement"
      target="_blank"
    >
     <i> Source :</i> 
      www.univ-angers.fr/fr/formations/insertion-professionnelle/ip-box <b-icon icon="box-arrow-right"></b-icon>
    </a>
    
    <h4>
      Les étapes de l’entretien de recrutement
    </h4>
    <p>
      Pour limiter les surprises, préparez-vous l’entretien de recrutement qui
      se décompose généralement en 5 temps forts. Ces étapes peuvent apparaitre
      dans un ordre différent, selon votre interlocuteur. Dans tous les cas,
      c’est lui qui donne le tempo des échanges. Vous aurez entre 30 minutes et
      1 heure pour convaincre.
    </p>
    <img 
    class="vertical"
    src="/picture_interview/step_Interview.png"
    >
   
    
    <h4>
      Quelle tenue adopter ?
    </h4>
    <p>
      Il n’est pas question ici d’être prescripteur d’un quelconque style. Il
      s’agit seulement de questionner les stéréotypes et les idées reçues qui
      peuvent façonner le jugement de certains recruteurs ou qui président à
      certains secteurs.
    </p>
    <b-row align-h="center" class="insert-video">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Ckbbx9kIGnc"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </b-row>

    <a
      href="https://www.keljob.com/articles/5-attitudes-qui-impressionnent-les-recruteurs-en-entretien-d-embauche"
      target="_blank"
      class="subtitle-link"
    >
      <strong> 5 Attitudes pour marquer le recruteur </strong>

      <b-icon icon="box-arrow-right"></b-icon>
    </a>
    <p></p>
    <a
      href="https://www.regionsjob.com/conseils/reussir-entretien-skype.html"
      target="_blank"
      class="subtitle-link"
    >
      <strong>Comment réussir un entretien à distance </strong>
      <b-icon icon="box-arrow-right"></b-icon>
    </a>
  </div>
</template>

<style lang="scss"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Pdf from "@/components/Pdf.vue";
import Galery from "@/components/Galery.vue";
import { BIcon, BIconBoxArrowRight } from "bootstrap-vue";
@Component({
  components: {
    Pdf,
    Galery,
    BIcon,
    BIconBoxArrowRight,
  },
})
export default class InterviewKeys extends Vue {
  public galeryInterview: string[] = [
    "/picture_interview/fundamentals_Interview_What'sit.png",
    "/picture_interview/fundamentals_Interview_Keys.png",
    "/picture_interview/fundamentals_Interview_Question.png",
    "/picture_interview/fundamentals_Interview_Question2.png",
    "/picture_interview/fundamentals_Interview_Grid.png",
  ];
  public pdfInterview = [
    {
      pdfLink: "/pdf_interview/fundamental_Interview_What'sit.pdf",
      pdfDownload: "Qu'est-ce-qu'un-entretien?",
      TxtPdf: "Fiche 1 : Qu’est-ce qu’un entretien ? ",
    },
    {
      pdfLink: "/pdf_interview/fundamentals_Interview_Keys.pdf",
      pdfDownload: "10PointsClésEntretien",
      TxtPdf: "Fiche 2 : Les 10 points clés de l’entretien",
    },
    {
      pdfLink: "/pdf_interview/fundamental_Interview_Question.pdf",
      pdfDownload: "QuestionType1Entretien",
      TxtPdf: "Fiche 3 : Les questions types 1",
    },
    {
      pdfLink: "/pdf_interview/fundamental_Interview_Question2.pdf",
      pdfDownload: "QuestionType2Entretien",
      TxtPdf: "Fiche 4 : Les questions types 2",
    },
    {
      pdfLink: "/pdf_interview/fundamentals_Interview_Grid.pdf",
      pdfDownload: "GrilleAnalyseEntretien",
      TxtPdf: "Fiche 5 : Grille d’analyse recruteur",
    },
  ];
}
</script>
