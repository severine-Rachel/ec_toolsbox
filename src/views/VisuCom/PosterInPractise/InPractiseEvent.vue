<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {BRow, BCol, BCard, BCardGroup, BCardTitle } from "bootstrap-vue";
@Component({
  components: {
      BRow, BCol, BCard, BCardGroup, BCardTitle
        },
})
export default class InPractiseEvent extends Vue {}
</script>

<style lang="scss">
#poster-event{
    padding-right: 5vw;
    border-right: red solid 3px;
}
#anti-poster{
    position: sticky;
    
    top: 9vh;
}
h4.card-title{
  color: white !important;
}
</style>

<template>
    <div>
      <b-row >
       <b-col  cols="9" id="poster-event">
        <b-card-group columns>
            <b-card
              img-src="/picture_Visu/Poster/Poster3.png" 
              img-alt="Affiche Challenge Robotique" 
              img-top
            >
                <footer class="blockquote-footer">
                   Affiche challenge robotique
                </footer>
            </b-card>

            <b-card
              img-src="/picture_Visu/Poster/Poster4.png" 
              img-alt="Affiche performance artistique GEII"
              img-top
            >
                <footer class="blockquote-footer">
                    Affiche Perf'Art
                </footer>
            </b-card>

            <b-card
              img-src="/picture_Visu/Poster/Poster7.png" 
              img-alt="Affiche Forum de l'Orientation Post-DUT" 
              img-top
            >
                <footer class="blockquote-footer">
                    Affiche Forum de l'Orientation Post-DUT
                </footer>
            </b-card>

            <b-card
              img-src="/picture_Visu/Poster/Poster1.png" 
              img-alt=" Affiche Perf'Art" 
              img-top
            >
                <footer class="blockquote-footer">
                     Affiche Perf'Art
                </footer>
            </b-card>

            <b-card
              img-src="/picture_Visu/Poster/Poster8.png" 
              img-alt="Affiche Forum de l'Orientation Post-DUT" 
              img-top
            >
                <footer class="blockquote-footer">
                    Affiche Forum de l'Orientation Post-DUT
                </footer>
            </b-card>

            <b-card
              img-src="/picture_Visu/Poster/Poster5.png" 
              img-alt="Affiche Forum de l'Orientation Post-DUT" 
              img-top
            >
                <footer class="blockquote-footer">
                     Affiche Forum de l'Orientation Post-DUT
                </footer>
            </b-card>

            <b-card
              img-src="/picture_Visu/Poster/Poster6.png" 
              img-alt="Affiche Perf'Art" 
              img-top
            >
                <footer class="blockquote-footer">
                    Affiche Perf'Art
                </footer>
            </b-card>

            <b-card
              img-src="/picture_Visu/Poster/Poster2.png" 
              img-alt="Affiche Forum de l'Orientation Post-DUT" 
              img-top
            >
                <footer class="blockquote-footer">
                    Affiche Forum de l'Orientation Post-DUT
                </footer>
            </b-card>
        </b-card-group>
       </b-col>
       <b-col cols="3" 
       class="scroll-poster">
         <b-card
              bg-variant="danger" 
              text-variant="white"
              text-center
              title="Contre exemple"
              img-src="/picture_Visu/Poster/antiPoster.png" 
              img-alt="Contre Exemple Affiche" 
              img-bottom
              id="anti-poster"
            >
              
         </b-card>
       </b-col>
      </b-row>
    </div>

</template>

