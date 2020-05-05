<template>
  <div id="WelcomePage">
    <Header></Header>
    <Menu></Menu>
    <HomeBanner v-on:smooth="smooth"></HomeBanner>
    <h3 id="about">À propos</h3>
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

<style lang="scss">
#WelcomePage {
  position: relative;
  scroll-behavior: smooth;
}
@font-face {
  font-family: Myriad;
  src: url(../../assets/MyriadProBC.otf);
}
h2 {
  color: #2694cd;
  font-family: Myriad;
  margin: 0 10%;
  padding: 8vh 0 4vh 0;
}
h3 {
  color: #1794d6;
  font-family: Myriad;
  margin: 0 10%;
  padding: 8vh 0 4vh 0;
}
.H3-thumbnail-title {
  color: white;
  padding: 8vh 01vw;
  transition: font-size 0.5s ease-in-out;
  margin: 0;
  font-size: 2rem;
  &:hover {
    font-size: 220%;
  }
}
h4 {
  color: #c21b2c;
  font-family: Myriad;
  margin: 10%;
  padding: 3vh 0 0 0;
}
h5 {
  color: #c21b2c;
  font-family: Myriad;
  padding-top: 2vh;
}
.subtitle-h5 {
  margin: 0 10%;
  color: #2e367f;
  font-family: Myriad;
  padding: 1vh 0 2vh 0;
}
h6 {
  padding: 5% 0;
  margin: 0 10%;
  color: #2e367f;
  font-family: Myriad;
  text-align: justify;
}
h7 {
  margin: 0 10%;
  color: #1794d6;
  font-family: Myriad;
  font-size: 1.2em;
}
p {
  text-align: justify;
  color: #2e367f;
  margin: 10%;
}
table {
  margin-left: auto; //auto need width to work
  margin-right: auto;
}
td{
  padding:2%;
  text-align: center;
}
.color-fire{
  height:15vh;
}
.text-vid {
  color: #c21b2c;
}
.vertical {
  width: 40vw;
  margin: 1% 10%;
}
.horizontal {
  width: 75vw;
  margin: 4% 10%;
}
.square {
  height: 90vh;
  margin: 1% 10%;
}
.subtitle-link {
  text-decoration: none !important;
  color: #2e367f;
  margin-left: 10%;
}
.list-link {
  text-decoration: none !important;
  color: #2e367f;
}
.insert-video {
  margin-bottom: 5vh;
}
.perf-vid {
  width: 75vw;
}
.first-list {
  margin-top: 1vh;
}
.Logo {
  margin: 0 5%;
  width: 8vw;
}
.icon {
  margin: 10%;
}
.row {
  margin-right: 0 !important;
}
.Help_Builder {
  width: 10vw;
  height: 20vh;
  margin: 0 0 0 2vw;
  border: #bce8ff 5px solid;
  &:hover {
    border: #1794d6 5px solid;
  }
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
