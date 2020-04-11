<template>
  <div id="nav-header">
    <b-nav pills fill>
      <b-nav-item class="rubric" id="home" href="#">ACCUEIL</b-nav-item>

      <b-nav-item-dropdown
        class="rubric"
        text-color="white"
        text="DOSSIER DE CANDIDATURE"
        toggle-class="nav-link-custom"
      >
        <b-dropdown-item class="sub-rubric" href="#">CV</b-dropdown-item>
        <b-dropdown-item class="sub-rubric" href="#"
          >LETTRE DE MOTIVATION</b-dropdown-item
        >
        <b-dropdown-item class="sub-rubric" href="#"
          >ENTRETIEN DE RECRUTEMENT</b-dropdown-item
        >
      </b-nav-item-dropdown>

      <b-nav-item-dropdown
        class="rubric"
        text="COMMUNICATION ÉCRITE ET ORALE"
        toggle-class="nav-link-custom"
      >
        <b-dropdown-item class="sub-rubric" href="#"
          >QU'EST CE QUE LA COMMUNICATION</b-dropdown-item
        >
        <b-dropdown-item class="sub-rubric" href="#"
          >ECRIT PROFESSIONNELS, <br />ACADÉMIQUES ET
          D'INVENTION</b-dropdown-item
        >
        <b-dropdown-item class="sub-rubric" href="#"
          >PRISE DE PAROLE EN PUBLIQUE</b-dropdown-item
        >
        <b-dropdown-item class="sub-rubric" href="#"
          >CONDUITE DE R&Eacute;UNION</b-dropdown-item
        >
      </b-nav-item-dropdown>

      <b-nav-item-dropdown
        class="rubric"
        text="COMMUNICATION VISUELLE"
        toggle-class="nav-link-custom"
      >
        <b-dropdown-item class="sub-rubric" href="#">POSTER</b-dropdown-item>
        <b-dropdown-item class="sub-rubric" href="#"
          >DIAPORAMAS</b-dropdown-item
        >
        <b-dropdown-item class="sub-rubric" href="#"
          >INFOGRAPHIES</b-dropdown-item
        >
      </b-nav-item-dropdown>

      <b-nav-item-dropdown
        class="rubric"
        text="ARTS ET CULTURE"
        toggle-class="nav-link-custom"
      >
        <b-dropdown-item class="sub-rubric" href="#"
          >LA PERFORMANCE ARTISTIQUE</b-dropdown-item
        >
        <b-dropdown-item class="sub-rubric" href="#"
          >PLAISIR DE LIRE</b-dropdown-item
        >
      </b-nav-item-dropdown>

      <b-nav-item id="ceasura"></b-nav-item>

      <b-nav-item class="rubric" id="contact" href="#">QUI SUIS-JE</b-nav-item>
    </b-nav>
  </div>
</template>

<style lang="scss">
#nav-header {
  position: sticky; //work if it parent-component can scroll (home scroll, not header[that's why it didn't work]) 
  top: 0; //when menu change from relative to absolute, need the absolute position:top 0;
  z-index: 1000; //put menu above other elements
}
.rubric {
  background-image: url("../assets/button.png");
  background-size: 100% 100%;
  border-radius: 0px;
  margin-right: 0.5vw;
  width: 15.5vw;
  font-family: Myriad;
  text-align: center;
  &:hover {
    background-image: url("../assets/buttonhover.png");
    background-size: 100% 100%;
  }
}
#home {
  //rubric home
  background-image: url("../assets/buttonhover.png");
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
  background-color: #1694d6;
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
}
.show > .nav-link {
  background-image: url("../assets/buttonhover.png");
  background-size: 100% 100%;
}
.nav-link-custom {
  color: white !important;
}
.nav-link {
  color: white !important;
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
