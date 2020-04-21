<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h2 class="rubric-title">L'IMPORTANCE DE LA CULTURE GÉNÉRALE</h2>
    <p>
      <strong>
        En quoi la culture générale est-elle essentielle à l’individu ? Pour
        ceux qui en douteraient, petit florilège d’articles sur le sujet !
      </strong>
    </p>
    <p>
      <u
        >Astrid de Larminat « À quoi sert la culture générale ? », Le Figaro
        Littéraire, 20 octobre 2011.</u
      >
    </p>
    <p>
      Un pamphlet s'interroge sur les bienfaits de la culture. Nous avons voulu
      savoir ce qu'en pensent les écrivains.
    </p>
    <a
      class="fundamentals-pdf"
      href="/pdf_culture/WhyCulture.pdf"
      download="A_Quoi_Sert_La_Culture_Generale"
    >
      <b-icon icon="upload"></b-icon> A quoi sert la culture générale ? 
    </a>
    <p>
      <u
        >Jessica Gourdon, « Je ne connaissais rien, c'était humiliant », Le
        Monde, 21 mai 2019.</u
      >
    </p>
    <p>
      De nombreux élèves prennent conscience de leur manque de culture générale
      au moment où ils commencent leurs études supérieures. Confrontés à des
      jeunes au capital social et culturel plus élevé, ils se sentent complexés.
      Témoignages.
    </p>
    <a
      class="fundamentals-pdf"
      href="/pdf_culture/HumiliationCulture.pdf"
      download="Je_Ne_Connaissais_Rien"
    >
      <b-icon icon="upload"></b-icon> Je ne connaissais rien
    </a>
    <p>
      <u
        >Vicky Chahine, « Comme disaient Zadig et Voltaire… », Le Monde, 23
        janvier 2017.</u
      >
    </p>
    <p>
      En entreprise, le « capital culturel » est devenu un atout majeur pour le
      salarié. Des pros de la culture gé. ont flairé le filon. Alors, qui a
      peint « La Joconde » ?
    </p>
    <a
      class="fundamentals-pdf"
      href="/pdf_culture/VoltaireCulture.pdf"
      download="Comme_Disaient_Zadig_Et_Voltaire"
    >
      <b-icon icon="upload"></b-icon> Comme disaient Zadig et Voltaire 
    </a>
    <p>
      <u
        >Olivier Babeau et de Coline Debayle, « La culture générale des salariés
        doit devenir une priorité », Les Échos, 24 janvier 2017.</u
      >
    </p>
    <p>
      Aujourd’hui, en entreprise, une fois arrivé à un certain niveau de
      responsabilité, ce sont moins les compétences métiers ou techniques qui
      fondent le succès (de fait, la plupart des collaborateurs les possèdent)
      qu’un ensemble de compétences « invisibles » souvent appelées soft skills.
    </p>
    <a
      class="fundamentals-pdf"
      href="/pdf_culture/SalaryCulture.pdf"
      download="La_Culture_Generale_Des_Salaries"
    >
      <b-icon icon="upload"></b-icon> La culture générale des salariés 
    </a>
    <p>
      <u
        >Abnousse Shalmani, « La culture générale, ce trésor », L’Express, 6
        février 2020.</u
      >
    </p>
    <p>
      En juin 2013, Sciences po rejoignait l’Ecole normale supérieure de Lyon en
      supprimant l’épreuve de culture générale de son concours d’entrée. En
      2020, l’ENA s’y met aussi. Depuis Pierre Bourdieu, il est de bon ton de se
      boucher le nez devant ce qui constituait le fleuron des humanités.
    </p>
    <a
      class="fundamentals-pdf"
      href="/pdf_culture/TreasureCulture.pdf"
      download="La_Culture_Ce_Tresor"
    >
      <b-icon icon="upload"></b-icon> La culture, ce trésor
    </a>
    <Footer></Footer>
  </div>
</template>
<style lang="scss"></style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import {BIcon, BIconUpload} from "bootstrap-vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    BIcon,
    BIconUpload,
    Footer,
  },
})
export default class GeneralCulture extends Vue {}
</script>
