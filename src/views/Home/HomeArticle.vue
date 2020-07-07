<template>
  <div id="article">
    <b-container fluid>
      <b-row class="mb-3" align-h="around" id="ArticlesInserts">
        <b-col sm="3" xs="6" class="content-article">
          <router-link class="link-article" to="/Ecrit_Pro/Fondamentaux#form">
            <h5>MISE EN PAGE DE VOS ÉCRITS PROFESSIONNELS</h5>
            <p id="article-txt">
              Comment mettre en forme vos lettres de motivation ainsi que vos
              dossiers{{ "\xa0" }}? Modèles commentés.
            </p>
            <img
              class="img-art"
              draggable="false"
              src="../../assets/Site-Article/Insert1.jpg"
              atl="Mise en page ecrit professionnnel"
            />
          </router-link>
        </b-col>
        <b-col sm="3" class="content-article">
          <router-link class="link-article" to="/Affiche/EnPratique">
            <h5>RÉUSSIR VOS AFFICHES</h5>
            <p id="article-txt">
              L’exemple d’un concours d’affiches à l’IUT d’Angers : les bonnes
              pratiques et les erreurs à éviter.
            </p>
            <img
              class="img-art"
              draggable="false"
              src="../../assets/Site-Article/Insert2.png"
              atl="Affiches artistiques"
            />
          </router-link>
        </b-col>
        <b-col sm="3" class="content-article">
          <router-link
            class="link-article"
            to="/PerformanceArtistique/Definition"
          >
            <h5>QU'EST CE QUE LA PERFORMANCE ARTISTIQUE{{ "\xa0" }}?</h5>
            <p id="article-txt">
              Découvrez cet art hybride en action, caractérisé par sa diversité
              de messages et d’approches.
            </p>
            <img
              class="img-art"
              draggable="false"
              src="../../assets/Site-Article/Insert3.jpg"
              atl="performance artistique des étudiants GEII"
            />
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
#article {
  margin-top: 5vh;
  padding: 4% 0;
  background-image: linear-gradient(#1794d6, #146cb3);
}
#ArticlesInserts {
  animation-name: appear2ndWelcome;
  animation-duration: 3s;
}
#article-txt {
  margin: 1rem 0;
}

.link-article {
  text-decoration: none !important;
}
.content-article {
  text-align: center;
  background-color: white;
}
.img-art {
  width: 100%;
  margin-bottom: 10%;
  &:hover {
    opacity: 0.75;
  }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { LayoutPlugin } from "bootstrap-vue";
Vue.use(LayoutPlugin);
@Component({})
export default class HomeArticle extends Vue {
  // export default==protected class
}
</script>
