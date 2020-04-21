<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h2 class="rubric-title">CULTURE EN LIGNE</h2>
    <ContentsPage v-bind:contents-list="contentsOnline"></ContentsPage>
    <Footer></Footer>
  </div>
</template>
<style lang="scss"></style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import ContentsPage from "@/components/ContentsPage.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    ContentsPage,
    Footer,
  },
})
export default class OnlineCulture extends Vue {
   public contentsOnline = [
    {
      ContentsTitle:"ARTS",
      ContentsPath:"/CultureenLigne/Art",
      ContentsImage: "/thumbail.png"
    },
    {
      ContentsTitle:"CINÉMA",
      ContentsPath:"/CultureenLigne/Cinema",
      ContentsImage: "/thumbail.png"
    },
    {
      ContentsTitle:"MUSIQUE",
      ContentsPath:"/CultureenLigne/Musique",
      ContentsImage: "/thumbail.png"
    },
    {
      ContentsTitle:"HISTOIRE",
      ContentsPath:"/CultureenLigne/Histoire",
      ContentsImage: "/thumbail.png"
    },
    {
      ContentsTitle:"SCIENCES",
      ContentsPath:"/CultureenLigne/Sciences",
      ContentsImage: "/thumbail.png"
    },
    {
      ContentsTitle:"CULTURE GÉNÉRALE",
      ContentsPath:"/CultureenLigne/CultureGenerale",
      ContentsImage: "/thumbail.png"
    },
    {
      ContentsTitle:"MÉDIAS, PRESSE",
      ContentsPath:"/CultureenLigne/MediaPresse",
      ContentsImage: "/thumbail.png"
    },
   ]
}
</script>
