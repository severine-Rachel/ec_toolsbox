<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>CULTURE GÉNÉRALE</h3>

      <strong>
        <a
          href="http://www.radio-en-ligne.fr/podcasts"
          class="subtitle-link"
          target="_blank"
        >
          Les podcasts <b-icon icon="box-arrow-right"></b-icon>
        </a>
      </strong>
    
    <p>
      Applications pour écouter vos podcasts : Podcast Addict, Podcloud ou voir
      https://www.eeko-podcast.fr/
    </p>
    
      <strong>
        <a
          href="https://culture-2000.lepodcast.fr/"
          class="subtitle-link"
          target="_blank"
        >
          Podcast Culture2000 <b-icon icon="box-arrow-right"></b-icon>
        </a>
      </strong>
    
    <p>
      Des podcasts d’environ 1h-1h15 sur de nombreux domaines (La révolution
      iranienne, L’histoire du féminisme, Simon Bolivar, Le surréalisme).
    </p>
    
      <strong>
        <a
          href="https://www.chosesasavoir.com/"
          class="subtitle-link"
          target="_blank"
        >
          Podscast Choses à savoir de Louis Guillaume Kan-Lacas <b-icon icon="box-arrow-right"></b-icon>
        </a>
      </strong>
  
    <p>
      Le podcast de culture générale incontournable : clarté, concision,
      stimulation intellectuelle. Des réponses pertinentes et dynamiques à des
      questions relatives à de nombreux sujets en 2 minutes.
    </p>
   
      <strong>
        <a href="http://www.batooba.com/" class="subtitle-link" target="_blank">
          Podcast Batooba <b-icon icon="box-arrow-right"></b-icon>
        </a>
      </strong>
  
    <p>
      Podcasts sur des thèmes variés : Histoire, Philosophie, Littérature, Arts…
      Ces podcasts vous permettent d’apprendre facilement sans avoir besoin
      d’avoir déjà étudié le sujet. En 5 minutes, vous découvrez l’essentiel
      d’un sujet.
    </p>
    
      <strong>
        <a
          href="https://www.franceinter.fr/emissions/affaires-sensibles"
          class="subtitle-link"
          target="_blank"
        >
          Podcast Affaires sensibles, Fabrice Drouelle, France Inter <b-icon icon="box-arrow-right"></b-icon>
        </a>
      </strong>
   
    <p>
      Archives sonores, témoignages, experts… Vivez les grandes affaires, les
      aventures et les procès qui ont marqué les cinquante dernières années
      comme si vous y étiez.
    </p>

   
      <strong>
        <a
          href="https://artsandculture.google.com/"
          class="subtitle-link"
          target="_blank"
        >
          Google Art Project <b-icon icon="box-arrow-right"></b-icon>
        </a>
      </strong>
  
    <p>
      Le projet XXL de Google chapeaute à peu près tout ce qu'il est possible de
      découvrir à distance. Visitez des dizaines de musées, admirez des œuvres
      d'art en ultra-haute définition… Bref : voyagez à travers l'art et la
      science...
    </p>
    
      <strong>
        <a
          href="https://www.fun-mooc.fr/"
          class="subtitle-link"
          target="_blank"
        >
          Fun mooc <b-icon icon="box-arrow-right"></b-icon>
        </a>
      </strong>
    
    <p>
      Lancée par le Ministère de l'Enseignement Supérieur et de la Recherche en
      octobre 2013, ce site Internet vise à fédérer les projets de cours en
      ligne des universités et écoles françaises pour leur donner une visibilité
      internationale.
    </p>
    
      <strong>
        <a
          href="https://www.franceculture.fr/conferences"
          class="subtitle-link"
          target="_blank"
        >
          France Culture Conférences <b-icon icon="box-arrow-right"></b-icon>
        </a>
      </strong>
  
    <p>
      Des sciences humaines, des sciences exactes, de la gastronomie, de la
      littérature, de l’histoire, de la sexologie, de la philosophie, de l’art…
      Tous les savoirs à retrouver sur France Culture Conférences, une
      bibliothèque numérique nourrie par les institutions culturelles, les
      universités et les grandes écoles partenaires de la chaîne.
    </p>
  
      <strong>
        <a href="https://www.bnf.fr/fr" class="subtitle-link" target="_blank">
          Bibliothèque nationale de France (BNF) <b-icon icon="box-arrow-right"></b-icon>
        </a>
      </strong>
 
    <p>
      La Bibliothèque nationale de France met à la disposition de tous la
      richesse de ses collections et la diversité de son offre numérique. Livres
      au format EPub, documents, podcasts, applications, sites pédagogiques,
      médias... Des millions de ressources sont accessibles en ligne pour
      travailler, apprendre, se détendre ou jouer.
    </p>
    
      <strong>
        <a href="https://bdnf.bnf.fr" class="subtitle-link" target="_blank">
          BDNF, la fabrique à BD <b-icon icon="box-arrow-right"></b-icon>
        </a>
      </strong>
   
    <p>
      La Bibliothèque nationale de France a conçu une application gratuite pour
      réaliser des bandes dessinées. On y trouve une offre d’éléments visuels
      comme des décors d’opéra du XIXe siècle ou photographies d’Eugène Atget,
      des personnages mystérieux extraits de manuscrits médiévaux colorés ou des
      affiches de la Belle Époque; beaucoup d’images gratuites à recomposer et
      mettre en scène.
    </p>
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
export default class OnlineCultureGeneral extends Vue {}
</script>
