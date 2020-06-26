<template>
  <div id="WelcomePage">
    <Header></Header>
    <Menu></Menu>
    <HomeBanner></HomeBanner>
    <div id="TextIntro">
      <h3 id="about">À propos</h3>
      <p class="none-margin-bottom none-margin-top">

        Ce site a été conçu comme une boîte à outils. Vous y trouverez de
        nombreuses ressources en expression et communication{{ "\xa0" }}:
        fiches-clés, conseils et astuces, vidéos, exemples concrets, etc. qui
        doivent vous permettre de préparer un solide dossier de candidature, de
        concevoir des supports de communication pertinents, d’enrichir vos
        compétences rédactionnelles, d’améliorer votre maîtrise de la langue
        française ou encore d’élargir votre culture générale.
      
      </p>
      <p class="none-margin-top ">
        Dédié en premier lieu à mes étudiants, ce site est également utile à
        tous ceux qui recherchent un stage, un poste ou présentent un concours,
        qui doivent prendre la parole en public, animer une réunion, produire
        des supports visuels ou encore des écrits de différentes natures…
      </p>
    </div>
    <HomeArticle></HomeArticle>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
#WelcomePage {
  position: relative;
  scroll-behavior: smooth;
  overflow: auto;
  height: 100vh;
}
#full-seen{
  line-height: 1.5rem !important;
}
@font-face {
  font-family: Myriad;
  src: url(../../assets/MyriadProBC.otf);
}
@font-face {
  font-family: MyriadPhone;
  src: url(../../assets/MyriadProB.ttf);
}
.none-margin-bottom {
  margin-bottom: 0;
}
#TextIntro {
  animation-name: appear2ndWelcome;
  animation-duration: 3s;
}
.none-margin-top {
  margin-top: 0;
}
#about {
  padding-top: 2vh;
  margin-bottom: 0;
}

h5 {
  color: #c21b2c;
  font-family: Myriad, Arial;
  padding-top: 2vh;
}

.pdf-line {
  border-bottom: solid 1px #85def9;
}
.logo-pdf {
  height: 1.5rem;
}
@media (min-width: 600px) {
  p {
    text-align: justify;
    color: #2e367f;
    margin: 1% 10%;
    line-height: 1.7rem;
  }
  .subtitle-link {
    text-decoration: none !important;
    color: #2e367f;
    margin-left: 10%;
  }
  h2 {
    color: #2694cd;

    font-family: Myriad, Arial;
    margin: 0 10%;
    padding: 8vh 0 4vh 0;
  }
  h3 {
    color: #1794d6;
    font-family: Myriad, Arial;
    margin: 0 10%;

    padding: 8vh 0 2vh 0;
  }

  h4 {
    color: #c21b2c;
    font-family: Myriad, Arial;
    margin: 0 10%;
    padding: 4vh 0 0 0;
  }
  .subtitle-h5 {
    margin: 2% 10% 0 10%;
    color: #2e367f;
    font-family: Myriad;
    padding: 1vh 0 1vh 0;
  }
  h6 {
    padding: 5% 0;
    margin: 0 10%;
    color: #2e367f;
    font-family: Myriad;
    text-align: left;
  }
  h7 {
    margin: 1% 10% 0;
    color: #1794d6;
    font-family: Myriad;
    font-size: 1.2em;
  }
  .margin {
    margin: 1% 10%;
    color: #2e367f;
  }
  .supperposition {
    width: 10vw;
    height: 20vh;
    opacity: 0.1;
    position: relative;
    top: -20vh;
    right: 0px;
    z-index: 11;
    display: inline-block;
    &:hover {
      opacity: 0.3;
    }
  }
  .Help_Builder {
    width: 10vw;
    position: relative;
    height: 20vh;
    border: solid 1px #85def9;
    z-index: 10;
  }
  .link-help-builder {
    width: 10vw;
    height: 20vh;
    display: inline-block;
    margin: 1%;
  }
  .vertical {
    width: 40vw;
    margin: 1% 10%;
  }
  .square {
    height: 80vh;
    width: auto !important;
    margin: 1% 10%;
    margin-left: auto !important;
    margin-right: auto !important;
    display: block;
  }
  .horizontal {
    width: 50vw;
    margin: 4% 10%;
  }
}
@media (max-width: 600px) {
  p {
    text-align: justify;
    color: #2e367f;
    margin: 1%;
  }
  .subtitle-link {
    text-decoration: none !important;
    color: #2e367f;
    margin-left: 1%;
  }
  h2 {
    color: #2694cd;
    font-family: Myriad, Arial;
    margin: 0 1%;
    padding: 8vh 0 4vh 0;
  }
  h3 {
    color: #1794d6;
    font-family: Myriad, Arial;
    margin: 0 1%;
    padding: 8vh 0 2vh 0;
  }

  h4 {
    color: #c21b2c;
    font-family: Myriad, Arial;
    margin: 0 1%;
    padding: 4vh 0 0 0;
  }

  .subtitle-h5 {
    margin: 2% 1% 0 1%;
    color: #2e367f;
    font-family: Myriad;
    padding: 1vh 0 1vh 0;
  }
  h6 {
    padding: 5% 0;
    margin: 0 1%;
    color: #2e367f;
    font-family: Myriad;
    text-align: left;
  }
  h7 {
    margin: 1% 1% 0;
    color: #1794d6;
    font-family: Myriad;
    font-size: 1.2em;
  }
  .margin {
    margin: 1%;
    color: #2e367f;
  }
  .supperposition {
    display: none;
  }
  .Help_Builder {
    width: 7rem;
    height: 7rem;
    border: solid 1px #85def9;
    z-index: 10;
  }
  .link-help-builder {
    width: 7rem;
    height: 7rem;
    display: block;
    margin: 1%;
  }
  .vertical {
    width: 75vw;
    margin: 1% 10%;
  }
  .square {
    width: 80vw;

    margin: 1%;
    display: block;
  }
  .horizontal {
    width: 75vw;
    margin: 4% 10%;
  }
}

@keyframes appear2ndWelcome {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  75% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
a {
  outline: none;
}
table {
  margin-left: auto; //auto need width to work
  margin-right: auto;
}
td {
  padding: 1% 0;
  text-align: center;
}
.color-fire {
  height: 15vh;
}
.text-vid {
  color: #c21b2c;
  text-align: center;
}

.list-link {
  text-decoration: none !important;
  color: #2e367f;
}
.insert-video {
  margin-bottom: 0;
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
.breath {
  margin-bottom: 3%;
}

.breath-top {
  margin-top: 3%;
}

.a-bloc {
  display: block;
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
