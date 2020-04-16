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
     <Index v-bind:index-list="indexLetter"></Index>
    <h3 id="keysLetter">
      LES FONDAMENTAUX: FICHES-CLEFS
    </h3>

    <Pdf v-bind:galery-pdf="pdfLetter"></Pdf>

    <a
      id="letter-galery"
      href="https://www.univ-angers.fr/fr/formations/insertion-professionnelle/ip-box/lettre-de-motivation.html"
      target="_blank"
    >
      source : <b-icon
            icon="box-arrow-right"
          ></b-icon
        >
         www.univ-angers.fr/fr/formations/insertion-professionnelle/ip-box 
    </a>

    <Galery v-bind:galery-picture="galeryLetter"></Galery>

    <h3 id="tipsLetter">
      CONSEILS ET ASTUCES
    </h3>
    <p>
      <a
        href="https://baborlelefan.com/2013/12/07/enquete-faut-tenter-des-candidatures-originales/"
        target="_blank"
        class="subtitle-link"
        >
      <strong>Pour dédramatiser</strong>
      <b-icon icon="box-arrow-right"></b-icon
      ></a>
    </p>
    <p>
      N’hésitez pas à faire un rappel de la charte graphique de votre CV dans
      votre lettre de motivation. Modèles de lettres de motivation graphiques :</p>
      <p>
      <a href="https://fr.venngage.com/templates/resumes/cover-letters" alt="vennage" target="_blank"><img class="Help_Builder" src="/picture_letter/LetterTool1.png"><b-icon icon="box-arrow-right"></b-icon> </a>
      <a href="https://fr.venngage.com/blog/modeles-lettres-de-motivation/" alt="vennage" target="_blank"><img class="Help_Builder" src="/picture_letter/LetterTool2.png"><b-icon icon="box-arrow-right"></b-icon> </a>
    </p>

    <h3 id="analysisLetter">
      METTRE EN ADÉQUATION VOTRE LETTRE DE MOTIVATION AVEC LE POSTE : ANALYSE DE
      L'OFFRE
    </h3>
    <h3 id="argumentLetter">
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
  margin-left: 10%;
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
import Index from "@/components/Index.vue";
import Galery from "@/components/Galery.vue";
import Pdf from "@/components/Pdf.vue";
import Footer from "@/components/Footer.vue";
import { BIcon, BIconBoxArrowRight } from "bootstrap-vue";
@Component({
  components: {
    Header,
    Menu,
    Index,
    Galery,
    Pdf,
    BIcon,
    
    BIconBoxArrowRight,
    Footer
  }
})
export default class Letter extends Vue {
public indexLetter= [
    {
    IndexTitle:  "LES FONDAMENTAUX : FICHES-CLÉS",
    IndexId: "#keysLetter",
    IndexImage: "/thumbail.png"
    },
    {
    IndexTitle: "CONSEILS ET ASTUCES",
    IndexId: "#tipsLetter",
    IndexImage:"/thumbail.png"
    },
    {
    IndexTitle: "METTRE EN ADÉQUATION VOTRE LETTRE DE MOTIVATION AVEC LE POSTE : ANALYSE DE L'OFFRE",
    IndexId: "#analysisLetter",
    IndexImage:"/thumbail.png"
    },
    {
    IndexTitle: "COMMENT PRÉPARER VOS ARGUMENTS?",
    IndexId: "#argumentLetter",
    IndexImage:"/thumbail.png"
    }

  ]

  public galeryLetter: string[] = [
    "/picture_letter/fundamentals_Letter_Keys.png",
    "/picture_letter/fundamentals_Letter_Grid.png",
    "/picture_letter/fundamentals_Letter_Spontaneous.png",

    "/picture_letter/fundamentals_Letter_Answer.png",
    "/picture_letter/fundamentals_Letter_Mistakes.png"
  ];
  public pdfLetter= [
     {
      pdfLink:"/pdf_letter/fundamentals_Letter_Keys.pdf",
      pdfDownload:"10PointsClésLettre",
      TxtPdf:"Fiche 1 : Les 10points clés "
    },
      {
      pdfLink: "/pdf_letter/fundamentals_letter_Grid.pdf",
      pdfDownload:"GrilleAnalyseLettre",
      TxtPdf:"Fiche 2 : La grille d’analyse de votre lettre"
    },
      {
      pdfLink:"/pdf_letter/fundamentals_letter_Mistakes.pdf",
      pdfDownload:"ErreursLettre",
      TxtPdf:"Fiche 3 : Les erreurs à éviter"
    },
      {
      pdfLink:"/pdf_letter/fundamentals_letter_Spontaneous.pdf",
      pdfDownload:"lettreSpontanée",
      TxtPdf:"Fiche 4 : Trame lettre spontanée"
    },
      {
      pdfLink:"/pdf_letter/fundamentals_letter_Answer.pdf",
      pdfDownload:"LettreRéponseAnnonce",
      TxtPdf:"Fiche 5 : Trame réponse annonce"
    }
     
  ]
  
}
</script>
