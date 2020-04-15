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
    <h3>
      LES FONDAMENTAUX: FICHES CLEFS
    </h3>
    <b-row class="justify-content-md-center">
      <a
        href="/pdf_cv/fundamentals_CV_Keys.pdf"
        class="fundamentals-pdf"
        download="10PointsClesCV"
      >
        <b-icon icon="upload"></b-icon> ClefsCV</a
      >
      <a
        href="/pdf_cv/fundamentals_CV_Classic.pdf"
        class="fundamentals-pdf"
        download="TrameClassiqueCV"
      >
        <b-icon icon="upload"></b-icon> TrameClassique</a
      >
      <a
        href="/pdf_cv/fundamentals_CV_Grid.pdf"
        class="fundamentals-pdf"
        download="grilleAnalyseCV"
      >
        <b-icon icon="upload"></b-icon> AnalyseCV</a
      >
    </b-row>

    <a
      id="cv-galery"
      href="https://www.univ-angers.fr/fr/formations/insertion-professionnelle/ip-box"
      target="_blank"
    >
      source
    </a>

    <Galery v-bind:galery-picture="galeryCV"></Galery>

    <div>
      <h3>
        CONSEILS ET ASTUCES
      </h3>
      <h3>
        EXEMPLES DE CV (IUT)
      </h3>
      <h3>
        OUTILS D'AIDE À LA CONCEPTION DE CV
      </h3>
      <h3>
        LE CV VIDÉO
      </h3>
      <p>
        Le CV vidéo vous donne une occasion de vous démarquer, de mettre
        davantage de chances de votre côté. Il montre également que vous
        maîtrisez les nouveaux outils de communication, que vous vous exprimez
        avec aisance à l'oral et éventuellement en plusieurs langues.
      </p>
      <p>
        Conseils pour un bon CV vidéo:
      </p>
      <p>
        Exemples de CV vidéo:
      </p>
      <h3>
        POUR ALLER PLUS LOIN !
      </h3>
      <p>
        Comment créer un CV très original ?
      </p>
       <p>
        Quelques exemples de CV très originaux:
      </p>
    </div>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
#cv-galery {
  position: absolute;
  right: 31vw;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Galery from "@/components/Galery.vue";
import Footer from "@/components/Footer.vue";
import { BIcon, BIconUpload } from "bootstrap-vue";
@Component({
  components: {
    Header,
    Menu,
    Galery,
    BIcon,
    BIconUpload,
    Footer
  }
})
export default class CV extends Vue {
  public galeryCV: string[] = [
    "/picture_cv/fundamentals_CV_Keys.png",
    "/picture_cv/fundamentals_CV_Classic.png",
    "/picture_cv/fundamentals_CV_Grid.png"
  ];
}
</script>
