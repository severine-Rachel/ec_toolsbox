<template>
  <div id="nav-header">
    <b-nav pills fill>
      <b-nav-item class="rubric" id="home" to="/">ACCUEIL</b-nav-item>

      <b-nav-item-dropdown
        class="rubric"
        text-color="white"
        text="DOSSIER DE CANDIDATURE"
        toggle-class="nav-link-custom"
      >
        <b-dropdown-item class="sub-rubric" to="/CV">
          CV
        </b-dropdown-item>

        <b-dropdown-item class="sub-rubric" to="/Lettre_de_Motivation"
          >LETTRE DE MOTIVATION</b-dropdown-item
        >
        <b-dropdown-item class="sub-rubric" to="/Entretien"
          >ENTRETIEN DE RECRUTEMENT</b-dropdown-item
        >
      </b-nav-item-dropdown>

      <b-nav-item-dropdown
        class="rubric"
        text="COMMUNICATION ÉCRITE ET ORALE"
        toggle-class="nav-link-custom"
      >
        <b-dropdown-item class="sub-rubric" to="/Definition_Communication"
          >QU'EST CE QUE LA COMMUNICATION{{'\xa0'}}?</b-dropdown-item
        >
        <b-dropdown-item class="sub-rubric" to="/Ecrit_Pro"
          >ÉCRITS PROFESSIONNEL, <br />ACADÉMIQUE ET D'INVENTION</b-dropdown-item
        >
        <b-dropdown-item class="sub-rubric" to="/Prise_de_Parole"
          >PRISE DE PAROLE EN PUBLIC</b-dropdown-item
        >
        <b-dropdown-item class="sub-rubric" to="/Conduite_Reunion"
          >CONDUITE DE R&Eacute;UNION</b-dropdown-item
        >
      </b-nav-item-dropdown>

      <b-nav-item-dropdown
        class="rubric"
        text="COMMUNICATION VISUELLE"
        toggle-class="nav-link-custom"
      >
        <b-dropdown-item class="sub-rubric" to="/Affiche">AFFICHE</b-dropdown-item>
        <b-dropdown-item class="sub-rubric" to="/Diaporama">DIAPORAMA</b-dropdown-item>
        <b-dropdown-item class="sub-rubric" to="/Infographie"
          >INFOGRAPHIE</b-dropdown-item
        >
        <b-dropdown-item class="sub-rubric" to="/Audiovisuel"
          >AUDIOVISUEL</b-dropdown-item
        >
      </b-nav-item-dropdown>

      <b-nav-item-dropdown
        class="rubric"
        text="ARTS ET CULTURE"
        toggle-class="nav-link-custom"
      >
        <b-dropdown-item class="sub-rubric" to="/CultureGenerale"
          >L'IMPORTANCE DE LA <br />
          CULTURE EN GÉNÉRALE</b-dropdown-item
        >
        <b-dropdown-item class="sub-rubric" to="/PerformanceArtistique"
          >PERFORMANCE ARTISTIQUE</b-dropdown-item
        >
        <b-dropdown-item class="sub-rubric" to="/PlaisirdeLire"
          >PLAISIR DE LIRE</b-dropdown-item
        >
        <b-dropdown-item class="sub-rubric" to="/CultureenLigne"
          >CULTURE EN LIGNE</b-dropdown-item
        >
      </b-nav-item-dropdown>

      <b-nav-item id="ceasura"></b-nav-item>

      <b-nav-item class="rubric" id="contact" to="/QuiSuisJe">QUI SUIS-JE</b-nav-item>
    </b-nav>
  </div>
</template>

<style lang="scss">
#nav-header {
  position: sticky; //work if it parent-component can scroll (home scroll, not header[that's why it didn't work])
  top: 0; //when menu change from relative to absolute, need the absolute position:top 0;
  z-index: 1000; //put menu above other elements
  margin-bottom: 0.5vh;
}
.rubric {
  background-image: url("../assets/basic-Graph/button2.png");
  background-size: 100% 100%;
  border-radius: 0px;
  margin-right: 0.5vw;
  width: 15.5vw;
  font-family: Myriad;
  text-align: center !important;

  &:hover {
    background-image: url("../assets/basic-Graph/buttonhover2.png");
    background-size: 100% 100%;
  }
}
#home {
  //rubric home
  background-image: url("../assets/basic-Graph/buttonhover2.png");
  background-size: 100% 100%;
}
#ceasura {
  background-color: #c94a19;
  margin-right: 0.5vw;
  width: 1vw;
}
#contact {
  margin-right: 0;
}
.sub-rubric {
  background-color: #bce8ff;
  width: 15.8vw;
  text-align: center;
  color: #2e367f;

  &:hover {
    background-color: red;
  }
}

.dropdown-menu {
  border-radius: 0px !important;
  border: 0px !important;
  padding: 0 !important;
}
.dropdown-item {
  color: #2e367f !important;
  padding: 0.25rem 0 !important;
}
.show > .nav-link {
  background-image: url("../assets/basic-Graph/buttonhover2.png");
  background-size: 100% 100%;
}
.nav-link-custom {
  padding: 0.5rem 0 !important;
}
.nav-link {
  color: white !important;
}
.nav-pills .nav-link {
  border-radius: 0 !important;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { DropdownPlugin } from "bootstrap-vue";
import { NavPlugin } from "bootstrap-vue";

Vue.use(NavPlugin);
Vue.use(DropdownPlugin);
@Component({})
export default class Menu extends Vue {
  // export default==public class
}
</script>
