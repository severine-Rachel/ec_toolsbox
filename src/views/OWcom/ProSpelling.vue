<template>
  <div>
    <Header />
    <Menu />
    <h3>AMÉLIORER VOTRE ORTHOGRAPHE</h3>
    <p>
      90 % des e-mails envoyés par des entreprises à leurs clients contiennent
      au moins une faute d'orthographe, selon une étude réalisée par TextMaster.
      D’autres études pointent qu’un site marchand qui contient des erreurs sur
      sa page d’accueil perd jusqu’à 50% de ses acheteurs potentiels. Ces
      erreurs feraient rater des ventes et coûteraient des millions aux
      entreprises.
    </p>
    <p>
      Les erreurs d’orthographe, c’est-à-dire des erreurs lexicales ou d’usage
      (vert, vers, verre) ou grammaticales (accords, conjugaisons, homophones
      grammaticaux), parfois combinées à des fautes mécaniques (omission ou
      inversion de lettres) décrédibilisent celui qui les commet.
    </p>
    <p>
      «{{ "\xa0" }}Nous sommes bouchers de père en fils{{ "\xa0" }}» et «{{
        "\xa0"
      }}Nous sommes bouchés de père en fils{{ "\xa0" }}» sont loin d’avoir la
      même signification… À quelques lettres d’écart près, le message sera bien
      différent. Certes, le contexte peut aider le lecteur à comprendre ce qu’a
      voulu dire l’auteur d’un texte cependant, le scripteur doit veiller à
      respecter les règles linguistiques en vigueur pour se faire bien
      comprendre et rendre plus fluide la communication avec son interlocuteur.
      Un bon écrit est celui qui est immédiatement compréhensible et lisible par
      son destinataire mais également celui qui donne une image de sérieux et de
      rigueur.
    </p>
    <h4>
      "Le prix des fautes", Envoyé spécial, 19 février 2016
    </h4>
    <p>
      Participes passés, mots invariables, accord de l’adjectif en genre et en
      nombre… et si nous avions tous besoin d’une remise à niveau ? Être fâché
      avec l'orthographe a un coût aussi bien pour les employeurs que pour les
      salariés...
    </p>
    <b-row align-h="center">
      <iframe
        frameborder="0"
        width="640"
        height="360"
        src="https://www.dailymotion.com/embed/video/x3t2t2a"
        allowfullscreen
        allow="autoplay"
      ></iframe>
    </b-row>
    <h4>
      Livre-outil
    </h4>

    <a
      class="subtitle-link"
      href="https://oraprdnt.uqtr.uquebec.ca/pls/public/docs/GSC26/O0000669899_100_jours.pdf"
      target="_blank"
      >Bénédicte Gaillard, <i> 100 jours sans fautes</i>, Guy Saint-Jean
      Éditeur, 2015. <b-icon icon="box-arrow-right"></b-icon
    ></a>

    <h4>
      La nouvelle orthographe
    </h4>

    <a
      class="subtitle-link pdf-line"
      href="/pdf_OWcom/SpellingList.pdf"
      download="Règles nouvelles orthographe"
    >
      Liste nouvelle orthographe
      <img class="logo-pdf" src="../../assets/logo-pdf.png" />
    </a>
    <p class="none-margin-top">
      - D’après Danielle Béchennec et Liliane Sprenger,<i>
        Guide pratique de l’orthographe rectifiée</i
      >, disponible sur www.cahiers-pedagogiques.com
    </p>

    <a
      class="subtitle-link pdf-line"
      href="/pdf_OWcom/SpellingRule.pdf"
      download="Musée de la nouvelle orthographe"
    >
      Musée de la nouvelle orthographe
      <img class="logo-pdf" src="../../assets/logo-pdf.png" />
    </a>
    <h4>
      Ressource Écri+
    </h4>
    <p>
      Écri+ est un dispositif mutualisé pour aider les étudiants à développer
      leurs compétences en français écrit à l’université. Il contient des outils
      de qualité universitaire gratuits pour les établissements publics de
      l’enseignement supérieur et leurs étudiants.
    </p>
    <a
      class="subtitle-link"
      href="http://ecriplus.fr/ressources/"
      target="_blank"
    >
      Ressource Écri+ <b-icon icon="BoxArrowRight" />
    </a>
    <div>
    <a
      class="subtitle-link"
      href="http://uoh.univ-montp3.fr/j_ameliore_ma_maitrise_du_francais/portail/"
      target="_blank"
    >
      J'améliore mon français{{ "\xa0" }}: uoh.univ-montp3.fr <b-icon icon="BoxArrowRight" />
    </a>
    </div>
    <div>
    <a
      class="subtitle-link"
      href="https://ameliorer-ses-ecrits.univ-cotedazur.fr/"
      target="_blank"
    >
      Améliorer ses écrits{{ "\xa0" }}: Améliorer ses écrits – Des ressources pour améliorer votre français écrit <b-icon icon="BoxArrowRight" />
    </a>
    </div>
    <div>
    <a
      class="subtitle-link"
      href="https://www.fun-mooc.fr/courses/course-v1:unicaen+48002+session01/about"
      target="_blank"
    >
      le MOOC sur les compétences orthographiques :  www.fun-mooc.fr <b-icon icon="BoxArrowRight" />
    </a>
    </div>
    <div>
    <a
      class="subtitle-link"
      href="http://www.uoh.fr/front/notice?id=b2e045b1-b8f8-4756-8986-56f3001a402e"
      target="_blank"
    >
      Vidéos thématiques du MOOC : MOOC "Renforcer ses compétences orthographiques" | Portail UOH <b-icon icon="BoxArrowRight" />
    </a>
    </div>
    
    <SpellingInterractExe></SpellingInterractExe>
    <NextPrevBtn v-bind:nxtprev-list="nxtprevProSpelling" />
    <Footer />
  </div>
</template>

<style lang="scss"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Pdf from "@/components/Pdf.vue";
import SpellingInterractExe from "@/views/OWcom/ProSpelling/SpellingInterractExe.vue";
import { BIcon, BIconBoxArrowRight, BIconUpload } from "bootstrap-vue";
import NextPrevBtn from "@/components/NextPrevBtn.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    Pdf,
    SpellingInterractExe,
    BIcon,
    BIconBoxArrowRight,
    BIconUpload,
    NextPrevBtn,
    Footer,
  },
})
export default class ProSpelling extends Vue {
  protected nxtprevProSpelling = {
    BoolPrev: true,
    BoolNext: true,
    PrevImage: "/thumbnail3.png",
    NextImage: "/thumbnail7.png",
    PrevLink: "/Ecrit_Pro/Strategie",
    NextLink: "/Ecrit_Pro/Exemples",
  };
}
</script>
