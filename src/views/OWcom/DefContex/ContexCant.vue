<template>
  <div>
    <h4>ON NE PEUT PAS NE PAS COMMUNIQUER</h4>
    <p>
      Au-delà du langage, notre simple présence physique émet des signaux communicationnels.
    </p>
    <p>
      On  ne  peut  pas  ne  pas  communiquer;  tout  a  un  sens:  la  parole  ou  le  silence,  le  mouvement  ou l’immobilité.
      
    </p>

  <p>
    <Pdf v-bind:galery-pdf="pdfCantcom"></Pdf>
  </p>
  <p><strong>
    On ne peut pas ne pas communiquer
  </strong>
    </p>
    <p>
      «  Tout  comportement  induit  une  communication.  Même  le  "fait  de  ne 
       pas  parler  ou  de  ne  prêter attention à personne ne constitue pas une
        exception à ce quenous venons de dire. Un homme attablé dans un bar rempli
         de monde et qui regarde droit devant lui, un passager qui dans un avion 
         reste assis dans son fauteuil  les  yeux  fermés,  communiquent  tous  deux
           un  message:  ils  ne  veulent  parler  à  personne,  et  ne veulent pas 
           qu'on leur adresse la parole; en général, leurs voisins comprennent le
            message et y réagissent normalement en les laissant tranquilles. Manifestement, 
            il y a là un échange de communication, tout autant que dans une communication 
            animée. Quel que soit le comportement d'une personne, il a une signification 
            pour  les  autres.  Par  conséquent,  de  même  qu'il  est  impossible  de  
            ne  pas  avoir  de  comportement,  il  est impossible de ne pas communiquer».
    </p>
    <p>
      Au-delà  de  ce  qui  est  dit  (le  contenu),  dans  toute  communication  
      on  établit  un  certain  type  de relation. En réalité, Paul Watzlawick 
      nous dit que le problème est beaucoup plus compliqué dans la plupart des  
      situations  de  communication.  Ce  n'est  pas  l'auteur  du  message 
       qui  fait  seul  le  mode  d'emploi.  Toute une  série  d'intervenants 
        et  d'éléments  extérieurs  y  prennent  leur  part.  Lorsqu'un  maire
          s'exprime,  son message sera entendu différemment de l'électeur selon 
          qu'il sera sympathisant, hostile ou indifférent, selon la  transcription 
           qu'en  aura  fait  la  presse,  selon les  commentaires  de  l'opposition,  
           selon  que  ses  propos seront ou non dans l'air du temps etc. Le décodage 
           résulte de tout un système d'interactions».
    </p>
    <p>
      Mbao, Ma boîte à outils, http://membres.lycos.fr/mbao/waxiome2.htm
    </p>

  </div>
</template>

<style lang="scss"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Pdf from "@/components/Pdf.vue";
@Component({
  components: {
    Pdf
  },

})
export default class ContexCant extends Vue {
  public pdfCantcom= [
    {
      pdfLink:"/",
      pdfDownload:"OnNePeutPasNePasCommuniquer",
      TxtPdf:"Texte Mbao «On ne peut pas ne pas communiquer»"
    }
  ]
}
</script>
