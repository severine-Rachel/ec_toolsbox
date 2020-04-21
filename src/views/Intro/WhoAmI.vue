<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>QUI SUIS-JE ?</h3>
    <p>
      Enseignante certifiée de Lettres modernes, docteure en Littérature
      française, générale et comparée et titulaire d’un DESS en Édition et
      Communication, j’ai enseigné l’expression-communication dans divers
      établissements du Supérieur (CNAM, ESEO, ESSCA, UA, UCO...) pendant plus
      d’une dizaine d’années et principalement à l’Institut Universitaire et
      Technologique d’Angers depuis 2011. Je suis également responsable de la
      communication du département.
    </p>
    <p>
      Adhérente à l'Association des Enseignants en Communication des IUT,
      j'articule aujourd'hui mes domaines de recherche autour de la pédagogie
      dans le Supérieur et de l'enseignement de la communication.
    </p>
    <p>
      J’ai publié l’ouvrage Les Premiers entretiens de recrutement : toutes les
      clés pour se démarquer. Concours, stages, emplois (Ellipses, 2020) ainsi
      que deux études littéraires, Les Réalismes haïtiens contemporains. Récit
      et conscience sociale (Honoré Champion, 2013) et L’Univers d’Axel Gauvin.
      Paysage, société, écriture (L’Harmattan, 2005).
    </p>

    <Publish></Publish>
    <Footer></Footer>
  </div>
</template>
<style lang="scss"></style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Publish from "@/views/Intro/Publish.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    Publish,
    Footer,
  },
})
export default class WhoAmI extends Vue {}
</script>
