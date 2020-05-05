<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>CINÉMA</h3>
  
      <strong>
        <a
          href="https://www.youtube.com/watch?v=WUnUgy76cBM"
          class="subtitle-link"
          target="_blank"
        >
          Stan Neumann, 120 ans d'inventions au cinéma, 54 mn, ARTE France & La
          cinémathèque française, 2016. <b-icon icon="box-arrow-right"></b-icon>
        </a>
      </strong>
    
    <p>
      Documentaire sur l’histoire du cinéma : le documentaire de Stan Neuman
      offre une formidable plongée dans l’histoire du 7e art, à travers celle
      des caméras et des projecteurs.
    </p>

      <strong>
        <a
          href="https://www.arte.tv/fr/videos/cinema/"
          class="subtitle-link"
          target="_blank"
        >
          Leçons de cinéma par Arte <b-icon icon="box-arrow-right"></b-icon>
        </a>
      </strong>
   
      <p></p>
      <strong>
        <a
          href="https://archive.org/details/feature_films"
          class="subtitle-link"
          target="_blank"
        >
          Archive.org <b-icon icon="box-arrow-right"></b-icon>
        </a>
      </strong>
  
    <p>
      Près de 6000 films tombés dans le domaine public sont en téléchargement
      sur internet. Des vrais bons classiques ! Archive.org c’est aussi la
      mémoire du web et la mémoire du cinéma en une seule bibliothèque
      virtuelle. En plus des long-métrages, vous pourrez trouver plus de 500 000
      vidéos, 1 000 000 d’enregistrements audio, dont 92 000 de concerts, 3 000
      000 de livres et 36 000 logiciels.
    </p>
 
      <strong>
        <a
          href="http://www.openculture.com/freemoviesonline"
          class="subtitle-link"
          target="_blank"
        >
          Open Culture (site anglophone) <b-icon icon="box-arrow-right"></b-icon>
        </a>
      </strong>
  
    <p>
      Plus de 1150 films cultes, courts, longs, obscurs… Openculture.com a pris
      l’initiative de répertorier et classer de nombreux chefs-d’œuvre en
      indiquant le nom du réalisateur, la date de sortie du film et ses
      éventuelles distinctions.
    </p>
  
      <strong>
        <a
          href="https://www.senscritique.com/liste/La_liste_des_films_disponibles_gratuitement/495126"
          class="subtitle-link"
          target="_blank"
        >
          Sens Critique <b-icon icon="box-arrow-right"></b-icon>
        </a>
      </strong>
   
    <p>
      Plus de 600 titres - courts, longs, documentaires, fiction, animation,
      muets - à visionner gratuitement sur internet. Par défaut, la liste est
      triée selon l’ordre alphabétique du titre anglais.
    </p>
   
    <p>
      <strong>
        Les applications cinéma gratuites
      </strong>
    </p>
    <p>
     <ul>
        <li>Stop motion studio : une application pour réaliser très simplement un film en stop motion.  </li>
        <li> Flipaclip : application pour créer des dessins animés.</li>
        <li>Meme generator : de quoi vous amuser à créer vos propres meme pour communiquer avec vos proches  </li>
        <li> Applications de montage gratuites pour Android, Iphone et Ipad : Magisto, PowerDirector, Première Rush,LumaFusion, Kinemaster….  </li> 
      </ul>
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
export default class OnlineCultureCinema extends Vue {}
</script>
