<template>
  <div id="confidence-page">
    <h3>Politique de confidentialité</h3>
    <h4>Contenu embarqué depuis d’autres sites</h4>
    <p>
      Les articles de ce site peuvent inclure des contenus intégrés (par exemple
      des vidéos, images, articles…). Le contenu intégré depuis d’autres sites
      se comporte de la même manière que si le visiteur se rendait sur cet autre
      site.
    </p>
    <p>
      Ces sites web pourraient collecter des données sur vous, utiliser des
      cookies, embarquer des outils de suivis tiers, suivre vos interactions
      avec ces contenus embarqués si vous disposez d’un compte connecté sur leur
      site web.
    </p>
    <h4>Données utilisateurs</h4>
    <p>
      Aucune donnée rentrée sur le site raffy-hideux.fr n'est enregistrée sur un
      serveur. Aucune information n'est collectée depuis le site raffy-hideux.fr.
    </p>
    <Footer />
  </div>
</template>
<style lang="scss" scoped>
#confidence-page {
  position: relative;
}
@media (min-width: 600px) {
  h4 {
    color: #2e367f;
    font-family: Myriad;
    margin: 0 10%;
  }
}
@media (max-width: 600px) {
  h4 {
    color: #2e367f;
    font-family: Myriad;
    margin: 0 1%;
  }
}
</style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Footer,
  },
})
export default class Confidentiality extends Vue {
  // export default==protected class
}
</script>
