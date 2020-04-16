<template>
<div>
    <Header></Header>
    <Menu></Menu>
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
<<<<<<< Updated upstream
=======
    <h3>
        LES FONDAMENTAUX: FICHES CLEFS
    </h3>
    
    <a href="/fundamentals_CV_Keys.pdf" download="10PointsClesCV">ici</a>
    <Galery></Galery>
    <CVGoFurther></CVGoFurther>
>>>>>>> Stashed changes
    <Footer></Footer>
</div>
</template>

<style lang="scss">

</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Footer from "@/components/Footer.vue";
import CVGoFurther from "@/views/Appfile/CVGoFurther.vue";

@Component({
  components: {
    Header,
    Menu,
<<<<<<< Updated upstream
       Footer
=======
    Galery,
    Footer,
    CVGoFurther
>>>>>>> Stashed changes
  }
})
export default class CV extends Vue {}
</script>