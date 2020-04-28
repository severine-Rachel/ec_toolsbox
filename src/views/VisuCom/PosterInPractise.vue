
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import InPractisePerf from "@/views/VisuCom/PosterInPractise/InPractisePerf.vue";
import InPractiseEvent from "@/views/VisuCom/PosterInPractise/InPractiseEvent.vue";
import InPractisePPP from "@/views/VisuCom/PosterInPractise/InPractisePPP.vue";
import Pdf from "@/components/Pdf.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Header,
    Menu,
    InPractisePerf,
    InPractiseEvent,
    InPractisePPP,
    Pdf,
    Footer,
  },
})



export default class PosterInPractise extends Vue {
    public pdfCinema =[
      {
        pdfLink:"/pdf_poster/ExamplePosterCinema.pdf",
        pdfDownload:"ConcoursAffichesFêteCinéma ",
        TxtPdf:"Exemples concours d’affiches – La fête du cinéma "
      }
    ]
     

    }
  
</script>




<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>EN PRATIQUE...</h3>
    <p>
        <strong>
            Affiches à analyser : Le Perf’Art GEII
        </strong>
    </p>

    <InPractisePerf></InPractisePerf>

    <p>
        <strong>
           Concours d’affiches : répondre à un cahier des charges
        </strong>
    </p>
    <p>
        Il y a quelques années, la Fédération Nationale des Cinémas Français 
        a lancé un concours pour trouver l’affiche de sa 33e Fête du Cinéma. 
        Vous trouverez, dans le document ci-dessous, le cahier des charges de 
        ce concours et une sélection d’affiches produites pour l’occasion. 
        Saurez-vous retrouver le gagnant et les finalistes parmi les participants ?
    </p>

    <Pdf v-bind:galery-pdf="pdfCinema"></Pdf>
     <p>
        <strong>
           Autres exemples…
        </strong>
    </p>
    <p>
        <ul>
            <li><u>Affiches événementielles</u></li>
        </ul>    
            <InPractiseEvent></InPractiseEvent>
        <ul>

            <li><u>Posters de Projet Professionnel Personnalisé</u></li>
        </ul>
        <InPractisePPP></InPractisePPP>
    </p>
    <Footer></Footer>
    
  </div>
</template>

<style lang="scss">
.modal-image{ 
  width:100%;
}
.modal-dialog, .modal-md{
  max-width: 75% !important;
}
</style>
