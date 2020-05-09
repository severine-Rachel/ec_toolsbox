<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>SCIENCES</h3>
   
      <strong>
        <a
          href="https://www.futura-sciences.com/sciences/actualites/"
          class="subtitle-link"
          target="_blank"
        >
          L’actualité des sciences <b-icon icon="box-arrow-right"></b-icon>
        </a>
      </strong>
  
    <p>
      https://www.sciencesetavenir.fr/
    </p>
  
      <strong>
        <a
          href="http://www.cnrs.fr/fr/page-daccueil"
          class="subtitle-link"
          target="_blank"
        >
          Accédez au Centre National de Recherche Scientifique <b-icon icon="box-arrow-right"></b-icon>
        </a>
      </strong>
  
    <p></p>
      <strong>
        <a
          href="https://www.youtube.com/channel/UClDk0iyj99stPxD9NQUaVSQ"
          class="subtitle-link"
          target="_blank"
        >
          Assistez à des conférences scientifiques <b-icon icon="box-arrow-right"></b-icon>
        </a>
      </strong>
    
    <p>
      Conférences youtube de Roland Lehoucq et Julien Bobroff notamment
      Astrophysicien au CEA de Saclay, Roland Lehoucq tient également une
      rubrique scientifique dans la revue de science-fiction Bifrost. Il préside
      par ailleurs le festival international de science-fiction Les Utopiales à
      Nantes. Julien Bobroff est physicien, professeur à l'Université
      Paris-Saclay où il anime depuis 2013 l'équipe de recherche «&nbsp;La Physique
      Autrement » au Laboratoire de Physique des Solides (CNRS et Université
      Paris-Saclay). De 1994 à 2013, il a travaillé dans l'équipe «&nbsp;Nouveaux
      états de la matière » pour étudier les propriétés quantiques de la matière
      à basse température, en particulier les supraconducteurs et les aimants
      quantiques.
    </p>

      <strong>
        <a
          href="https://www.cidehom.com/"
          class="subtitle-link"
          target="_blank"
        >
          L’actualité de l’astronomie <b-icon icon="box-arrow-right"></b-icon>
        </a>
      </strong>
  
    <p></p>
      <strong>
        <a
          href="https://cnes.fr/fr"
          class="subtitle-link"
          target="_blank"
        >
          Le Centre National d’Études Spatiales <b-icon icon="box-arrow-right"></b-icon>
        </a>
      </strong>
    

    <Footer></Footer>
  </div>
</template>
<style lang="scss"></style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import {BIcon, BIconBoxArrowRight} from "bootstrap-vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    BIconBoxArrowRight,
    BIcon,
    Footer,
  },
})
export default class OnlineCultureSciences extends Vue {}
</script>
