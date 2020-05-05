<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h2 class="rubric-title">CV</h2>
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

    <CVKeys></CVKeys>
    <CVTips></CVTips>
    <CVExample></CVExample>
    <CVTools></CVTools>
    <CVVideo></CVVideo>
    <CVGoFurther></CVGoFurther>

    <Footer></Footer>
  </div>
</template>

<style lang="scss">



</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Index from "@/components/Index.vue";
import CVKeys from "@/views/Appfile/CVKeys.vue";
import CVTips from "@/views/Appfile/CVTips.vue";
import CVExample from "@/views/Appfile/CVExample.vue";
import CVTools from "@/views/Appfile/CVTools.vue";
import CVVideo from "@/views/Appfile/CVVideo.vue";
import CVGoFurther from "@/views/Appfile/CVGoFurther.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Header,
    Menu,
    Index,
    CVKeys,
    CVTips,
    CVExample,
    CVTools,
    CVVideo,
    CVGoFurther,

    Footer,
  },
})
export default class CV extends Vue {
  public indexCV = [
    {
      IndexTitle: "LES FONDAMENTAUX : FICHES-CLÉS",
      IndexId: "#keysCV",
      IndexImage: "/thumbnail7.png",
    },
    {
      IndexTitle: "CONSEILS ET ASTUCES",
      IndexId: "#tipsCV",
      IndexImage: "/thumbnail1.png",
    },
    {
      IndexTitle: "EXEMPLES DE CV (IUT)",
      IndexId: "#exampleCV",
      IndexImage: "/thumbnail2.png",
    },
    {
      IndexTitle: "OUTILS D'AIDE À LA CONCEPTION DE CV",
      IndexId: "#toolCV",
      IndexImage: "/thumbnail3.png",
    },
    {
      IndexTitle: "LE CV VIDÉO",
      IndexId: "#videoCV",
      IndexImage: "/thumbnail4.png",
    },
    {
      IndexTitle: "POUR ALLER PLUS LOIN !",
      IndexId: "#go-furtherCV",
      IndexImage: "/thumbnail5.png",
    },
  ];
}
</script>
