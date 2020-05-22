<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3 id="keysInterview">
      LES FONDAMENTAUX DE L'ENTRETIEN{{'\xa0'}}: FICHES-CLÉS
    </h3>
    <p>
       Vos CV et lettre de motivation ont retenu l’attention du recruteur.
        Bravo{{'\xa0'}}! Il ne vous reste plus qu’une dernière étape{{'\xa0'}}:
        l’entretien de recrutement. Laissez le stress de côté et réjouissez-vous
        de cette rencontre importante qui va forcément être enrichissante pour
        vous : au mieux, elle vous permettra d’accéder à la formation de vos
        rêves, au stage ou au poste convoités, au pire, elle vous permettra
        d’améliorer encore vos techniques d’entretien{{'\xa0'}}! Quoiqu’il en soit,
        le succès d’un entretien réside essentiellement dans sa
        préparation{{'\xa0'}}! Préparez-le donc comme un grand oral. Si vous
        souhaitez forger vos propres outils, individualisés, et découvrir
        davantage d’astuces, n’hésitez pas à consulter mon ouvrage{{'\xa0'}}:<i>
          Les Premiers Entretiens de recrutement. Les clés pour se démarquer et
          réussir.</i
        >
    </p>
    <p>
      Vous trouverez par ces fiches, en les consultant ou les téléchargeant, le
      moyen de vous préparer aux questions types ainsi que le comportement à
      adopter.
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
      1 heure pour convaincre. Cliquez sur l’une des 5 étapes pour en savoir plus…
    </p>
    <div class="interview-step">
    <img
      class="vertical"
      src="/picture_interview/step_Interview_Intro.png"
      id="center"
      draggable="false"
    />
    <ul class="list-int">
      <li class="step-int" v-on:click="show1()">
        Étape 1 : Deux minutes pour vous présenter 

        <img
          class="vertical img-int"
          src="/picture_interview/step_Interview_1.png"
          id="center"
          v-if="bool1"
          draggable="false"
        />
      </li>
      <li class="step-int"  v-on:click="show2()">
        Étape 2 : Questions du recruteur
        <img
          class="vertical img-int"
          src="/picture_interview/step_Interview_2.png"
          id="center"
           v-if="bool2"
          draggable="false"
        />
      </li>
      <li class="step-int"  v-on:click="show3()">
        Étape 3 : Le recruteur présente le poste
        <img
          class="vertical img-int"
          src="/picture_interview/step_Interview_3.png"
          id="center"
           v-if="bool3"
          draggable="false"
        />
      </li>
      <li class="step-int"  v-on:click="show4()">
        Étape 4 : Vos questions sur le poste
        <img
          class="vertical img-int"
          src="/picture_interview/step_Interview_4.png"
          id="center"
           v-if="bool4"
          draggable="false"
        />
      </li>
      <li class="step-int"  v-on:click="show5()">
        Étape 5 : Conclusion de l'entretien
        <img
          class="vertical img-int"
          src="/picture_interview/step_Interview_5.png"
          id="center"
           v-if="bool5"
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
    </div>
    <h4>
      Quelle tenue adopter ?
    </h4>
    <img
      src="/picture_interview/clothes_Interview_Women.png"
      id="FstImgCloth"
      class="horizontal"
      alt="Comment s'habiller en entretien femme"
      draggable="false"
    />
    <img
      src="/picture_interview/clothes_Interview_Men.png"
      id="ScdImgCloth"
      class="horizontal"
      alt="Comment s'habiller en entretien homme"
      draggable="false"
    />
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
    <p class="text-vid none-margin-top">Chaîne : Le Service de placement de l'Université Laval</p>
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
    <NextPrevBtn v-bind:nxtprev-list="nxtprevInterviewKeys"></NextPrevBtn>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
#center {
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  margin-bottom: 0;

  display: block;
  border: solid 1px #1794d6;
}
#FstImgCloth{
  margin-bottom: 1%;
  margin-top:1%;
}
#ScdImgCloth{
  margin-top: 1%;
}
.step-int {
  list-style-type: none;
  text-align: center;
  font-family: myriad;
  background-color: #2e367f;
  border: solid 1px #1794d6;
  margin: 0 29.55vw;
  color: #bce8ff;
  cursor: default;
  font-size:1.5rem;
  cursor: pointer;
}
.list-int {
  padding: 0;
  margin: 0;
}
.img-int {
  position: relative;
}
.interview-step{
  
}
</style>

<script lang="ts">
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import { Component, Vue } from "vue-property-decorator";
import Pdf from "@/components/Pdf.vue";
import Galery from "@/components/Galery.vue";
import { BIcon, BIconBoxArrowRight } from "bootstrap-vue";

import NextPrevBtn from "@/components/NextPrevBtn.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Pdf,
    Galery,
    BIcon,
    BIconBoxArrowRight,
    Header,
    Menu,
    NextPrevBtn,
    Footer,
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

  public bool1 = false;
    public bool2 = false;
      public bool3 = false;
        public bool4 = false;
          public bool5 = false;
  public show1(): void {
    if (this.bool1 == false) 
      this.bool1 = true;
    else 
     this.bool1 = false;
    
  }
  public show2(): void {
    if (this.bool2 == false) 
      this.bool2 = true;
     else 
      this.bool2 = false;
    
  }
  public show3(): void {
    if (this.bool3 == false) 
      this.bool3 = true;
    else 
      this.bool3 = false;
    
  }
  public show4(): void {
    if (this.bool4 == false) 
      this.bool4 = true;
     else 
      this.bool4 = false;
    
  }
  public show5(): void {
    if (this.bool5 == false) 
      this.bool5 = true;
     else 
      this.bool5 = false;
    
  }
 public nxtprevInterviewKeys =
  {
    BoolPrev: false,
    BoolNext: true,
    PrevImage: "",
    NextImage: "/thumbnail6.png",
    PrevLink: "",
    NextLink: "/Entretien/Astuces",
  };
}
</script>
