<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>BIBLIOGRAPHIE INDICATIVE</h3>
    <p class="breath">
      <strong>
        OUVRAGES CONSULTÉS
      </strong>
    </p>
    <p>
      GOLDBERG RoseLee, Performances,<i> l'art en action</i>, Paris, Thames & Hudson,
      1999.
    </p>
    <p>
      GOLDBERG RoseLee, <i>La performance : du futurisme à nos jours</i>,
      Paris/Londres, Thames & Hudson, 2001.
    </p>
    <p>HOFFMANN Jens, Jonas Joan,<i> Action</i>, Paris, Thames et Hudson, 2005.</p>
    <p>
      LABELLE-ROJOUX Arnaud,<i> L’Acte pour l’art</i>, Paris, Éditions Al Dante, 2004.
    </p>

    <p  class="breath">
      <strong>
        ARTICLES CONSULTÉS
      </strong>
    </p>
    <p>
      IET Christian, ROQUES Sylvie, «{{'\xa0'}}Présentation{{'\xa0'}}»,<i> Communications</i> 2013/1
      (n°92), pp. 5-8.
    </p>
    <p>
      MASSOUTRE Guylaine, « {{'\xa0'}}La performance en images. Performances. L’Art en
      action et Ein Fest in Wuppertal. 25 Jahre Tanztheater. Pina Bausch. 9 bis
      31 Oktober 1998 {{'\xa0'}}», <i>Jeu</i> (n°97), pp. 113-116.
    </p>
    <p>
      ORLAN, entretien avec Roques Sylvie, «{{'\xa0'}}Les préjugés ébranlés par
      l’Art-Action. Entretien{{'\xa0'}}»,<i> Communications </i>2013/1 (n°92), pp. 219-229.
    </p>
    <p>
      PEQUIGNOT Bruno, «{{'\xa0'}}De la performance dans les arts. Limites et réussites
      d’une contestation{{'\xa0'}}»,<i> Communications</i> 2013/1 (n°92), pp. 9-20.
    </p>
    <p>
      PRADIER Jean-Marie, «{{'\xa0'}}La performance ou la renaissance de l’action{{'\xa0'}}»,
      <i> Communications</i> 2013/1 (n°92), pp. 277-290.
    </p>
    <p>
      SPIELMANN Guy, «{{'\xa0'}}L’événement spectacle. Pertinence du concept et de la
      théorie de la performance{{'\xa0'}}»,<i> Communications</i> 2013/1 (n°92), pp. 193-204
    </p>

    <p  class="breath">
      <strong>
        POUR EN SAVOIR DAVANTAGE SUR LE TRAVAIL MENÉ À PARTIR DE LA PERFORMANCE
        ARTISTIQUE DANS LE SUPÉRIEUR
      </strong>
    </p>
    <p>
      RAFFY-HIDEUX Peggy, «{{'\xa0'}}Concours de performances artistiques à l’IUT : l’art
      comme clé d’entrée dans les compétences{{'\xa0'}}», <i>Didactiques de la communication
      3</i>, Paris, L’Harmattan, coll. Uni(d)ivers(c)ité, 2019, pp. 37-51.
    </p>
    <NextPrevBtn v-bind:nxtprev-list="nxtprevArtPerfBibliogr"></NextPrevBtn>
    <Footer></Footer>
  </div>
</template>
<style lang="scss"></style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import NextPrevBtn from "@/components/NextPrevBtn.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    NextPrevBtn,
    Footer,
  },
})
export default class ArtPerfBibliogr extends Vue {
  public nxtprevArtPerfBibliogr =
  {
    BoolPrev: true,
    BoolNext: false,
    PrevImage: "/thumbnail2.png",
    NextImage: " ",
    PrevLink: "/PerformanceArtistique/CorpusdeTexte",
    NextLink: " ",
  };
}
</script>