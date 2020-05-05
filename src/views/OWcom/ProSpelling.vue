<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>AMÉLIORER VOTRE ORTHOGRAPHE</h3>
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
    
  
      <a class="subtitle-link" href="/pdf_OWcom/SpellingList.pdf" download="Règles nouvelles orthographe">Liste nouvelle orthographe  <b-icon icon="upload"></b-icon> </a>   <p>- D’après Danielle Béchennec et Liliane
      Sprenger,<i> Guide pratique de l’orthographe rectifiée</i>, disponible sur
      www.cahiers-pedagogiques.com
    </p>

    <Pdf v-bind:galery-pdf="pdfRule"></Pdf>
     <SpellingInterractExe></SpellingInterractExe>
    <Footer></Footer>
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
    Footer,
  },
})
export default class ProSpelling extends Vue {
  public pdfList = [
    {
      pdfLink: "/pdf_OWcom/SpellingList.pdf",
      pdfDownload: "RegleOrthographe",
      TxtPdf: "Règles nouvelles orthographe",
    },
  ];
  public pdfRule = [
    {
      pdfLink: "/pdf_OWcom/SpellingRule.pdf",
      pdfDownload: "Musée de la nouvelle orthographe",
      TxtPdf: "Musée de la nouvelle orthographe",
    },
  ];
}
</script>
