<template>
  <div>
    <Header />
    <Menu />
    <div id="container-intro">
      <h2>À PROPOS - PEGGY RAFFY-HIDEUX</h2>

      <img
        id="background-logo"
        src="../../assets/basic-Graph/Logo3.png"
        atl="Peggy Raffy-Hideux Logo Design"
      />
      <p>
        Enseignante certifiée de Lettres modernes, docteure en Littérature
        française, générale et comparée et titulaire d’un DESS en Édition et
        Communication, j’ai enseigné l’expression-communication dans divers
        établissements du Supérieur (CNAM, ESEO, ESSCA, UA, UCO...) pendant plus
        d’une dizaine d’années et principalement à l’Institut Universitaire et
        Technologique d’Angers depuis 2011. Je suis également responsable de la
        communication du département. Membre de l'Association des Enseignants en
        Communication des IUT, j'articule aujourd'hui mes domaines de recherche
        autour de la pédagogie dans le Supérieur et de l'enseignement de la
        communication.
      </p>
    </div>

    <Publish></Publish>
    <Footer />
  </div>
</template>
<style lang="scss">
@media (min-width: 600px) {
  #background-logo {
    position: absolute;
    z-index: -1;
    opacity: 0.1;
    height: 120%;
    margin-left: 5%;
    top: 2rem;
  }
}
@media (max-width: 600px) {
  #background-logo {
    position: absolute;
    z-index: -1;
    opacity: 0.1;
    width:90%;
    margin-left: 5%;
    top: 6rem;
  }
}
#container-intro {
  position: relative;
}
</style>
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
