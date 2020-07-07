<template>
  <div>
    <Header />
    <Menu />
    <h2 class="rubric-title">CULTURE EN LIGNE</h2>
    <ContentsPage v-bind:contents-list="contentsOnline"></ContentsPage>
    <Footer />
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
   protected contentsOnline = [
    {
      ContentsTitle:"ARTS",
      ContentsPath:"/CultureenLigne/Art",
      ContentsImage: "/thumbnail3.png"
    },
    {
      ContentsTitle:"CINÉMA",
      ContentsPath:"/CultureenLigne/Cinema",
      ContentsImage: "/thumbnail5.png"
    },
    {
      ContentsTitle:"MUSIQUE",
      ContentsPath:"/CultureenLigne/Musique",
      ContentsImage: "/thumbnail4.png"
    },
    {
      ContentsTitle:"HISTOIRE",
      ContentsPath:"/CultureenLigne/Histoire",
      ContentsImage: "/thumbnail6.png"
    },
    {
      ContentsTitle:"SCIENCES",
      ContentsPath:"/CultureenLigne/Sciences",
      ContentsImage: "/thumbnail7.png"
    },
    {
      ContentsTitle:"CULTURE GÉNÉRALE",
      ContentsPath:"/CultureenLigne/CultureGenerale",
      ContentsImage: "/thumbnail1.png"
    },
    {
      ContentsTitle:"MÉDIAS, PRESSE",
      ContentsPath:"/CultureenLigne/MediaPresse",
      ContentsImage: "/thumbnail2.png"
    },
   ]
}
</script>
