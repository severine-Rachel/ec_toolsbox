<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>AMÉLIORER VOTRE ORTHOGRAPHE</h3>
    <p>
      <strong>
        Livre-outil
      </strong>
    </p>
    <p>
      <a
        href="https://oraprdnt.uqtr.uquebec.ca/pls/public/docs/GSC26/O0000669899_100_jours.pdf"
        target="_blank"
        >Bénédicte Gaillard, <i> 100 jours sans fautes</i>, Guy Saint-Jean
        Éditeur, 2015.</a
      >
    </p>
    <SpellingInterractExe></SpellingInterractExe>

    
    <p>
      <strong>
        La nouvelle orthographe
      </strong>
    </p>
    <Pdf v-bind:galery-pdf="pdfRule"></Pdf>
    <p>
      Liste nouvelle orthographe-D’après Danielle Béchennec et Liliane
      Sprenger,<i> Guide pratique de l’orthographe rectifiée</i>, disponible sur
      www.cahiers-pedagogiques.com
    </p>
    <Pdf v-bind:galery-pdf="pdfMuseum"></Pdf>
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
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    Pdf,
    SpellingInterractExe,
    Footer,
  },
})
export default class ProSpelling extends Vue {
  public pdfRule = [
    {
      pdfLink: "/pdf_cv/fundamentals_CV_Keys.pdf",
      pdfDownload: "RegleOrthographe",
      TxtPdf: "Règles nouvelles orthographe",
    },
  ];
  public pdfMuseum = [
    {
      pdfLink: "/pdf_cv/fundamentals_CV_Keys.pdf",
      pdfDownload: "MuseeOrthographe",
      TxtPdf: "Musée de la nouvelle orthographe",
    },
  ];
}
</script>
