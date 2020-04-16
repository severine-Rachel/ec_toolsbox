<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <p>
      <strong>
        Vous trouverez ici des outils qui vous permettront de concevoir votre CV
        (contenu et forme). Une astuce : partez toujours d’un modèle classique,
        que vous prendrez le temps de bien structurer, pour aller
        progressivement vers l’originalité. Dans tous les cas, respectez bien
        l’ordre de hiérarchisation des éléments clés et le sens de lecture du
        CV.
      </strong>
    </p>
    <Index v-bind:index-list="indexCV"></Index>

    <h3 id="keysCV">
      LES FONDAMENTAUX : FICHES-CLÉS
    </h3>
    <Pdf v-bind:galery-pdf="pdfCV"></Pdf>

    <a
      id="cv-galery"
      href="https://www.univ-angers.fr/fr/formations/insertion-professionnelle/ip-box/cv.html"
      target="_blank"
    >
      source:
      <b-icon icon="box-arrow-right"></b-icon>
      www.univ-angers.fr/fr/formations/insertion-professionnelle/ip-box
    </a>

    <Galery v-bind:galery-picture="galeryCV"></Galery>

    <div>
      <h3 id="tipsCV">
        CONSEILS ET ASTUCES
      </h3>

      <h3 id="exampleCV">
        EXEMPLES DE CV (IUT)
      </h3>

      <Galery v-bind:galery-picture="CVIUT"></Galery>

      <h3 id="toolCV">
        OUTILS D'AIDE À LA CONCEPTION DE CV
      </h3>

      <p>
        <strong>
          Modèles de CV classiques gratuits
        </strong>

        <a
          href="https://www.emploitic.com/conseils/modeles-de-cv"
          alt="emploitic"
          target="_blank"
          ><img class="Help_Builder" src="/picture_cv/CVTool1.png"/><b-icon
            icon="box-arrow-right"
          ></b-icon
        ></a>
      </p>

      <p>
        <strong>
          Modèles de CV originaux gratuits
        </strong>
        <a
          href="https://www.creeruncv.com/exemple-de-cv/gratuit/"
          alt="creeruncv"
          target="_blank"
          ><img class="Help_Builder" src="/picture_cv/CVTool2.png"/><b-icon
            icon="box-arrow-right"
          ></b-icon
        ></a>
        <a
          href="https://www.cvmaker.fr/exemples-de-cv"
          alt="cvmaker"
          target="_blank"
          ><img class="Help_Builder" src="/picture_cv/CVTool3.png"/><b-icon
            icon="box-arrow-right"
          ></b-icon
        ></a>
        <a
          href="https://www.modeles-de-cv.com/"
          alt="modeles-de-cv"
          target="_blank"
          ><img class="Help_Builder" src="/picture_cv/CVTool4.png"/><b-icon
            icon="box-arrow-right"
          ></b-icon
        ></a>
        <a href="https://www.exempledecv.com/" alt="exempledecv" target="_blank"
          ><img class="Help_Builder" src="/picture_cv/CVTool5.png"/><b-icon
            icon="box-arrow-right"
          ></b-icon
        ></a>
      </p>
      <h3 id="videoCV">
        LE CV VIDÉO
      </h3>
      <p>
        Le CV vidéo vous donne une occasion de vous démarquer, de mettre
        davantage de chances de votre côté. Il montre également que vous
        maîtrisez les nouveaux outils de communication, que vous vous exprimez
        avec aisance à l'oral et éventuellement en plusieurs langues.
      </p>
      <p>
        <strong>
          Conseils pour un bon CV vidéo:
        </strong>
      </p>
      <p>
        <strong>
          Exemples de CV vidéo:
        </strong>
      </p>
      <h3 id="go-furtherCV">
        POUR ALLER PLUS LOIN !
      </h3>
      <p>
        <strong>
          Comment créer un CV très original ?
        </strong>
      </p>
      <p>
        <strong>
          Quelques exemples de CV très originaux:
        </strong>
      </p>
    </div>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
#cv-galery {
  margin-left: 10%;
}
.Help_Builder {
  width: 10vw;
  height: 20vh;
  margin: 0 0 0 2vw;
  border: #bce8ff 5px solid;
}
.subtitle-link{
  text-decoration: none !important;
  color:#2e367f;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Index from "@/components/Index.vue";
import Pdf from "@/components/Pdf.vue"
import Galery from "@/components/Galery.vue";
import Footer from "@/components/Footer.vue";
import { BIcon,  BIconBoxArrowRight } from "bootstrap-vue";
@Component({
  components: {
    Header, Menu,
    Index, 
    Pdf, Galery,
    BIcon, BIconBoxArrowRight,
    Footer
  }
})
export default class CV extends Vue {
  public indexCV= [
    {
    IndexTitle:  "LES FONDAMENTAUX : FICHES-CLÉS",
    IndexId: "#keysCV",
    IndexImage: "/thumbail.png"
    },
    {
    IndexTitle: "CONSEILS ET ASTUCES",
    IndexId: "#tipsCV",
    IndexImage:"/thumbail.png"
    },
    {
    IndexTitle: "EXEMPLES DE CV (IUT)",
    IndexId: "#exampleCV",
    IndexImage:"/thumbail.png"
    },
    {
    IndexTitle: "OUTILS D'AIDE À LA CONCEPTION DE CV",
    IndexId: "#toolCV",
    IndexImage:"/thumbail.png"
    },
    {
    IndexTitle:"LE CV VIDÉO" ,
    IndexId: "#videoCV",
    IndexImage:"/thumbail.png"
    },
    {
    IndexTitle: "POUR ALLER PLUS LOIN !",
    IndexId: "#go-furtherCV",
    IndexImage:"/thumbail.png"
    }
  ]
  public galeryCV: string[] = [
    "/picture_cv/fundamentals_CV_Keys.png",
    "/picture_cv/fundamentals_CV_Grid.png",
    "/picture_cv/fundamentals_CV_Classic.png"

  ];

 public pdfCV= [
    {
      pdfLink:"/pdf_cv/fundamentals_CV_Keys.pdf",
      pdfDownload:"10PointsClés",
      TxtPdf:"Fiche 1 : Les 10 points clés"
    },
    {
      pdfLink:"/pdf_cv/fundamentals_CV_Classic.pdf",
      pdfDownload:"grillAnalyseCV",
      TxtPdf: "Fiche 2 : La grille d’analyse du CV"
    },
    {
      pdfLink:"/pdf_cv/fundamentals_CV_Grid.pdf",
      pdfDownload:"ModèleTrameClassique",
      TxtPdf: "Fiche 3 : Modèle de trame classique"
    }
  ];
  public CVIUT: string[] = [
    "/picture_cv/example_CV_IUT1.png",
    "/picture_cv/example_CV_IUT2.png",
    "/picture_cv/example_CV_IUT3.png",
    "/picture_cv/example_CV_IUT4.png",
    "/picture_cv/example_CV_IUT55.png"
  ];
}
</script>
