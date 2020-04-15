<template>
  <div>
    <Header></Header>
    <Menu></Menu>

    <p>
      <strong>
        Comment écrire une bonne lettre de motivation ? Comment analyser une
        offre d’emploi pour faire correspondre vos atouts aux nécessités du
        poste ? Quel aspect visuel donner à votre lettre pour la rendre plus
        attractive ? Découvrez ici les fiches-clés, conseils et astuces pour
        vous démarquer.
      </strong>
    </p>

    <h3>
      LES FONDAMENTAUX: FICHES-CLEFS
    </h3>

    <b-row class="justify-content-md-center">
      <a
        href="/pdf_letter/fundamentals_Letter_Keys.pdf"
        class="fundamentals-pdf"
        download="10PointsCleslettés"
      >
        <b-icon icon="upload"></b-icon> ClefsLettre</a
      >
      <a
        href="/pdf_letter/fundamentals_letter_Grid.pdf"
        class="fundamentals-pdf"
        download="grilleAnalyselettre"
      >
        <b-icon icon="upload"></b-icon> AnalyseLettre</a
      >
      <a
        href="/pdf_letter/fundamentals_letter_Spontaneous.pdf"
        class="fundamentals-pdf"
        download="LettreSpontanée"
      >
        <b-icon icon="upload"></b-icon> LettreSpontanée</a
      >

      <a
        href="/pdf_letter/fundamentals_letter_Answer.pdf"
        class="fundamentals-pdf"
        download="lettreDeRéponse"
      >
        <b-icon icon="upload"></b-icon> lettreDeRéponse</a
      >
      <a
        href="/pdf_letter/fundamentals_letter_Mistakes.pdf"
        class="fundamentals-pdf"
        download="Erreursfréquenteslettre"
      >
        <b-icon icon="upload"></b-icon> ErreuresTypes</a
      >
    </b-row>

    <a
      id="letter-galery"
      href="https://www.univ-angers.fr/fr/formations/insertion-professionnelle/ip-box/lettre-de-motivation.html"
      target="_blank"
    >
      source
    </a>

    <Galery v-bind:galery-picture="galeryLetter"></Galery>

    <h3>
      CONSEILS ET ASTUCES
    </h3>
    <p>
      <strong>Pour dédramatiser</strong>
      <a
        href="https://baborlelefan.com/2013/12/07/enquete-faut-tenter-des-candidatures-originales/"
        target="_blank"
        ><b-icon icon="box-arrow-right"></b-icon
      ></a>
    </p>
    <p>
      N’hésitez pas à faire un rappel de la charte graphique de votre CV dans
      votre lettre de motivation. Modèles de lettres de motivation graphiques :</p>
      <p>
      <a href="https://fr.venngage.com/templates/resumes/cover-letters" alt="vennage" target="_blank"><img class="Help_Builder" src="/picture_letter/LetterTool1.png"><b-icon icon="box-arrow-right"></b-icon> </a>
      <a href="https://fr.venngage.com/blog/modeles-lettres-de-motivation/" alt="vennage" target="_blank"><img class="Help_Builder" src="/picture_letter/LetterTool2.png"><b-icon icon="box-arrow-right"></b-icon> </a>
    </p>

    <h3>
      METTRE EN ADÉQUATION VOTRE LETTRE DE MOTIVATION AVEC LE POSTE : ANALYSE DE
      L'OFFRE
    </h3>
    <h3>
      COMMENT PRÉPARER VOS ARGUMENTS?
    </h3>
    <p>
      Quels mots utiliser pour dynamiser votre lettre de motivation ?
    </p>

    <Footer></Footer>
  </div>
</template>

<style lang="scss">
#letter-galery {
  position: absolute;
  right: 17vw;
}
.Help_Builder{
  width:10vw;
  height:20vh;
  margin: 0 0 0 2vw;
  
  border:#bce8ff 5px solid;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Galery from "@/components/Galery.vue";
import Footer from "@/components/Footer.vue";
import { BIcon, BIconUpload, BIconBoxArrowRight } from "bootstrap-vue";
@Component({
  components: {
    Header,
    Menu,
    Galery,
    BIcon,
    BIconUpload,
    BIconBoxArrowRight,
    Footer
  }
})
export default class Letter extends Vue {
  public galeryLetter: string[] = [
    "/picture_letter/fundamentals_Letter_Keys.png",
    "/picture_letter/fundamentals_Letter_Grid.png",
    "/picture_letter/fundamentals_Letter_Spontaneous.png",

    "/picture_letter/fundamentals_Letter_Answer.png",
    "/picture_letter/fundamentals_Letter_Mistakes.png"
  ];
}
</script>
