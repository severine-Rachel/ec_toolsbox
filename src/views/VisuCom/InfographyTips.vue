<template>
  <div>
    <h3 id="InfographyTips">
      CONSEILS ET ASTUCES
    </h3>
    <p>
      <strong>
        Créer une infographie avec Picktochart
      </strong>
    </p>
    <b-row align-h="center">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/650OestScN4"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </b-row>
    <p>
      <a
        class="subtitle-link"
        href="https://www.univ-angers.fr/fr/formations/insertion-professionnelle/ip-box/cv.html"
        target="_blank"
      >
        Créer une infographie avec Canva
        <b-icon icon="box-arrow-right"></b-icon>
      </a>
    </p>
    <p>
      <a
        href="https://fr.venngage.com/templates/infographics"
        alt="Venngage"
        target="_blank"
        ><img class="Help_Builder" src="/picture_Visu/Tool3.png"/><b-icon
          icon="box-arrow-right"
        ></b-icon
      ></a>
    </p>
    <p>
      <strong>
        Les créateurs d’infographies en ligne
      </strong>
    </p>
      <a href="https://infogram.com/fr/" target="_blank">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Infogram_Logo.png/1200px-Infogram_Logo.png"
        class="logo-software"
        title="infogr.am"
        alt="infogr.am"
      />
    </a>
        <a href="https://www.canva.com/fr_fr/creer/" target="_blank">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/3/3b/Canva_Logo.png"
        class="logo-software"
        title="Canva"
        alt="Canva"
      />
    </a>
    <a href="https://piktochart.com/" target="_blank">
      <img
        src="https://d1qb2nb5cznatu.cloudfront.net/startups/i/24959-4d2540d2c2d0044a14ea83e250767b88-medium_jpg.jpg?buster=1517195542"
        class="logo-software"
        title="Piktochart"
        alt="Piktochart"
      />
    </a>
    <a href="https://venngage.com/" target="_blank">
      <img
        src="https://venngage-wordpress.s3.amazonaws.com/uploads/2014/08/logo_03.png"
        class="logo-software"
        title="venngage"
        alt="venngage"
      />
    </a>
  </div>
</template>
<style lang="scss"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BIcon, BIconBoxArrowRight } from "bootstrap-vue";
@Component({
  components: {
    BIcon,
    BIconBoxArrowRight,
  },
})
export default class InfographyTips extends Vue {}
</script>
