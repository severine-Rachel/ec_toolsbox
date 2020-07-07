<template>
  <div>
    <Header />
    <Menu />
    <h3 id="InfographyInPractise">
      EN PRATIQUE...
    </h3>
    <a
      class="subtitle-link"
      href="https://www.spotpink.com/2017/06/26/compilation-meilleures-infographies-2017/"
      target="_blank"
      ><strong>
        Exemples des meilleures infographies 2017
        <b-icon icon="box-arrow-right" />
      </strong>
    </a>
    <p></p>
    <p>
      <strong
        >Exemple d'une infographie réalisée dans le cadre d'un PPP (Projet
        Professionnel Personnalisé)</strong
      >
    </p>
    <img
      src="/picture_VisuCom/Poster_PPP.jpg"
      class="vertical"
      alt="ExemplePosterPPP"
    />
    <NextPrevBtn v-bind:nxtprev-list="nxtprevInfographyInPractise" />
    <Footer />
  </div>
</template>
<style lang="scss"></style>

<script lang="ts">
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import { Component, Vue } from "vue-property-decorator";
import { BIcon, BIconBoxArrowRight } from "bootstrap-vue";
import NextPrevBtn from "@/components/NextPrevBtn.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    BIcon,
    BIconBoxArrowRight,
    Header,
    Menu,
    NextPrevBtn,
    Footer,
  },
})
export default class InfographyInPractise extends Vue {
  protected nxtprevInfographyInPractise = {
    BoolPrev: true,
    BoolNext: false,
    PrevImage: "/thumbnail6.png",
    NextImage: "",
    PrevLink: "/Infographie/Astuces",
    NextLink: "",
  };
}
</script>
