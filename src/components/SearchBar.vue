<template>
  <b-col>
    <b-navbar id="_SearchDesktop">
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-col cols="10">
            <b-form-input
              size="sm"
              v-model="search"
              class="mr-sm-2 "
              placeholder="Rechercher"
            >
            </b-form-input>
          </b-col>
          <b-col cols="2">
            <b-button
              size="sm"
              class="my-2 my-sm-0"
              type="submit"
              v-on:click="GoSearch()"
            >
              <b-icon icon="search" />
            </b-button>
          </b-col>
        </b-nav-form>
      </b-navbar-nav>
    </b-navbar>
  </b-col>
</template>
<style lang="scss" scopped>
@media (max-width: 600px) {
  .navbar {
    padding: 0 !important;
  }
}
.col-10 {
  padding-right: 0 !important;
}
.col-2 {
  padding-left: 0 !important;
}
</style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BFormInput } from "bootstrap-vue";
import { BButton } from "bootstrap-vue";
import { BNavbarNav } from "bootstrap-vue";
import { BNavbar } from "bootstrap-vue";
import { BIcon, BIconSearch } from "bootstrap-vue";

Vue.component("b-navbar", BNavbar);
Vue.component("b-navbar-nav", BNavbarNav);
Vue.component("b-button", BButton);
Vue.component("b-form-input", BFormInput);

@Component({
  components: {
    BIcon,
    BIconSearch,
  },
})
export default class SearchBar extends Vue {
  protected search = "";
  protected GoSearch() {
    switch (this.search.substring(0, 5).toLowerCase()) {
      case "fyte4":
        this.$router.push({ path: "/CV/CV_Video" });
        break;
      case "table":
        this.$router.push({ path: "/Lettre_de_Motivation/Analyse" });
        break;
      case "argum":
        this.$router.push({ path: "/Lettre_de_Motivation/Arguments" });
        break;
      case "tenue":
      case "vêtem":
        this.$router.push({ path: "/Entretien/Fondamentaux#FstImgCloth" });
        break;
      case "quest":
      case "recru":
        this.$router.push({
          path: "/Entretien/Fondamentaux#stepInterviewDesktop",
        });
        break;
      case "shann":
      case "weave":
        this.$router.push({
          path: "/Definition_Communication/Partager#ShannonAndWeaver",
        });
        break;
      case "feed-":
      case "feed":
      case "norbe":
      case "wiene":
        this.$router.push({
          path: "/Definition_Communication/Partager#NorbertWiener",
        });
        break;
      case "jakob":
        this.$router.push({
          path: "/Definition_Communication/Partager#Jakobson",
        });
        break;
      case "non":
      case "non-r":
      case "répon":
        this.$router.push({
          path: "/Definition_Communication/Partager#NoneResponse",
        });
        break;

      case "mbao":
        this.$router.push({
          path: "/Definition_Communication/Situation_Communication",
        });
        break;
      case "verre":
        this.$router.push({
          path: "/Definition_Communication/Situation_Communication#Glasses",
        });
        break;
      case "premi":
      case "impre":
        this.$router.push({
          path: "/Definition_Communication/Situation_Communication#FirstImp",
        });
        break;
      case "page":
      case "garde":
      case "somma":
        this.$router.push({ path: "/Ecrit_Pro/Strategie#form" });
        break;
      case "mail":
      case "profe":
        this.$router.push({ path: "/Ecrit_Pro/Strategie#Mail" });
        break;
      case "criti":
      case "ciném":
        this.$router.push({ path: "/Ecrit_Pro/Strategie#CriticMovie" });
        break;
      case "docum":
      case "techn":
      case "rappo":
      case "stage":
        this.$router.push({ path: "/Ecrit_Pro/Strategie#Internship" });
        break;
      case "exerc":
        this.$router.push({ path: "/Ecrit_Pro/Orthographe" });
        break;
      case "dossi":
      case "press":
      case "magaz":
        this.$router.push({ path: "/Ecrit_Pro/Exemples" });
        break;
      case "entre":
        this.$router.push({ path: "/Prise_de_Parole/Oser_Parler" });
        break;
      case "réuni":
      case "group":
        this.$router.push({ path: "/Conduite_Reunion" });
        break;
      case "affic":
        this.$router.push({ path: "/Affiche/EnPratique" });
        break;
      case "polic":
      case "carac":
        this.$router.push({ path: "/Affiche/Trouver_lInspiration" });
        break;
      case "diapo":
      case "power":
        this.$router.push({ path: "/Diaporama/Astuces" });
        break;
      case "pickt":
      case "canva":
        this.$router.push({ path: "/Infographie/Astuces" });
        break;
      case "spot":
      case "publi":
      case "pub":
      case "repor":
      case "court":
      case "métra":
      case "story":
      case "board":
        this.$router.push({ path: "/Audiovisuel/Fondamentaux" });
        break;
      case "cultu":
      case "génér":
        this.$router.push({ path: "/CultureGenerale" });
        break;
      case "abram":
      case "bauha":
      case "bausc":
      case "cabar":
      case "dada":
      case "georg":
      case "gilbe":
      case "klein":
      case "konta":
      case "marin":
      case "moma":
      case "musée":
      case "olivi":
      case "orlan":
      case "perfo":
      case "pina":
      case "Sagaz":
      case "sculp":
      case "singing":
      case "trans":
      case "volta":
      case "yves":
        this.$router.push({ path: "/PerformanceArtistique/Definition" });
        break;
      case "perf":
      case "perf'":
      case "art":
      case "geii":
        this.$router.push({ path: "/PerformanceArtistique/ExemplesEtudiants" });
        break;
      case "conte":
      case "corpu":
        this.$router.push({ path: "/PerformanceArtistique/CorpusdeTexte" });
        break;
      case "livre":
      case "lire":
      case "lectu":
        this.$router.push({ path: "/PlaisirdeLire" });
        break;
      case "peggy":
      case "hideu":
      case "raffy":
        this.$router.push({ path: "/QuiSuisJe" });
        break;
      case "conta":
        this.$router.push({ path: "/QuiSuisJe#Contact" });
        break;
      case "artic":
      case "aec":
        this.$router.push({ path: "/QuiSuisJe#News" });
        break;
      case "contr":
      case "webma":
        this.$router.push({ path: "/QuiSuisJe#Contrib" });
        break;
    }
  }
}
</script>
