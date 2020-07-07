<template>
  <div>
    <Header />
    <Menu />
    <h3 id="keysCV">
      LES FONDAMENTAUX DU CV{{'\xa0'}}: FICHES-CLÉS
    </h3>
    <p>
      Vous trouverez ici des outils qui vous permettront de concevoir votre CV
        (contenu et forme). Une astuce{{'\xa0'}}: partez toujours d’un modèle
        classique, que vous prendrez le temps de bien structurer, pour aller
        progressivement vers l’originalité. Dans tous les cas, respectez bien
        l’ordre de hiérarchisation des éléments clés et le sens de lecture du
        CV.
    </p>
    <p>
     Trois fiches, à consulter ou à télécharger, 
      qui vous permettent de vous poser les bonnes
      questions sur la forme et le fond de votre CV. 
    </p>
    <Pdf v-bind:galery-pdf="pdfCV"></Pdf>

    <Galery v-bind:galery-picture="galeryCV"></Galery>
    <a
      class="subtitle-link"
      href="https://www.univ-angers.fr/fr/formations/insertion-professionnelle/ip-box/cv.html"
      target="_blank"
    >
      <i>Source :</i>

      www.univ-angers.fr/fr/formations/insertion-professionnelle/ip-box
      <b-icon icon="box-arrow-right" />
    </a>
    <NextPrevBtn v-bind:nxtprev-list="nxtprevCVFundamentals" />
    <Footer />
  </div>
</template>
<style lang="scss"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Pdf from "@/components/Pdf.vue";
import Galery from "@/components/Galery.vue";
import { BIcon, BIconBoxArrowRight } from "bootstrap-vue";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import NextPrevBtn from "@/components/NextPrevBtn.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Pdf,
    Galery,
    BIcon,
    BIconBoxArrowRight,
    Header,
    Menu,
    NextPrevBtn,
    Footer,
  },
})
export default class CVKeys extends Vue {
  protected galeryCV: string[] = [
    "/picture_cv/fundamentals_CV_Keys.png",
    "/picture_cv/fundamentals_CV_Grid.png",
    "/picture_cv/fundamentals_CV_Classic.png",
  ];

  protected pdfCV = [
    {
      PdfLink: "/pdf_cv/fundamentals_CV_Keys.pdf",
      PdfDownload: "Fiche 1 : Les 10 points clés",
      TxtPdf: "Fiche 1 : Les 10 points clés",
    },
    {
      PdfLink: "/pdf_cv/fundamentals_CV_Classic.pdf",
      PdfDownload: "Fiche 2 : La grille d’analyse du CV",
      TxtPdf: "Fiche 2 : La grille d’analyse du CV",
    },
    {
      PdfLink: "/pdf_cv/fundamentals_CV_Grid.pdf",
      PdfDownload: "Fiche 3 : Modèle de trame classique",
      TxtPdf: "Fiche 3 : Modèle de trame classique",
    },
  ];
    protected nxtprevCVFundamentals =
  {
    BoolPrev: false,
    BoolNext: true,
    PrevImage: "",
    NextImage: "/thumbnail1.png",
    PrevLink: "",
    NextLink: "/CV/Astuces",
  };
}
</script>
