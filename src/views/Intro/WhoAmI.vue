<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <div id="container-intro">
      <h3>QUI SUIS-JE{{'\xa0'}}?</h3>

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
        communication du département.
      </p>
      <p>
        Membre de l'Association des Enseignants en Communication des IUT,
        j'articule aujourd'hui mes domaines de recherche autour de la pédagogie
        dans le Supérieur et de l'enseignement de la communication.
      </p>
      <p>
        J’ai publié l’ouvrage<i> Les Premiers entretiens de recrutement : toutes
        les clés pour se démarquer. Concours, stages, emplois</i> (Ellipses, 2020)
        ainsi que deux études littéraires, <i>Les Réalismes haïtiens contemporains.
        Récit et conscience sociale</i> (Honoré Champion, 2013) et<i> L’Univers d’Axel
        Gauvin. Paysage, société, écriture</i> (L’Harmattan, 2005).
      </p>
    </div>

    <Publish></Publish>
    <Footer></Footer>
  </div>
</template>
<style lang="scss">
#background-logo {
  position: absolute;
  z-index: -1;
  opacity: 0.1;
  height: 100%;
  margin-left: 5%;
  top:2rem;
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
