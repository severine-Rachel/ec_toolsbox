<template>
  <div id="article">
    <b-row class="mb-3" align-h="around">
      <b-col sm="3" class="content-article">
        <a class="link-article" href="#">
          <h5>ÉTUDIANTS TRÈS INVESTIS EN ART</h5>
          <img class="img-art" src="../../assets/Site-Article/perf.png" atl="art-perf" />
        </a>
      </b-col>
      <b-col sm="3" class="content-article">
        <a class="link-article" href="#">
          <h5>PARLER D'ÉVÈNEMENTS DANS UN DOSSIER</h5>
          <img class="img-art" src="../../assets/Site-Article/event.png" atl="art-perf" />
        </a>
      </b-col>
      <b-col sm="3" class="content-article">
        <a class="link-article" href="#">
          <h5>SIMULATEUR D'ENTRETIEN</h5>
          <img class="img-art" src="../../assets/Site-Article/meeting.png" atl="art-perf" />
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
