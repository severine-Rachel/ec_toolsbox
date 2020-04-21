<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>HISTOIRE</h3>
    <p>
      <strong>
        <a
          href="https://www.histoire.fr/"
          class="subtitle-link"
          target="_blank"
        >
          Histoire TV <b-icon icon="box-arrow-right"></b-icon>
        </a>
      </strong>
    </p>
    <p>
      Découvrez les programmes et les vidéos de Histoire, la chaîne dédiée aux
      documentaires historiques et au débat culturel.
    </p>
    <p>
      <strong>
        <a
          href="https://www.lhistoire.fr/"
          class="subtitle-link"
          target="_blank"
        >
          Histoire magazine <b-icon icon="box-arrow-right"></b-icon>
        </a>
      </strong>
    </p>
    <p>
      Le magazine de référence des passionnés d'histoire. 
    </p>
    <p>
      <strong>
        <a
          href="https://www.histoire-pour-tous.fr/"
          class="subtitle-link"
          target="_blank"
        >
          Histoire pour tous <b-icon icon="box-arrow-right"></b-icon>
        </a>
      </strong>
    </p>
    <p>
      Histoire de France et de l'humanité des origines à nos jours: articles
      thématiques, guerres, livres, jeux, films, actualité, télé : l'Histoire
      pour Tous !
    </p>
    <p>
      <strong>
        <a
          href="https://www.radioclassique.fr/radio/emissions/franck-ferrand-raconte/"
          class="subtitle-link"
          target="_blank"
        >
          Podcast Franck Ferrand raconte, Radio Classique <b-icon icon="box-arrow-right"></b-icon>
        </a>
      </strong>
    </p>
    <p>
      Ce passionné d'Histoire raconte et plonge l’auditeur dans les grandes
      intrigues et les sagas de l’Histoire.
    </p>
    <Footer></Footer>
  </div>
</template>
<style lang="scss"></style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import {BIcon, BIconBoxArrowRight} from "bootstrap-vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    BIconBoxArrowRight,
    BIcon,
    Footer,
  },
})
export default class OnlineCultureHistory extends Vue {}
</script>
