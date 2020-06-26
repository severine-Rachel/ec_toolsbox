<template>
  <b-col>A
    <!--<b-navbar id="SearchDesktop">
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

    <b-col cols="1" id="SearchPhone">
      <b-button
        size="sm"
        class="my-2 my-xs-0"
        type="submit"
        v-on:click="GoSearch()"
      >
        <b-icon icon="search"></b-icon>
      </b-button>
    </b-col>
    <b-col cols="8" id="SearchPhone">
      <b-navbar id="SearchBarPhone">
        <b-navbar-nav class="xs-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              v-model="search"
              class="mr-xs-2"
              placeholder="Rechercher"
            >
            </b-form-input>
          </b-nav-form>
        </b-navbar-nav>
      </b-navbar>
    </b-col>-->
  </b-col>
</template>
<style lang="scss">
@media (min-width: 600px) {
  #SearchPhone {
    display: none;
  }
}
@media (max-width: 600px) {
  #SearchDesktop {
    display: none;
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

Vue.component("b-navbar", BNavbar);
Vue.component("b-navbar-nav", BNavbarNav);
Vue.component("b-button", BButton);
Vue.component("b-form-input", BFormInput);

@Component({
  components: {
    BIcon,
    BIconSearch,
  },
})
export default class SearchBar extends Vue {}
</script>
