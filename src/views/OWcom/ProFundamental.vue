<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>LES FONDAMENTAUX</h3>
    <p>
      Pour tout écrit, il faut adopter une démarche par objectif:
    </p>
    <img id="sharepicture" src="/picture_OWcom/schematic/schema_pro.png" alt="structuration-discours">
    <p>
      Source : Mireille Brahic, Mieux rédiger vos écrits professionnels, Éditions d’Organisation, 2004.
    </p>
    <Pdf v-bind:galery-pdf="pdfPro"></Pdf>
    <p>source : http://fr.copian.ca/biblio/apprenti/rhdcc/competences_essentielles/conseils_redaction/conseils_redaction.pdf</p>
    
    <Footer></Footer>
  </div>
</template>

<style lang="scss"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Pdf from "@/components/Pdf.vue"
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    Pdf,
    Footer,
  },
})
export default class ProFundamental extends Vue {
  public pdfPro= [
    {
      pdfLink:"/pdf_cv/fundamentals_CV_Keys.pdf",
      pdfDownload:"FicheConseilRedaction",
      TxtPdf:"Fiche conseil rédaction"
    }
  ]
}
</script>
