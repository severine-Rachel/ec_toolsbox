<template>
  <div id="header-template">
    <div id="header-banner">
      <h1>P. RAFFY-HIDEUX</h1>

      <h2>Enseignante en lettre, Expression et Communication</h2>
    </div>
    <div>
      <b-nav pills fill id="nav-header">
        <b-nav-item class="rubric" id="home">ACCUEIL</b-nav-item>

        <b-nav-item-dropdown
          class="rubric"
          text-color="white"
          text="DOSSIER DE CANDIDATURE"
          toggle-class="nav-link-custom"
          right
        >
          <b-dropdown-item class="sub-rubric">CV</b-dropdown-item>
          <b-dropdown-item class="sub-rubric"
            >LETTRE DE MOTIVATION</b-dropdown-item
          >
          <b-dropdown-item class="sub-rubric"
            >ENTRETIEN DE RECRUTEMENT</b-dropdown-item
          >
        </b-nav-item-dropdown>
        <b-nav-item-dropdown
          class="rubric"
          text="COMMUNICATION ÉCRITE ET ORALE"
          toggle-class="nav-link-custom"
          right
        >
          <b-dropdown-item class="sub-rubric"
            >QU'EST CE QUE LA COMMUNICATION</b-dropdown-item
          >
          <b-dropdown-item class="sub-rubric"
            >ECRIT PROFESSIONNELS, <br />ACADÉMIQUES ET
            D'INVENTION</b-dropdown-item
          >
          <b-dropdown-item class="sub-rubric"
            >PRISE DE PAROLE EN PUBLIQUE</b-dropdown-item
          >
          <b-dropdown-item class="sub-rubric"
            >CONDUITE DE R&Eacute;UNION</b-dropdown-item
          >
        </b-nav-item-dropdown>

        <b-nav-item-dropdown
          class="rubric"
          text="COMMUNICATION VISUELLE"
          toggle-class="nav-link-custom"
          right
        >
          <b-dropdown-item class="sub-rubric">POSTER</b-dropdown-item>
          <b-dropdown-item class="sub-rubric">DIAPORAMAS</b-dropdown-item>
          <b-dropdown-item class="sub-rubric">INFOGRAPHIES</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown
          class="rubric"
          text="ARTS ET CULTURE"
          toggle-class="nav-link-custom"
          right
        >
          <b-dropdown-item class="sub-rubric"
            >LA PERFORMANCE ARTISTIQUE</b-dropdown-item
          >
          <b-dropdown-item class="sub-rubric">PLAISIR DE LIRE</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item id="ceasura"></b-nav-item>
        <b-nav-item class="rubric">QUI SUIS-JE</b-nav-item>
      </b-nav>
    </div>
  </div>
</template>

<style lang="scss">

#header-banner { //banner of website
  background-image: url(../assets/banner.png);
  background-size: 100% 100%;
  width: 100vw;
  height: 30vh;
}


@font-face {
  font-family: Myriad;
  src: url(../assets/MyriadProBC.otf);
}
h1 {
  padding-top: 3rem !important;
  margin-bottom: unset !important;
  margin-left: 3rem !important;
  font-family: Myriad;
  color: white;
}
h2 {
  margin-left: 3rem !important;
  font-family: Myriad;
  color:white;
}
#nav-header {
  width: 100vw;
  position: sticky;
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
#home { //rubric home
  background-image: url("../assets/buttonhover.png");
  background-size: 100% 100%;
}
#ceasura {
  background-color: red;
  margin-right: 1vw;
  margin-left: 0.5vw;
  width: 1vw;
}

.sub-rubric {
  background-color: #1694d6;
  width: 15.8vw;
  text-align: center;
  &:hover{
    background-color: red;
  }
}

.dropdown-menu {
  border-radius: 0px !important;
  border: 0px !important;
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
export default class Header extends Vue {
  // export default==public class
}
</script>
