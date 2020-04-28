<template>
<div>
 <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#bce8ff"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide>
        <template v-slot:img>
           <b-row class="justify-content-md-center"> 
          <b-col col lg="3">
              <b-card
              
                 title="Affiche 1 - Verdoyante"
                 img-src="/picture_Visu/Poster/perfArt/PosterGreen.png"
                 img-alt="Image"
                 img-top
                 tag="article"
                 style="max-width: 20rem;"
                 class="mb-2"
                 v-b-modal.my-modal1
               >
               
              </b-card></b-col>
          <b-col col lg="3">
              <b-card
                 title="Affiche 2 - Explosif"
                 img-src="/picture_Visu/Poster/perfArt/PosterExplosive.png"
                 img-alt="Image"
                 img-top
                 tag="article"
                 style="max-width: 20rem;"
                 class="mb-2"
                 v-b-modal.my-modal2
                >
                </b-card>
          </b-col>
          <b-col col lg="3">
              
              <b-card
                 title="Affiche 3 - Old School"
                 img-src="/picture_Visu/Poster/perfArt/PosterOldSchool.png"
                 img-alt="Image"
                 img-top
                 tag="article"
                 style="max-width: 20rem;"
                 class="mb-2"
               v-b-modal.my-modal3>
              </b-card>         
          </b-col>
          <b-col col lg="3">
              
              <b-card
                 title="Affiche 4 - Monochrome"
                 img-src="/picture_Visu/Poster/perfArt/PosterMonochrome.png"
                 img-alt="Image"
                 img-top
                 tag="article"
                 style="max-width: 20rem;"
                 class="mb-2"
                 v-b-modal.my-modal4
               >
              </b-card>            
          </b-col>
        </b-row>
        </template>
      </b-carousel-slide>

      <!-- Slides with custom text -->
          <b-carousel-slide>
        <template v-slot:img>
           <b-row class="justify-content-md-center"> 
          <b-col col lg="3">
              <b-card
                 title="Affiche 5 - Épuré"
                 img-src="/picture_Visu/Poster/perfArt/PosterRefined.jpeg"
                 img-alt="Image"
                 img-top
                 tag="article"
                 style="max-width: 20rem;"
                 class="mb-2"
                 v-b-modal.my-modal5
               >
               </b-card></b-col>
          <b-col col lg="3">
              <b-card
                 title="Affiche 6 - Haute Tension"
                 img-src="/picture_Visu/Poster/perfArt/PosterVoltage.png"
                 img-alt="Image"
                 img-top
                 tag="article"
                 style="max-width: 20rem;"
                 class="mb-2"
                 v-b-modal.my-modal6
                >
                </b-card>
          </b-col>
          <b-col col lg="3">
              
              <b-card
                 title="Affiche 7 - Floral"
                 img-src="/picture_Visu/Poster/perfArt/PosterFloral.png"
                 img-alt="Image"
                 img-top
                 tag="article"
                 style="max-width: 20rem;"
                 class="mb-2"
                 v-b-modal.my-modal7
               >
               </b-card>         
          </b-col>
          <b-col col lg="3">
              
              <b-card
                 title="Affiche 8 - Asie"
                 img-src="/picture_Visu/Poster/perfArt/PosterAsia.png"
                 img-alt="Image"
                 img-top
                 tag="article"
                 style="max-width: 20rem;"
                 class="mb-2"
                 v-b-modal.my-modal8
               >
               </b-card>            
          </b-col>
        </b-row>
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template v-slot:img>
           <b-row class="justify-content-md-center"> 
          <b-col col lg="3">
              <b-card
                 title="Affiche 9 - Statuesque"
                 img-src="/picture_Visu/Poster/perfArt/PosterStatuesque.png"
                 img-alt="Image"
                 img-top
                 tag="article"
                 style="max-width: 20rem;"
                 class="mb-2"
                 v-b-modal.my-modal9
               >
                </b-card></b-col>
          <b-col col lg="3">
              <b-card
                 title="Affiche 10 - Frayeur"
                 img-src="/picture_Visu/Poster/perfArt/PosterFright.png"
                 img-alt="Image"
                 img-top
                 tag="article"
                 style="max-width: 20rem;"
                 class="mb-2"
                 v-b-modal.my-modal10
                >
                </b-card>
          </b-col>
          <b-col col lg="3">
              
              <b-card
                 title="Affiche 11 - Wall-E"
                 img-src="/picture_Visu/Poster/perfArt/PosterWall-E.png"
                 img-alt="Image"
                 img-top
                 tag="article"
                 style="max-width: 20rem;"
                 class="mb-2"
                  v-b-modal.my-modal11
               >
               </b-card>         
          </b-col>
          <b-col col lg="3">
              
              <b-card
                 title="Affiche 12 - Chaplin"
                 img-src="/picture_Visu/Poster/perfArt/PosterChaplin.png"
                 img-alt="Image"
                 img-top
                 tag="article"
                 style="max-width: 20rem;"
                 class="mb-2"
                 v-b-modal.my-modal12
               >
               </b-card>            
          </b-col>
        </b-row>
        </template>
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template v-slot:img>
           <b-row class="justify-content-md-center"> 
          <b-col col lg="3">
              <b-card
                 title="Affiche 13 - Danse"
                 img-src="/picture_Visu/Poster/perfArt/PosterDance.png"
                 img-alt="Image"
                 img-top
                 tag="article"
                 style="max-width: 20rem;"
                 class="mb-2"
                 v-b-modal.my-modal13
               >
               </b-card></b-col>
          <b-col col lg="3">
              <b-card
                 title="Affiche 14 - Automnal"
                 img-src="/picture_Visu/Poster/perfArt/PosterAutomnal.png"
                 img-alt="Image"
                 img-top
                 tag="article"
                 style="max-width: 20rem;"
                 class="mb-2"
                 v-b-modal.my-modal14
                >
                </b-card>
          </b-col>
          <b-col col lg="3">
              
              <b-card
                 title="Affiche 15 - Mosaïque"
                 img-src="/picture_Visu/Poster/perfArt/PosterMosaic.png"
                 img-alt="Image"
                 img-top
                 tag="article"
                 style="max-width: 20rem;"
                 class="mb-2"
                 v-b-modal.my-modal15
               >
               </b-card>         
          </b-col>
          <b-col col lg="3">
              
              <b-card
                 title="Affiche 16 - Enflammé"
                 img-src="/picture_Visu/Poster/perfArt/PosterInflamed.png"
                 img-alt="Image"
                 img-top
                 tag="article"
                 style="max-width: 20rem;"
                 class="mb-2"
                 v-b-modal.my-modal16
               >
               
              </b-card>            
          </b-col>
        </b-row>
        </template>

      </b-carousel-slide>


 



<b-carousel-slide>
        <template v-slot:img>
           <b-row class="justify-content-md-center"> 
          <b-col col lg="3">
              <b-card
                 title="Affiche 17 - Arty"
                 img-src="/picture_Visu/Poster/perfArt/PosterArty.png"
                 img-alt="Image"
                 img-top
                 tag="article"
                 style="max-width: 20rem;"
                 class="mb-2"
                  v-b-modal.my-modal17
               >
               </b-card></b-col>
          <b-col col lg="3">
              <b-card
                 title="Affiche 18 - Gagnant 1re édition"
                 img-src="/picture_Visu/Poster/perfArt/PosterWinner1.png"
                 img-alt="Image"
                 img-top
                 tag="article"
                 style="max-width: 20rem;"
                 class="mb-2"
                 v-b-modal.my-modal18
                >
                </b-card>
          </b-col>
          <b-col col lg="3">
              <b-card
                 title="Affiche 19 - Gagnant 2e édition"
                 img-src="/picture_Visu/Poster/perfArt/PosterWinner2.png"
                 img-alt="Image"
                 img-top
                 tag="article"
                 style="max-width: 20rem;"
                 class="mb-2"
                 v-b-modal.my-modal19
               >
               </b-card>         
          </b-col>
          <b-col col lg="3">
              
              <b-card
                 title="Affiche 20 - Gagnant 3e édition"
                 img-src="/picture_Visu/Poster/perfArt/PosterWinner3.png"
                 img-alt="Image"
                 img-top
                 tag="article"
                 style="max-width: 20rem;"
                 class="mb-2 poster-perf"
                 v-b-modal.my-modal20
               >
               </b-card>            
          </b-col>
        </b-row>
        </template>
      </b-carousel-slide>




    </b-carousel>
  </div>


<b-modal id="my-modal1" hide-footer hide-header><img class="modal-image" src="/picture_Visu/Poster/commented_poster/PosterCom1.png"></b-modal>
<b-modal id="my-modal2" hide-footer hide-header><img class="modal-image" src="/picture_Visu/Poster/commented_poster/PosterCom2.png"></b-modal>
<b-modal id="my-modal3" hide-footer hide-header><img class="modal-image" src="/picture_Visu/Poster/commented_poster/PosterCom3.png"></b-modal>
<b-modal id="my-modal4" hide-footer hide-header><img class="modal-image" src="/picture_Visu/Poster/commented_poster/PosterCom4.png"></b-modal>
<b-modal id="my-modal5" hide-footer hide-header><img class="modal-image" src="/picture_Visu/Poster/perfArt/PosterRefined.jpeg"></b-modal>
<b-modal id="my-modal6" hide-footer hide-header><img class="modal-image" src="/picture_Visu/Poster/commented_poster/PosterCom6.png"></b-modal>
<b-modal id="my-modal7" hide-footer hide-header><img class="modal-image" src="/picture_Visu/Poster/commented_poster/PosterCom7.png"></b-modal>
<b-modal id="my-modal8" hide-footer hide-header><img class="modal-image" src="/picture_Visu/Poster/commented_poster/PosterCom8.png"></b-modal>
<b-modal id="my-modal9" hide-footer hide-header><img class="modal-image" src="/picture_Visu/Poster/commented_poster/PosterCom9.png"></b-modal>
<b-modal id="my-modal10" hide-footer hide-header><img class="modal-image" src="/picture_Visu/Poster/commented_poster/PosterCom10.png"></b-modal>
<b-modal id="my-modal11" hide-footer hide-header><img class="modal-image" src="/picture_Visu/Poster/commented_poster/PosterCom11.png"></b-modal>
<b-modal id="my-modal12" hide-footer hide-header><img class="modal-image" src="/picture_Visu/Poster/commented_poster/PosterCom12.png"></b-modal>
<b-modal id="my-modal13" hide-footer hide-header><img class="modal-image" src="/picture_Visu/Poster/commented_poster/PosterCom13.png"></b-modal>
<b-modal id="my-modal14" hide-footer hide-header><img class="modal-image" src="/picture_Visu/Poster/commented_poster/PosterCom14.png"></b-modal>
<b-modal id="my-modal15" hide-footer hide-header><img class="modal-image" src="/picture_Visu/Poster/commented_poster/PosterCom15.png"></b-modal>
<b-modal id="my-modal16" hide-footer hide-header><img class="modal-image" src="/picture_Visu/Poster/commented_poster/PosterCom16.png"></b-modal>
<b-modal id="my-modal17" hide-footer hide-header><img class="modal-image" src="/picture_Visu/Poster/commented_poster/PosterCom17.png"></b-modal>

<b-modal id="my-modal18" hide-footer hide-header><img class="modal-image" src="/picture_Visu/Poster/perfArt/PosterWinner1.png"></b-modal>
<b-modal id="my-modal19" hide-footer hide-header><img class="modal-image" src="/picture_Visu/Poster/perfArt/PosterWinner2.png"></b-modal>
<b-modal id="my-modal20" hide-footer hide-header><img class="modal-image" src="/picture_Visu/Poster/perfArt/PosterWinner3.png"></b-modal>
</div>
</template>
<style lang="scss">

</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ModalPlugin } from 'bootstrap-vue';
import {BCard, BCarousel, BCarouselSlide, BRow, BCol, BCardText, BCardImg, BButton, BModal, VBModal, directivesPlugin} from "bootstrap-vue";
Vue.use(ModalPlugin)

@Component({
  components: {
  
    BCard, BCarousel, BCarouselSlide, BRow, BCol, BCardText, BCardImg, BButton, BModal,
  
  },
})



export default class InPractisePerf extends Vue {

     

    }
  
</script>