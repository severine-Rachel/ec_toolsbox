<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>BIBLIOGRAPHIE INDICATIVE</h3>
    <p>
      <strong>
        OUVRAGES CONSULTÉS
      </strong>
    </p>
    <p>
      GOLDBERG RoseLee, Performances, l'art en action, Paris, Thames & Hudson,
      1999.
    </p>
    <p>
      GOLDBERG RoseLee, La performance : du futurisme à nos jours,
      Paris/Londres, Thames & Hudson, 2001.
    </p>
    <p>HOFFMANN Jens, Jonas Joan, Action, Paris, Thames et Hudson, 2005.</p>
    <p>
      LABELLE-ROJOUX Arnaud, L’Acte pour l’art, Paris, Éditions Al Dante, 2004.
    </p>

    <p>
      <strong>
        ARTICLES CONSULTÉS
      </strong>
    </p>
    <p>
      IET Christian, ROQUES Sylvie, «&nbsp;Présentation&nbsp;», Communications 2013/1
      (n°92), pp. 5-8.
    </p>
    <p>
      MASSOUTRE Guylaine, « &nbsp;La performance en images. Performances. L’Art en
      action et Ein Fest in Wuppertal. 25 Jahre Tanztheater. Pina Bausch. 9 bis
      31 Oktober 1998 &nbsp;», Jeu (n°97), pp. 113-116.
    </p>
    <p>
      ORLAN, entretien avec Roques Sylvie, «&nbsp;Les préjugés ébranlés par
      l’Art-Action. Entretien&nbsp;», Communications 2013/1 (n°92), pp. 219-229.
    </p>
    <p>
      PEQUIGNOT Bruno, «&nbsp;De la performance dans les arts. Limites et réussites
      d’une contestation&nbsp;», Communications 2013/1 (n°92), pp. 9-20.
    </p>
    <p>
      PRADIER Jean-Marie, «&nbsp;La performance ou la renaissance de l’action&nbsp;»,
      Communications 2013/1 (n°92), pp. 277-290.
    </p>
    <p>
      SPIELMANN Guy, «&nbsp;L’événement spectacle. Pertinence du concept et de la
      théorie de la performance&nbsp;», Communications 2013/1 (n°92), pp. 193-204
    </p>

    <p>
      <strong>
        POUR EN SAVOIR DAVANTAGE SUR LE TRAVAIL MENÉ À PARTIR DE LA PERFORMANCE
        ARTISTIQUE DANS LE SUPÉRIEUR
      </strong>
    </p>
    <p>
      RAFFY-HIDEUX Peggy, «&nbsp;Concours de performances artistiques à l’IUT : l’art
      comme clé d’entrée dans les compétences&nbsp;», Didactiques de la communication
      3, Paris, L’Harmattan, coll. Uni(d)ivers(c)ité, 2019, pp. 37-51.
    </p>
    <Footer></Footer>
  </div>
</template>
<style lang="scss"></style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";

import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,

    Footer,
  },
})
export default class ArtPerfBibliogr extends Vue {}
</script>
