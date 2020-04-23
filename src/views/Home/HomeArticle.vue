<template>
  <div id="article">
    <b-row class="mb-3" align-h="around">
      <b-col sm="3" class="content-article">
        <a class="link-article" href="#">
          <h5>MISE EN PAGE DE VOS ÉCRITS PROFESSIONNELS</h5>
          <p>
            Comment mettre en forme vos lettres de motivation ainsi que vos
            dossiers ? Modèles commentés.
          </p>
          <img
            class="img-art"
            src="../../assets/Site-Article/Insert1.jpg"
            atl="art-perf"
          />
        </a>
      </b-col>
      <b-col sm="3" class="content-article">
        <a class="link-article" href="#">
          <h5>RÉUSSIR VOS AFFICHES</h5>
          <p>
            L’exemple d’un concours d’affiches à l’IUT d’Angers : les bonnes
            pratiques et les erreurs à éviter.
          </p>
          <img
            class="img-art"
            src="../../assets/Site-Article/Insert2.png"
            atl="art-perf"
          />
        </a>
      </b-col>
      <b-col sm="3" class="content-article">
        <a class="link-article" href="#">
          <h5>QU'EST CE QUE LA PERFORMANCE ARTISTIQUE ?</h5>
          <p>
             Découvrez cet art en action,
            caractérisé par sa diversité de messages et d’approches.
          </p>
          <img
            class="img-art"
            src="../../assets/Site-Article/Insert3.jpg"
            atl="art-perf"
          />
        </a>
      </b-col>
    </b-row>
  </div>
</template>

<style lang="scss">
#article {
  margin-top: 20vh;

  padding: 4% 0;
  background-image: linear-gradient(#1794d6, #146cb3);
}
h5 {
  color: #1794d6;
  font-family: Myriad;
}
.content-article {
  text-align: center;

  background-color: white;
}
.img-art {
  width: 100%;
  margin-bottom: 10%;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { LayoutPlugin } from "bootstrap-vue";
Vue.use(LayoutPlugin);
@Component({})
export default class HomeArticle extends Vue {
  // export default==public class
}
</script>
