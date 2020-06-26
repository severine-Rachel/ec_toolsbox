<template>
  <div>
    <div id="HeaderBanner">
      <!--
      <b-navbar id="SearchDesktop">
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input
            size="sm"
            v-model="search"
            class="mr-sm-2 "
            placeholder="Rechercher"
          >
          </b-form-input>
          <b-button
            size="sm"
            class="my-2 my-sm-0"
            type="submit"
            v-on:click="GoSearch()"
          >
            <b-icon icon="search"></b-icon>
          </b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-navbar>
    -->
    <SearchBar></SearchBar>
      <router-link to="/" id="LinkTitle"
        ><h1 class="hearder-sub-title" id="H1Header">
          P. RAFFY-HIDEUX
        </h1></router-link
      >
      <h2 class="hearder-sub-title" id="H2Header">
        Enseignante en Lettres, Expression et Communication
      </h2>
    </div>
  </div>
</template>

<style lang="scss">
#HeaderBanner {
  //banner of website

  text-rendering: optimizeLegibility;
  box-sizing: border-box;
  position: relative;
  background-image: url(../assets/basic-Graph/banner2.png);
  background-size: 100% 100%;
  height: 20%;
  border-bottom: solid 0.3px #11b4ff;
}

@media (min-width: 600px) {
  .hearder-sub-title {
    margin-bottom: unset !important;
    margin-left: 3rem !important;
    font-family: Myriad;
    color: white;
    padding-top: 0;
  }
  #H1Header {
    font-size: 1.9rem;
  }
  #H2Header {
    font-size: 1.4rem;
  }
  #LinkTitle:hover {
    text-decoration: none !important;
  }
}
@media (max-width: 600px) {
  .hearder-sub-title {
    
    margin-bottom: unset !important;
    margin-left: 1rem !important;
    font-family: Myriad;
    color: white;
    padding-top: 0;
  }
  #H1Header {
    padding-top:1rem !important;
    font-size: 1.5rem;
  }
  #H2Header {
    font-size: 1.2rem;
  }
  #LinkTitle:hover {
    text-decoration: none !important;
  }
  #SearchDesktop {
    display: none;
  }
}
.btn-secondary {
  background-color: #1694d6 !important;
  border: none !important;
  &:hover {
    background-color: #0e6ea1 !important;
  }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BFormInput } from "bootstrap-vue";
import { BButton } from "bootstrap-vue";
import { BNavbarNav } from "bootstrap-vue";
import { BNavbar } from "bootstrap-vue";
import { BIcon, BIconSearch } from "bootstrap-vue";
import SearchBar from "@/components/SearchBar.vue";

Vue.component("b-navbar", BNavbar);
Vue.component("b-navbar-nav", BNavbarNav);
Vue.component("b-button", BButton);
Vue.component("b-form-input", BFormInput);

@Component({
  components: {
    BIcon,
    BIconSearch,
    SearchBar,
  },
})
export default class Header extends Vue {
  // export default==public class
}
</script>
