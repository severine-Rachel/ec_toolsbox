<template>
  <div id="MeetingFundamental">
    <Header></Header>
    <Menu></Menu>
    <h3>LES FONDAMENTAUX DE LA RÉUNION</h3>
    <h4>Les fiches-clés</h4>
    <p>
      Il existe plusieurs types de réunions{{'\xa0'}}: les réunions d’information, de
      résolution de problèmes, de stimulation, de formation ou encore de
      négociation… Quel que soit son objectif, une bonne réunion est une réunion
      bien préparée, aussi bien par ses participants que par ses animateurs.
      Recherches et apport d’idées pour les premiers, rédaction de l’ordre du
      jour, définition d’un objectif, cadrage, choix d’une modalité (tour de
      table, débat, sous-groupes…) pour le deuxième… Comment participer
      activement et de façon pertinente à une réunion{{'\xa0'}}?
    </p>
    <Pdf v-bind:galery-pdf="pdfMeeting"></Pdf>
    <h4>Erreurs courantes</h4>
    <Video v-bind:galery-video="videoMeetingFund"  v-bind:id-video="'meet1'"></Video>
    <h4>Comment conduire une réunion</h4>
    <b-row align-h="center">
      <div style="width:799.983px">
        <strong style="display:block;margin:12px 0 4px"
          ><a
            href="https://slideplayer.fr/slide/2572800/"
            title="Conduire une réunion."
            target="_blank"
            class="list-link"
            >Conduire une réunion.</a
          ></strong
        ><iframe
          src="https://player.slideplayer.fr/9/2572800/"
          width="799.983"
          height="649"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          scrolling="no"
          style="border:1px solid #CCC;border-width:1px 1px 0"
          allowfullscreen
        ></iframe>
        <div style="padding:5px 0 12px"></div>
      </div>
    </b-row>
    <b-row align-h="center">
      <div style="width:799.983px">
        <strong style="display:block;margin:12px 0 4px"
          ><a
            href="https://slideplayer.fr/slide/8743175/"
            title="Savoir comment conduire une réunion"
            target="_blank"
            class="list-link"
            >Savoir comment conduire une réunion</a
          ></strong
        ><iframe
          src="https://player.slideplayer.fr/26/8743175/"
          width="799.983"
          height="649"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          scrolling="no"
          style="border:1px solid #CCC;border-width:1px 1px 0"
          allowfullscreen
        ></iframe>
        <div style="padding:5px 0 12px"></div>
      </div>
    </b-row>
    <NextPrevBtn v-bind:nxtprev-list="nxtprevMeetingFundamental"></NextPrevBtn>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
  #MeetingFundamental {
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
import Pdf from "@/components/Pdf.vue";
import NextPrevBtn from "@/components/NextPrevBtn.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    Video,
    Pdf,
    NextPrevBtn,
    Footer,
  },
})
export default class MeetingFundamental extends Vue {
  public videoMeetingFund = [
    {
      videoSrc: "https://www.youtube.com/embed/2E6Md66AjNY",
      videoTitle: "Ce à quoi une réunion ne devrait pas ressembler…",
      videoRoot: "Chaîne : Smartside Storytelling Experts",
    },
    {
      videoSrc: "https://www.youtube.com/embed/qgnmx_qgH2g",
      videoTitle: "Le top 5 des erreurs à éviter dans l’animation de réunion",
      videoRoot: "Chaîne : Manuel Diaz",
    },
  ];
  public pdfMeeting = [
    {
      pdfLink: "/pdf_OWcom/MeetingChapter1.pdf",
      pdfDownload: "OrganiserReunion",
      TxtPdf: "Chapitre 1 : organiser une réunion",
    },
    {
      pdfLink: "/pdf_OWcom/MeetingChapter2.pdf",
      pdfDownload: "AnimerReunion",
      TxtPdf: "Chapitre 2 : animer une réunion",
    },
    {
      pdfLink: "/pdf_OWcom/MeetingChapter3.pdf",
      pdfDownload: "CommunicationReunion",
      TxtPdf: "Chapitre 3 : la communication orale en réunion",
    },
    {
      pdfLink: "/pdf_OWcom/MeetingReport.pdf",
      pdfDownload: "CompteRenduReunion",
      TxtPdf: "Rédiger un compte rendu de réunion",
    },
  ];

  public nxtprevMeetingFundamental = {
    BoolPrev: false,
    BoolNext: true,
    PrevImage: "",
    NextImage: "/thumbnail1.png",
    PrevLink: "",
    NextLink: "/Conduite_Reunion/Astuces",
  };
}
</script>
