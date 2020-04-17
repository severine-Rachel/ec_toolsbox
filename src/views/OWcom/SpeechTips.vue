<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>CONSEILS ET ASTUCES</h3>

    <p><strong>Pour aller plus loin: la prise de parole au féminin</strong></p>
    <p><a href="/pdf_OWcom/female_Speaking.pdf" download="Prise_Parole_Feminin">Article de Sylvie Lec Herbonnier, «Les étudiantes s’arment pourprendre la parole», Le Monde, 14 mars 2020.</a></p>
    <p>Dans les écoles de management comme à Sciences Po, des formations pour apprendre 
      l’aisance à l’oral visent particulièrement les femmes, moins encouragées à faire 
      preuve d’éloquence.</p>
      
    <Footer></Footer>
  </div>
</template>

<style></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,

    Footer,
  },
})
export default class SpeechTips extends Vue {}
</script>
