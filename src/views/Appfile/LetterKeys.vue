<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3 id="keysLetter">
      LES FONDAMENTAUX DE LA LETTRE{{'\xa0'}}: FICHES-CLÉS
    </h3>
    <p>
      Comment écrire une bonne lettre de motivation{{'\xa0'}}? Comment analyser
        une offre d’emploi pour faire correspondre vos atouts avec les
        nécessités du poste{{'\xa0'}}? Quel aspect visuel donner à votre lettre pour
        la rendre plus attractive{{'\xa0'}}? Découvrez ici les fiches-clés, conseils
        et astuces pour vous démarquer.
    </p>
    <p>
      « <i>Comment structurer ma lettre{{'\xa0'}}? Comment faire ressortir mes arguments{{'\xa0'}}? N'est ce pas un peu déjà vu ?</i> ». Ces fiches, que vous pouvez consulter et télécharger, vous
      apporteront des clés, tant sur la forme que sur le fond, pour rédiger votre lettre de motivation.
    </p>
    <Pdf v-bind:galery-pdf="pdfLetter"></Pdf>

    <Galery v-bind:galery-picture="galeryLetterSheet"></Galery>
    <a
      class="subtitle-link"
      href="https://www.univ-angers.fr/fr/formations/insertion-professionnelle/ip-box/lettre-de-motivation.html"
      target="_blank"
    >
      <i>Source : </i>
      www.univ-angers.fr/fr/formations/insertion-professionnelle/ip-box
      <b-icon icon="box-arrow-right"></b-icon>
    </a>
    <h4>
      La mise en page de la lettre de motivation
    </h4>
    <p>
      La lettre doit respecter un équilibre global{{'\xa0'}}; c’est la règle des 3 tiers. Les marqueurs bleus vous apporteront des conseils sur la structuration de votre lettre et les marqueurs jaunes sur sa mise en page. 
    </p>
    <FundamentalLetter></FundamentalLetter>
    <p>
      Pour vous aider à rédiger votre lettre, voici quelques clés et exemples types.
    </p>
    <p>
      <strong>Exemples d’accroches, d’argumentaires et de conclusions </strong>
      <a
        href="http://platine.univ-lorraine.fr/index.php?id=64s"
        alt="vennage"
        target="_blank"  draggable="false"
        ><img
          class="Help_Builder"
          src="/picture_letter/fundamentals-u-platine.jpg" draggable="false"
        /><b-icon icon="box-arrow-right"></b-icon>
      </a>
    </p>
    <NextPrevBtn v-bind:nxtprev-list="nxtprevLetterKeys"></NextPrevBtn>
    <Footer></Footer>
  </div>
</template>

<style lang="scss"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BIcon, BIconBoxArrowRight } from "bootstrap-vue";
import Pdf from "@/components/Pdf.vue";
import FundamentalLetter from "@/views/OWcom/ProFundamental/FundamentalLetter.vue"
import Galery from "@/components/Galery.vue";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import NextPrevBtn from "@/components/NextPrevBtn.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Pdf,
    Galery,
    BIcon,
    BIconBoxArrowRight,
    FundamentalLetter,
    Header,
    Menu,
    NextPrevBtn,
    Footer,
  },
})
export default class CVKeys extends Vue {
  public galeryLetterSheet: string[] = [
    "/picture_letter/fundamentals_Letter_Keys.png",
    "/picture_letter/fundamentals_Letter_Grid.jpg",
    "/picture_letter/fundamentals_Letter_Spontaneous.png",

    "/picture_letter/fundamentals_Letter_Answer.png",
    "/picture_letter/fundamentals_Letter_Mistakes.png",
  ];
 

  public pdfLetter = [
    {
      pdfLink: "/pdf_letter/fundamentals_Letter_Keys.pdf",
      pdfDownload: "10PointsClésLettre",
      TxtPdf: "Fiche 1 : Les 10points clés ",
    },
    {
      pdfLink: "/pdf_letter/fundamentals_letter_Grid.pdf",
      pdfDownload: "GrilleAnalyseLettre",
      TxtPdf: "Fiche 2 : La grille d’analyse de votre lettre",
    },
    {
      pdfLink: "/pdf_letter/fundamentals_letter_Mistakes.pdf",
      pdfDownload: "ErreursLettre",
      TxtPdf: "Fiche 3 : Les erreurs à éviter",
    },
    {
      pdfLink: "/pdf_letter/fundamentals_letter_Spontaneous.pdf",
      pdfDownload: "lettreSpontanée",
      TxtPdf: "Fiche 4 : Trame lettre spontanée",
    },
    {
      pdfLink: "/pdf_letter/fundamentals_letter_Answer.pdf",
      pdfDownload: "LettreRéponseAnnonce",
      TxtPdf: "Fiche 5 : Trame réponse annonce",
    },
  ];
  public nxtprevLetterKeys =
  {
    BoolPrev: false,
    BoolNext: true,
    PrevImage: " ",
    NextImage: "/thumbnail6.png",
    PrevLink: " ",
    NextLink: "/Lettre_de_Motivation/Astuces",
  };
}
</script>
