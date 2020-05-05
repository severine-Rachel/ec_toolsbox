<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3 id="ProjectionFundamental">
      LES FONDAMENTAUX
    </h3>

    <strong>
      <a
        href="http://weburfist.univ-bordeaux.fr/wp-content/uploads/2013/12/20140212_0409_0416_S.GUICHARD_pwp.pdf"
        target="_blank"
        class="subtitle-link"
        >Réaliser ses supports de présentation sur PowerPoint
        <b-icon icon="box-arrow-right"></b-icon
      ></a>
    </strong>
    <p></p>
    <strong>
      <a
        href="https://www.canva.com/fr_fr/decouvrir/tuto-diaporama-presentation/"
        target="_blank"
        class="subtitle-link"
        >Les clés d’un diaporama réussi <b-icon icon="box-arrow-right"></b-icon
      ></a>
    </strong>
    <h4>Les règles d'or du diaporama</h4>
    <strong>
      <a
        href="/pdf_projection/HowTo.pdf"
        class="subtitle-link"
        download="Les règles d’or du diaporama"
      >
        Télécharger le pdf <b-icon icon="upload"></b-icon>
      </a>
    </strong>
    <br />
    <img
      src="/picture_VisuCom/SlideRule.png"
      class="vertical"
      alt="Regles_Diaporama"
    />
    <p></p>
    <a
      class="subtitle-link"
      href="http://immac-pau.net/images/presentation/college/DNB/Fiche_diaporama_hist_arts.pdf"
      target="_blank"
    >
      <i>Source:</i>

      immac-pau.net <b-icon icon="box-arrow-right"></b-icon>
    </a>
    <Footer></Footer>
  </div>
</template>
<style lang="scss"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import { BIcon, BIconBoxArrowRight, BIconUpload } from "bootstrap-vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Header,
    Menu,
    BIcon,
    BIconBoxArrowRight,
    BIconUpload,
    Footer,
  },
})
export default class ProjectionFundamental extends Vue {}
</script>
