<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <HomeBanner></HomeBanner>
    <h3>À propos</h3>
    <p>
      Ce site à été réalisé dans le but de fournir des supports de cours pour
      les étudiants de GEII de l’IUT d’Angers et égalemment permettre à d’autres
      étudiants ou autres utilisateurs de tout horizon d’obtenir des aides dans
      leurs études et travaux en rapport avec l'expression communication. Il
      pourra aussi permettre à des enseignants d’expression communication de
      trouver des idées pour leurs propres cours. Je fais moi-même partie de
      l'association des enseignants de communication en IUT. Vous trouverez des
      documents relatant l'ensemble du domaine de la communication, mais aussi
      des écrits sur l'art. Je met aussi à disposition d'anciens travaux
      étudiants qui sont sources de créativité et de nouveauté afin d'aider les
      nouveaux à trouver des inspirations.
    </p>
    <HomeArticle></HomeArticle>
    <Footer></Footer>
  </div>
</template>

<style>
h3 {
  color: #1794d6;
  font-family: Myriad;
  margin: 10%;
}
p {
  text-align: justify;
  color: #2e367f;
  margin: 10%;
}
</style>
<script>
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import HomeBanner from "@/views/Home/HomeBanner.vue";
import HomeArticle from "@/views/Home/HomeArticle.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Header,
    Menu,
    HomeBanner,
    HomeArticle,
    Footer
  }
})
export default class Home extends Vue {}
</script>
