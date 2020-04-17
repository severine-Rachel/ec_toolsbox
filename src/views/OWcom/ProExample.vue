<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>EXEMPLES DE RÉALISATIONS</h3>
    <p></p>

    <Footer></Footer>
  </div>
</template>

<style lang="scss"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Pdf from "@/components/Pdf.vue";
import Galery from "@/components/Galery.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    Pdf,
    Galery,
    Footer,
  },
})
export default class ProExample extends Vue {}
</script>
