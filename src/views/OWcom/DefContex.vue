<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>LES SITUATIONS DE COMMUNICATION</h3>
    <ContexCant></ContexCant>
    <ContexConstruction></ContexConstruction>
    <ContexSocial></ContexSocial>

    <Footer></Footer>
  </div>
</template>

<style></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import ContexCant from "@/views/OWcom/DefContex/ContexCant.vue";
import ContexConstruction from "@/views/OWcom/DefContex/ContexConstruction.vue";
import ContexSocial from "@/views/OWcom/DefContex/ContexSocial.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    ContexCant,
    ContexConstruction,
    ContexSocial,
    Footer,
  },
})
export default class DefContex extends Vue {}
</script>
