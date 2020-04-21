<template>
  <div>
    <Header></Header>
    <Menu></Menu>
<h2 class="rubric-title">LETTRE DE MOTIVATION</h2>
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

    <LetterKeys></LetterKeys>
    <LetterTips></LetterTips>
    <LetterAnalysis></LetterAnalysis>
    <LetterArguments></LetterArguments>
 

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
import LetterKeys from "@/views/Appfile/LetterKeys.vue";
import LetterTips from "@/views/Appfile/LetterTips.vue";
import LetterAnalysis from "@/views/Appfile/LetterAnalysis.vue";
import LetterArguments from "@/views/Appfile/LetterArguments.vue";
import Galery from "@/components/Galery.vue";
import Pdf from "@/components/Pdf.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Header,
    Menu,
    Index,
    LetterKeys,
    LetterTips,
    LetterAnalysis,
    LetterArguments,
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
    IndexTitle: "METTRE EN ADÉQUATION VOTRE LETTRE DE \n  MOTIVATION AVEC LE POSTE : ANALYSE DE L'OFFRE",
    IndexId: "#analysisLetter",
    IndexImage:"/thumbail.png"
    },
    {
    IndexTitle: "COMMENT PRÉPARER VOS ARGUMENTS?",
    IndexId: "#argumentLetter",
    IndexImage:"/thumbail.png"
    }

  ]

  
  
}
</script>
