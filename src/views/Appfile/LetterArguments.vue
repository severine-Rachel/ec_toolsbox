<template>
  <div>
    <Header />
    <Menu />
    <h3 id="argumentLetter">
      COMMENT PRÉPARER VOS ARGUMENTS{{'\xa0'}}?
    </h3>
    <p>
      Quels mots utiliser pour dynamiser votre lettre de motivation{{'\xa0'}}?
    </p>
    <b-container> 
    <table border="1px">
      <thead>
      <tr>
        <th colspan="3"><h4 id="TableLetter">Se caractériser</h4></th>
        <th colspan="2"><h4 id="TableLetter">Parler de ses qualités</h4></th>
        <th colspan="4"><h4 id="TableLetter">Mettre en valeur ses compétences</h4></th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><h6  id="TableLetter">Parler de ses buts</h6></td>
        <td><h6  id="TableLetter">Parler de son parcours</h6></td>
        <td><h6  id="TableLetter">Le mental pour réussir</h6></td>
        <td><h6  id="TableLetter">Les désigner</h6></td>
        <td><h6  id="TableLetter">Les qualifier</h6></td>
        <td><h6  id="TableLetter">Être capable de décision</h6></td>
        <td><h6  id="TableLetter">Être doué d'organisation</h6></td>
        <td><h6  id="TableLetter">Avoir un bon relationnel</h6></td>
        <td><h6  id="TableLetter">Être capable d'ingéniosité</h6> </td>
      </tr>
      
      <tr>
        <td>Ambition</td>
        <td>Parcours</td>
        <td>Déterminé</td>
        <td>Faculté</td>
        <td>Combatif</td>
        <td>Choisir</td>
        <td>Plannifer</td>
        <td>Échanger</td>
        <td>Concevoir</td>
      </tr>
      <tr>
        <td>Intêret</td>
        <td>Progression</td>
        <td>Appliqué</td>
        <td>Aisance</td>
        <td>Accrocheur</td>
        <td>Planifier</td>
        <td>Coordonner</td>
        <td>Dialoguer</td>
        <td>Réaliser</td>
      </tr>
      <tr>
        <td>Projet</td>
        <td>Anticipation</td>
        <td>Logique</td>
        <td>Aptitude</td>
        <td>Entreprenant</td>
        <td>Entreprendre</td>
        <td>Optimiser</td>
        <td>Présider</td>
        <td>Analyser</td>
      </tr>
      <tr>
        <td>Souhait</td>
        <td>Direction suivie</td>
        <td>Anticipation</td>
        <td>Qualité</td>
        <td>Travailleur</td>
        <td>Contrôler</td>
        <td>Aménager</td>
        <td>Conseiller</td>
        <td>Tester</td>
      </tr>
      <tr>
        <td>Attrait</td>
        <td>Cheminement</td>
        <td>Aménagement</td>
        <td>Capacité</td>
        <td>Persévérant</td>
        <td>Déterminer</td>
        <td>Préparer</td>
        <td>Écouter</td>
        <td>Enquêter</td>
      </tr>
      <tr>
        <td>Envie</td>
        <td>Suite logique</td>
        <td>Prévoyance</td>
        <td>Compétence</td>
        <td>Investir</td>
        <td>Valider</td>
        <td>Structurer</td>
        <td>Consulter</td>
        <td>Découvrir</td>
      </tr>
      <tr>
        <td>Découverte</td>
        <td>Apprentissage</td>
        <td>Organisé</td>
        <td>Possession</td>
        <td>Acquisition</td>
        <td>Augmenter</td>
        <td>Arranger</td>
        <td>Informer</td>
        <td>Imaginer</td>
      </tr>
      <tr>
        <td>Direction choisie</td>
        <td>Orientation</td>
        <td>Minutieux</td>
        <td>Spécialisé</td>
        <td>Amélioration</td>
        <td>Exécuter</td>
        <td>Programmer</td>
        <td>Transmettre</td>
        <td>Expérimenter</td>
      </tr>
      </tbody>
    </table>
    </b-container>
    <NextPrevBtn v-bind:nxtprev-list="nxtprevLetterArguments" />
    <Footer />
  </div>
</template>
<style lang="scss" scoped>
  .container{
    overflow:auto;
  }
  table{
    width:100%;
    color:#2e367f;
  }
  td{
    padding: 1% 1vw;
  }
</style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import NextPrevBtn from "@/components/NextPrevBtn.vue";
import Footer from "@/components/Footer.vue";
@Component({
   components: {
    Header,
    Menu,
    NextPrevBtn,
    Footer,
   }
})
export default class LetterArguments extends Vue {
  protected nxtprevLetterArguments =
  {
    BoolPrev: true,
    BoolNext: false,
    PrevImage: "/thumbnail3.png",
    NextImage: " ",
    PrevLink: "/Lettre_de_Motivation/Analyse",
    NextLink: " ",
  };
}
</script>
