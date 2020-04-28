<template>
  <div id="welcome-page">
    <Header></Header>
    <Menu></Menu>
    <HomeBanner></HomeBanner>
    <h3>À propos</h3>
    <p>
      Ce site a été conçu comme une boîte à outils. Vous y trouverez de
      nombreuses ressources en expression et communication : fiches-clés,
      conseils et astuces, vidéos, exemples concrets, etc. qui doivent vous
      permettre de préparer un solide dossier de candidature, de concevoir des
      supports de communication pertinents, d’enrichir vos compétences
      rédactionnelles, d’améliorer votre maîtrise de la langue française ou
      encore d’élargir votre culture générale.
    </p>
    <p>
      Dédié en premier lieu à mes étudiants, ce site est également utile à tous
      ceux qui recherchent un stage, un poste ou présentent un concours, qui
      doivent prendre la parole en public, animer une réunion, produire des
      supports visuels ou encore des écrits de différentes natures…
    </p>
    <HomeArticle></HomeArticle>
    <Footer></Footer>
  </div>
</template>

<style>
#welcome-page {
  position: relative;
}
.rubric-title {
  color: #1794d6;
  font-family: Myriad;
  margin: 0 10%;
  padding: 10vh 0;
}
h3 {
  color: #1794d6;
  font-family: Myriad;
    margin: 10%;
  padding: 8vh 0;
}

h4 {
  color: #2e367f;
  font-family: Myriad;
  margin: 10%;
  padding-top: 2%;
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
    Footer,
  },
})
export default class Home extends Vue {}
</script>
