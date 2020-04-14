<template>
<div>
    <Header></Header>
    <Menu></Menu>
    <p>
      Vous trouverez ici des outils qui vous permettront de concevoir votre CV 
      (contenu et forme). Une astuce : partez toujours d’un modèle classique, 
      que vous prendrez le temps de bien structurer, pour aller progressivement 
      vers l’originalité. Dans tous les cas, respectez bien l’ordre de 
      hiérarchisation des éléments clés et le sens de lecture du CV.
    </p>
    <h3>
        LES FONDAMENTAUX: FICHES CLEFS
    </h3>
    
    <a href="/fundamentals_CV_Keys.pdf" download="10PointsClesCV">ici</a>
    <Galery></Galery>
    <Footer></Footer>
</div>
</template>

<style lang="scss">

</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Galery from "@/components/Galery.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Header,
    Menu,
    Galery,
    Footer
  }
})
export default class CV extends Vue {}
</script>