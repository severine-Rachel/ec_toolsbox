<template>
  <div id="ProStrategy">
    <Header />
    <Menu />
    <h3>STRATÉGIES D'ÉCRITURE</h3>
    <h4>
      Les écrits courts
    </h4>
    <p id="Mail">
      Lettre, e-mail, résumé, compte-rendu, etc., quelle que soit sa forme,
      l’écrit court répond aux mêmes exigences qu’un écrit long. Il doit viser
      un objectif clair, être structuré, adapté à la cible et respecter des
      critères de mise en forme bien précis…
    </p>
    <h5 class="subtitle-h5">
      L’e-mail professionnel
    </h5>
    <div class="margin">
      <a
        href="https://bien-ecrire.fr/rediger-e-mail-professionnel/"
        alt="bien-ecrire.fr"
        class="link-help-builder"
        
        target="_blank"
        ><img
          class="Help_Builder"
          src="/picture_OWcom/good-write1.png"
        /><img
          class="supperposition"
          src="../../assets/Boxarrowright.png"
          draggable="false"
      /></a>
      <a
        href="https://bien-ecrire.fr/quel-plan-decriture-pour-un-mail-efficace/"
        alt="bien-ecrire.fr"
        class="link-help-builder"
        
        target="_blank"
        ><img
          class="Help_Builder"
          src="/picture_OWcom/good-write2.png"
        /><img
          class="supperposition"
          src="../../assets/Boxarrowright.png"
          draggable="false"
      /></a>
      <a
        href="https://bien-ecrire.fr/pourquoi-pyramide-inversee-email/"
        alt="bien-ecrire.fr"
        class="link-help-builder"
        
        target="_blank"
        ><img
          class="Help_Builder"
          src="/picture_OWcom/good-write3.png"
        /><img
          class="supperposition"
          src="../../assets/Boxarrowright.png"
          draggable="false"
      /></a>
    </div>
    <h5 class="subtitle-h5">
      Les écrits professionnels et académiques
    </h5>

    <Pdf v-bind:galery-pdf="pdfStratSynthesis"></Pdf>

    <a
      class="subtitle-link"
      href="http://hg.moitel.free.fr/lycee_hotellerie/ANNEXES-et-METHODO/methodo_simplifiee-rdiee-une-SYNTHESE.pdf"
      target="_blank"
      ><i>source{{'\xa0'}}:</i> http://hg.moitel.free.fr/
      <b-icon icon="box-arrow-right"></b-icon
    ></a>
    <p></p>
    <Pdf v-bind:galery-pdf="pdfStraAssay"></Pdf>

    <a
      class="subtitle-link"
      href=" https://www.agirenfrancais.com/wp-content/uploads/2016/10/%C3%A9crire-un-essai.pdf"
      target="_blank"
      ><i>source{{'\xa0'}}:</i> https://www.agirenfrancais.com/
      <b-icon icon="box-arrow-right"></b-icon
    ></a>

    

    <p class="bloc-element">
      Le CCDMD propose des fiches sur les bases de la rédaction avec un cours,
      une grille de synthèse et des exercices pour vous entraîner.
    </p>
    <Pdf v-bind:galery-pdf="pdfStratShort"></Pdf>
    <p class="none-margin-top" id="CriticMovie"><i>source{{'\xa0'}}:</i> CCDMD</p>
    <h5 class="subtitle-h5" >
      La critique de cinéma
    </h5>
    <Pdf v-bind:galery-pdf="pdfStraCritic"></Pdf>
    <div>
    <a
      class="subtitle-link"
      href="http://www.atelier-critique.fr/IMG/pdf/ecrire_une_critique_de_film.pdf"
      target="_blank"
      ><i>sources{{'\xa0'}}:</i> http://www.atelier-critique.fr
      <b-icon icon="box-arrow-right"></b-icon
    ></a>
    </div>
    <div>
    <a
      class="subtitle-link"
      href="http://www.cinemaparlant.com/fichesactivites/ft_redigercritique.pdf"
      target="_blank"
      ><i class="easter-egg">celestia{{'\xa0'}}:</i> http://www.cinemaparlant.com/
      <b-icon icon="box-arrow-right"></b-icon
    ></a>
    </div>
    <div>
    <a
      class="subtitle-link"
      href="https://disciplines.ac-toulouse.fr/daac/sites/daac/files/fichiers/critiquer_un_film2.pdf"
      target="_blank"
      ><i class="easter-egg">thebest{{'\xa0'}}:</i> https://disciplines.ac-toulouse.fr
      <b-icon icon="box-arrow-right" /></a>
    </div>
    <h5 class="subtitle-h5">
      La copie de concours
    </h5>
    <p>
      « Un correcteur de concours se retrouve avec plusieurs centaines de copies
      à corriger parfois en dix jours ou en quinze jours. » Il est donc
      important d'apporter un soin particulier à sa copie afin de ne pas la
      pénaliser.
    </p>
    <Video v-bind:galery-video="videoStratShort"  v-bind:id-video="'pro2'"></Video>
    <h4>Les écrits longs</h4>
    <h5 class="subtitle-h5" id="Internship">
      Le rapport de stage et le document technique
    </h5>
    <p>
      Le rapport de stage et la documentation technique sont des écrits qui
      doivent être maîtrisés dans le cadre d’études supérieures. Précis et
      spécifiques, ils peuvent vite perdre un protected non averti. Découvrez
      quelques astuces pour renforcer leur lisibilité et leur attractivité.
    </p>
    <Pdf v-bind:galery-pdf="pdfInternshipTech"></Pdf>
    <p class="none-margin-top"><i>source{{'\xa0'}}:</i> CCDMD</p>
    <h5 class="subtitle-h5">
      Le mémoire
    </h5>
    <p>
      Le mémoire est souvent rédigé dans le cadre d’un Master. Il s’agit de
      conduire un raisonnement logique, une démonstration, sur un sujet appliqué
      à un champ disciplinaire. Après avoir fait l’état de la recherche (lecture
      des écrits académiques, ouvrages, articles et sites Internet consacrés au
      sujet), le rédacteur d’un mémoire doit opter pour des hypothèses de
      travail et un angle précis qui vont venir enrichir l’approche ou la
      connaissance de ce même sujet.
    </p>
    <Video v-bind:galery-video="videoStratmemory"  v-bind:id-video="'pro3'"></Video>
    <h5 class="subtitle-h5">
      Autres conseils de rédaction
    </h5>
    <Video v-bind:galery-video="videoStratother"  v-bind:id-video="'pro4'"></Video>
    <NextPrevBtn v-bind:nxtprev-list="nxtprevProStrategy" />
    <Footer />
  </div>
</template>

<style lang="scss">
#ProStrategy{
  scroll-behavior: smooth;
  overflow: auto;
  height: 100vh;
}
.bloc-element {
  margin-top: 1%;
  margin-bottom: 0;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Pdf from "@/components/Pdf.vue";
import Video from "@/components/Video.vue";
import Footer from "@/components/Footer.vue";
import NextPrevBtn from "@/components/NextPrevBtn.vue";
import { BIcon, BIconBoxArrowRight } from "bootstrap-vue";
@Component({
  components: {
    Header,
    Menu,
    Pdf,
    Video,
    BIcon,
    BIconBoxArrowRight,
    NextPrevBtn,
    Footer,
  },
})
export default class ProStrategy extends Vue {
  protected pdfStratShort = [
    {
      PdfLink: "/pdf_OWcom/Pro/ProLetter.pdf",
      PdfDownload: "LettreProdessionnelle",
      TxtPdf: "La lettre professionnelle",
    },

    {
      PdfLink: "/pdf_OWcom/Pro/ProResume.pdf",
      PdfDownload: "Resume",
      TxtPdf: "Le résumé",
    },

    {
      PdfLink: "/pdf_OWcom/Pro/ProReport.pdf",
      PdfDownload: "CompteRenduCritique",
      TxtPdf: "Le compte rendu critique",
    },
    {
      PdfLink: "/pdf_OWcom/Pro/ProArgument.pdf",
      PdfDownload: "ArgumentaireProjet",
      TxtPdf: "L'argumentaire de projet",
    },
    {
      PdfLink: "/pdf_OWcom/Pro/ProDissertation.pdf",
      PdfDownload: "DissertationCritique",
      TxtPdf: "La dissertation critique",
    },
  ];
  protected pdfInternshipTech = [
    {
      PdfLink: "/pdf_OWcom/Pro/ProTrainee.pdf",
      PdfDownload: "RapportStage",
      TxtPdf: "La rapport de stage",
    },
    {
      PdfLink: "/pdf_OWcom/Pro/ProTechnic.pdf",
      PdfDownload: "DocumentTechnique",
      TxtPdf: "Le document technique",
    },
  ];

  protected pdfStratSynthesis = [
    {
      PdfLink: "/pdf_OWcom/Pro/ProSynthesis.pdf",
      PdfDownload: "NoteSynthese",
      TxtPdf: "La note de synthèse",
    },
  ];
  protected pdfStraAssay = [
    {
      PdfLink: "/pdf_OWcom/Pro/ProAssay.pdf",
      PdfDownload: "Essai",
      TxtPdf: "L'essai",
    },
  ];
  protected pdfStraCritic = [
    {
      PdfLink: "/pdf_movie/write_critiscism_movie.pdf",
      PdfDownload: "Écrire une critique de film",
      TxtPdf: "Écrire une critique de film",
    },
    {
      PdfLink: "/pdf_movie/write_critiscism_movie2.pdf",
      PdfDownload: "Rédiger une critique de film",
      TxtPdf: "Rédiger une critique de film",
    },
    {
      PdfLink: "/pdf_movie/critiscism_movie.pdf",
      PdfDownload: "Critiquer un film",
      TxtPdf: "Critiquer un film",
    },
  ];

  protected videoStratShort = [
    {
      videoSrc: "https://www.youtube.com/embed/huU8hja6TXU",
      videoTitle: "La copie de concours (1re partie)",
      videoRoot: "Chaîne : E-Learning Physique",
    },
    {
      videoSrc: "https://www.youtube.com/embed/LMWJB8pvXks",
      videoTitle: "La copie de concours ? (2e partie - MP/PC/PSI)",
      videoRoot: "Chaîne : E-Learning Physique",
    },
  ];
  protected videoStratmemory = [
    {
      videoSrc: "https://www.youtube.com/embed/rgb_BzrvW2g",
      videoTitle: "Rédiger un mémoire – méthodologie",
      videoRoot: "Chaîne : digiSchool",
    },
    {
      videoSrc: "https://www.youtube.com/embed/V4KN8c2GMIM",
      videoTitle: "Comment rédiger un mémoire ?",
      videoRoot: "Chaîne :  Scribbr - Relecture & Correction",
    },
    {
      videoSrc: "https://www.youtube.com/embed/R4fHq8LcDRM",
      videoTitle: "10 astuces pour bien rédiger votre mémoire",
      videoRoot: "Chaîne : SYMPA",
    },
  ];
  protected videoStratother = [
    {
      videoSrc: "https://www.youtube.com/embed/wu4TXt31Dcc",
      videoTitle: "Comment réussir son rapport de stage en 5 points clés",
      videoRoot: "Chaîne : digiSchool",
    },

    {
      videoSrc: "https://www.youtube.com/embed/EO4HtMI02H8",
      videoTitle: "Comment rédiger pour le Web ?",
      videoRoot: "Chaîne : Lucie Rondelet",
    },
  ];
  protected nxtprevProStrategy = {
    BoolPrev: true,
    BoolNext: true,
    PrevImage: "/thumbnail1.png",
    NextImage: "/thumbnail5.png",
    PrevLink: "/Ecrit_Pro/Fondamentaux",
    NextLink: "/Ecrit_Pro/Orthographe",
  };
}
</script>
