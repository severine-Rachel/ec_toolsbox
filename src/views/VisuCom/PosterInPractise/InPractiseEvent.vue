<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BRow, BCol, BCard, BCardGroup, BCardTitle } from "bootstrap-vue";
@Component({
  components: {
    BRow,
    BCol,
    BCard,
    BCardGroup,
    BCardTitle,
  },
})
export default class InPractiseEvent extends Vue {}
</script>

<style lang="scss">
@media (max-width: 600px) {
  #poster-event {
    padding-right: 1%;
  }
}
@media (min-width: 600px) {
  #poster-event {
    padding-right: 5vw;
    border-right: red solid 3px;
  }
}

#anti-poster {
  top: 8vh;
  position: sticky;
}
#blockfooteragainst {
  color: white !important;
  font-size: 1.5rem;
}
</style>

<template>
  <div>
    <b-row>
      <b-col sm="9" id="poster-event">
        <b-card-group columns>
          <b-card
            img-src="/picture_Visu/Poster/Poster3.jpg"
            img-alt="Affiche Challenge Robotique"
            img-top
          >
            <footer class="blockquote-footer">
              Challenge robotique
            </footer>
          </b-card>

          <b-card
            img-src="/picture_Visu/Poster/perfArt/PosterWinner3.jpg"
            img-alt="Affiche performance artistique GEII"
            img-top
          >
            <footer class="blockquote-footer">
              Perf'Art
            </footer>
          </b-card>

          <b-card
            img-src="/picture_Visu/Poster/Poster7.jpg"
            img-alt="Affiche Forum de l'Orientation Post-DUT"
            img-top
          >
            <footer class="blockquote-footer">
              Forum de l'Orientation Post-DUT
            </footer>
          </b-card>

          <b-card
            img-src="/picture_Visu/Poster/perfArt/PosterWinner2.jpg"
            img-alt=" Affiche Perf'Art"
            img-top
          >
            <footer class="blockquote-footer">
              Perf'Art
            </footer>
          </b-card>

          <b-card
            img-src="/picture_Visu/Poster/Poster8.PNG"
            img-alt="Affiche Forum de l'Orientation Post-DUT"
            img-top
          >
            <footer class="blockquote-footer">
              Forum de l'Orientation Post-DUT
            </footer>
          </b-card>

          <b-card
            img-src="/picture_Visu/Poster/Poster5.jpg"
            img-alt="Affiche Forum de l'Orientation Post-DUT"
            img-top
          >
            <footer class="blockquote-footer">
              Forum de l'Orientation Post-DUT
            </footer>
          </b-card>

          <b-card
            img-src="/picture_Visu/Poster/perfArt/PosterWinner1.jpg"
            img-alt="Affiche Perf'Art"
            img-top
          >
            <footer class="blockquote-footer">
              Perf'Art
            </footer>
          </b-card>
          <b-card
            img-src="/picture_Visu/Poster/antiPoster.jpg"
            img-alt="Affiche Forum de l'Orientation Post-DUT"
            img-top
          >
            <footer class="blockquote-footer">
              Semaine internationale
            </footer>
          </b-card>
          <b-card
            img-src="/picture_Visu/Poster/Poster2.jpg"
            img-alt="Affiche Forum de l'Orientation Post-DUT"
            img-top
          >
            <footer class="blockquote-footer">
              Forum de l'Orientation Post-DUT
            </footer>
          </b-card>
        </b-card-group>
      </b-col>
      <b-col sm="3" class="scroll-poster">
        <b-card
          bg-variant="danger"
          text-variant="white"
          text-center
          img-src="/picture_Visu/Poster/anti-Poster-1.jpg"
          img-alt="Contre Exemple Affiche"
          img-top
          id="anti-poster"
        >
          <footer class="blockquote-footer" id="blockfooteragainst">
            <strong> Contre exemple</strong>
          </footer>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
