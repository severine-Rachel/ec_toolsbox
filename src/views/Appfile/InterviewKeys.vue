<template>
  <div>
    <h3 id="keysInterview">
      LES FONDAMENTAUX&nbsp;: FICHES-CLEFS
    </h3>
    <p>
      Vous trouverez par ces fiches, le moyen de vous préparer aux questions
      types ainsi que le comportement à adopter.
    </p>
    <Pdf v-bind:galery-pdf="pdfInterview"></Pdf>

    <Galery v-bind:galery-picture="galeryInterview"></Galery>

    <a
      class="subtitle-link"
      href="https://www.univ-angers.fr/fr/formations/insertion-professionnelle/ip-box/entretien-de-recrutement.html?search-keywords=entretien+recrutement"
      target="_blank"
    >
      <i> Source :</i>
      www.univ-angers.fr/fr/formations/insertion-professionnelle/ip-box
      <b-icon icon="box-arrow-right"></b-icon>
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
      src="/picture_interview/step_Interview_Intro.png"
      id="center"
       draggable="false"
    />
    <ul class="list-int">
      <li class="step-int">
        Étape 1

        <img
          class="vertical img-int"
          src="/picture_interview/step_Interview_1.png"
          id="center"
           draggable="false"
        />
      </li>
      <li class="step-int">
        Étape 2
        <img
          class="vertical img-int"
          src="/picture_interview/step_Interview_2.png"
          id="center"
           draggable="false"
        />
      </li>
      <li class="step-int">
        Étape 3
        <img
          class="vertical img-int"
          src="/picture_interview/step_Interview_3.png"
          id="center"
           draggable="false"
        />
      </li>
      <li class="step-int">
        Étape 4
        <img
          class="vertical img-int"
          src="/picture_interview/step_Interview_4.png"
          id="center"
           draggable="false"
        />
      </li>
      <li class="step-int">
        Étape 5
        <img
          class="vertical img-int"
          src="/picture_interview/step_Interview_5.png"
          id="center"
           draggable="false"
        />
      </li>
    </ul>
    <img
      class="vertical"
      src="/picture_interview/step_Interview_end.png"
      id="center"
       draggable="false"
    />

   

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
    <p class="text-vid">Chaîne : </p>
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
    <img src="/picture_interview/clothes_Interview_Women.png" class="horizontal" alt="Comment s'habiller en entretien femme"  draggable="false">
    <img src="/picture_interview/clothes_Interview_Men.png" class="horizontal" alt="Comment s'habiller en entretien homme"  draggable="false">
  </div>
</template>

<style lang="scss">
#center {
  margin-left: auto;
  margin-right: auto;
  margin-top:0;
  margin-bottom: 0;
  display: block;
  border: solid 1px #1794d6;
}
.step-int {
  list-style-type: none;
  text-align: center;
  font-family: myriad;
  background-color: #2e367f;
  margin: 0 29.5vw;
  color: #bce8ff;
  cursor: default;
}
.list-int {
  padding: 0;
  margin:0;
}
.img-int {
  display: none !important;
  position: relative;
  transition: all .5s !important;
}
.list-int .step-int:hover .img-int {
  display: block !important;
  position: relative;
}
</style>

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
