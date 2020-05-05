<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>EN RÉSUMÉ : LES ORIGINES DE LA PERFORMANCE ARTISTIQUE</h3>
    <p>
      <strong>
        Cette frise est loin d’être exhaustive. Il faudrait y ajouter les Actionnistes viennois,  Christo ou encore d’autres grands noms de l’art performance mais il donne un aperçu des performances qui ont marqué l’Histoire de cet art. 
      </strong>
    </p>
    <img src="/picture_perf/timeline.png" class="horizontal" alt="Frise">
    <Footer></Footer>
  </div>
</template>
<style lang="scss"></style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";

import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
 
    Footer,
  },
})
export default class ArtPerfOrigin extends Vue {
 
}
</script>
