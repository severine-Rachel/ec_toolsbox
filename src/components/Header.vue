<template>
  <div id="header-template">
    <div id="header-banner">
     
            <b-navbar>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2 "
              placeholder="Rechercher"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              ><b-icon icon="search"></b-icon>Rechercher</b-button
            >
          </b-nav-form>
        </b-navbar-nav>
      </b-navbar>

      <h1>P. RAFFY-HIDEUX</h1>
      <h2>Enseignante en lettre, Expression et Communication</h2>



    </div>

    <div>
      <b-nav pills fill id="nav-header">
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

        <b-nav-item class="rubric" id="contact" href="#"
          >QUI SUIS-JE</b-nav-item
        >
      </b-nav>
    </div>
  </div>
</template>

<style lang="scss">
#header-banner {
  //banner of website
  background-image: url(../assets/banner.png);
  background-size: 100% 100%;
  height: 30vh;
}

@font-face {
  font-family: Myriad;
  src: url(../assets/MyriadProBC.otf);
}
.btn-secondary{
background-color: #1694d6 !important;
border:none !important;
  &:hover {
    background-color: #0e6ea1 !important;
  }
}
h1, h2 {
  
  margin-bottom: unset !important;
  margin-left: 3rem !important;
  font-family: Myriad;
  color: white;
}


#nav-header {
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
  color:#2E367F;
  &:hover {
    background-color: red;
  }
}

.dropdown-menu {
  border-radius: 0px !important;
  border: 0px !important;
  padding: 0 !important;
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
import { BFormInput } from "bootstrap-vue";
import { BButton } from "bootstrap-vue";
import { BNavbarNav } from "bootstrap-vue";
import { BNavbar } from "bootstrap-vue";
import { BIconSearch } from "bootstrap-vue";

Vue.component("b-navbar", BNavbar);
Vue.component("b-navbar-nav", BNavbarNav);
Vue.component("b-button", BButton);
Vue.component("b-form-input", BFormInput);
Vue.use(NavPlugin);
Vue.use(DropdownPlugin);
@Component({
  components: {
    BIconSearch,
  }
})
export default class Header extends Vue {
  // export default==public class
}
</script>
