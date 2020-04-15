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
              ><b-icon icon="search"></b-icon></b-button
            >
          </b-nav-form>
        </b-navbar-nav>
      </b-navbar>

      <h1>P. RAFFY-HIDEUX</h1>
      <h2>Enseignante en lettre, Expression et Communication</h2>
    </div>
  </div>
</template>

<style lang="scss">
#header-banner {
  //banner of website
  background-image: url(../assets/basic-Graph/banner.png);
  background-size: 100% 100%;
  height: 30vh;
}

@font-face {
  font-family: Myriad;
  src: url(../assets/MyriadProBC.otf);
}
.btn-secondary {
  background-color: #1694d6 !important;
  border: none !important;
  &:hover {
    background-color: #0e6ea1 !important;
  }
}
h1,
h2 {
  margin-bottom: unset !important;
  margin-left: 3rem !important;
  font-family: Myriad;
  color: white;
}

</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BFormInput } from "bootstrap-vue";
import { BButton } from "bootstrap-vue";
import { BNavbarNav } from "bootstrap-vue";
import { BNavbar } from "bootstrap-vue";
import { BIcon, BIconSearch } from "bootstrap-vue";

Vue.component("b-navbar", BNavbar);
Vue.component("b-navbar-nav", BNavbarNav);
Vue.component("b-button", BButton);
Vue.component("b-form-input", BFormInput);

@Component({
  components: {
    BIcon,
    BIconSearch
  }
})
export default class Header extends Vue {
  // export default==public class
}
</script>
