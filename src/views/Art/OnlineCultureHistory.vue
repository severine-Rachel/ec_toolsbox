<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>HISTOIRE</h3>
   
      <strong>
        <a
          href="https://www.histoire.fr/"
          class="subtitle-link"
          target="_blank"
        >
          Histoire TV <b-icon icon="box-arrow-right"></b-icon>
        </a>
      </strong>
   
    <p>
      Découvrez les programmes et les vidéos de Histoire, la chaîne dédiée aux
      documentaires historiques et au débat culturel.
    </p>

      <strong>
        <a
          href="https://www.lhistoire.fr/"
          class="subtitle-link"
          target="_blank"
        >
          Histoire magazine <b-icon icon="box-arrow-right"></b-icon>
        </a>
      </strong>
 
    <p>
      Le magazine de référence des passionnés d'histoire. 
    </p>
 
      <strong>
        <a
          href="https://www.histoire-pour-tous.fr/"
          class="subtitle-link"
          target="_blank"
        >
          Histoire pour tous <b-icon icon="box-arrow-right"></b-icon>
        </a>
      </strong>

    <p>
      Histoire de France et de l'humanité des origines à nos jours: articles
      thématiques, guerres, livres, jeux, films, actualité, télé{{'\xa0'}}: l'Histoire
      pour Tous{{'\xa0'}}!
    </p>

      <strong>
        <a
          href="https://www.radioclassique.fr/radio/emissions/franck-ferrand-raconte/"
          class="subtitle-link"
          target="_blank"
        >
          Podcast Franck Ferrand raconte, Radio Classique <b-icon icon="box-arrow-right"></b-icon>
        </a>
      </strong>
  
    <p>
      Ce passionné d'Histoire raconte et plonge l’auditeur dans les grandes
      intrigues et les sagas de l’Histoire.
    </p>
    <NextPrevBtn v-bind:nxtprev-list="nxtprevOnlineCultureHistory"></NextPrevBtn>
    <Footer></Footer>
  </div>
</template>
<style lang="scss"></style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import {BIcon, BIconBoxArrowRight} from "bootstrap-vue";
import NextPrevBtn from "@/components/NextPrevBtn.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    BIconBoxArrowRight,
    BIcon,
    NextPrevBtn,
    Footer,
  },
})
export default class OnlineCultureHistory extends Vue {
  public nxtprevOnlineCultureHistory =
  {
    BoolPrev: true,
    BoolNext: true,
    PrevImage: "/thumbnail4.png",
    NextImage: "/thumbnail7.png",
    PrevLink: "/CultureenLigne/Musique",
    NextLink: "/CultureenLigne/Sciences",
  };
}
</script>
