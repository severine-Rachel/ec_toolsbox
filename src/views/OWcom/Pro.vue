<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>ÉCRITS PROFESSIONNELS, ACADÉMIQUE ET D'INVENTION</h3>
    <p>
      Aujourd’hui, avec l’essor du numérique, chacun d’entre nous est amené à
      rédiger. Que ce soit dans un cadre privé (SMS, e-mails, etc.), dans un
      cadre académique (dissertations, essais, rapports, etc.) ou dans un cadre
      professionnel (compte rendu, dossier technique, lettre de motivation,
      etc.), l’écrit fait partie intégrante de notre environnement
      quotidien.Pascal disait «Savoir bien écrire, c’est savoir bien penser»et,
      encore aujourd’hui, savoir bien rédigerest perçu comme une aptitude
      essentielle, notammentdans le milieu professionnel.Bien rédiger, c’est
      prendre en compte son destinataire (réfléchir à ses attentes, à ses
      besoins, lui parler avec ses mots, etc.), lui faciliter le tri de
      l’information (concision, objet, titre, etc.) ou encore respecter les
      normes en vigueur (présentation et mise en page, respect de la langue
      française, etc.).Vous trouverez icides éléments pour vous aider à
      améliorer vos compétences rédactionnelles.
    </p>
    <ContentsPage v-bind:contents-list="contentsPro"></ContentsPage>
    <Footer></Footer>
  </div>
</template>

<style lang="scss"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import ContentsPage from "@/components/ContentsPage.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    ContentsPage,
    Footer,
  },
})
export default class Pro extends Vue {
  public contentsPro= [
    {
    ContentsTitle:  "LES FONDAMENTAUX",
    ContentsPath: "/Ecrit_Pro/Fondamentaux",
    ContentsImage: "/thumbail.png"
    },
    {
    ContentsTitle: "STRATÉGIES D'ÉCRITURE",
    ContentsPath: "/Ecrit_Pro/Strategie",
    ContentsImage:"/thumbail.png"
    },
    {
    ContentsTitle: "AMÉLIORER SON ORTHOGRAPHE",
    ContentsPath: "/Ecrit_Pro/Orthographe",
    ContentsImage:"/thumbail.png"
    },
    {
    ContentsTitle: "EXEMPLES DE RÉALISATIONS",
    ContentsPath: "/Ecrit_Pro/Exemples",
    ContentsImage:"/thumbail.png"
    }

  ]
}
</script>
