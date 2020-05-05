<template>
  <div>
    <h3 id="InfographyTips">
      CONSEILS ET ASTUCES
    </h3>
    <h5 class="text-vid">
      Créer une infographie avec Picktochart
    </h5>
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
    <p class="text-vid">Chaîne : NastmAventure</p>
    <a
      class="subtitle-link"
      href="http://www.cterrier.com/gea/5-creation-entreprise/z-fiche-canva.pdf"
      target="_blank"
    >
      Créer une infographie avec Canva
      <b-icon icon="box-arrow-right"></b-icon>
    </a>

    <p>
      Modèles d’infographie avec Venngage
      <a
        href="https://fr.venngage.com/templates/infographics"
        alt="Venngage"
        target="_blank"
        ><img class="Help_Builder" src="/picture_Visu/Tool3.jpg"/><b-icon
          icon="box-arrow-right"
        ></b-icon
      ></a>
    </p>
    <h4>
      Les créateurs d’infographies en ligne
    </h4>
    <p>
    <b-row class="justify-content-md-center">
      <b-col>
        <a href="https://infogram.com/fr/" target="_blank">
          <b-button class="icon" id="popover-Infogram">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Infogram_Logo.png/1200px-Infogram_Logo.png"
              class="Logo"
              alt="Infogr.am"
            />
          </b-button>
        </a>
      </b-col>

      <b-popover target="popover-Infogram" triggers="hover" placement="top">
        Infogr.am
      </b-popover>
      <b-col>
        <a href="https://www.canva.com/fr_fr/creer/" target="_blank">
          <b-button class="icon" id="popover-Canva">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/3/3b/Canva_Logo.png"
              class="Logo"
              alt="Canva"
            />
          </b-button>
        </a>
      </b-col>

      <b-popover target="popover-Canva" triggers="hover" placement="top">
        Canva
      </b-popover>

       <b-col>
        <a href="https://piktochart.com/" target="_blank">
          <b-button class="icon" id="popover-Piktochart">
          <img
              src="https://blog.smatsocial.com/wp-content/uploads/2018/03/Logo-Tagline_Vertical_Full-Color-540x386.png"
              class="Logo"
              alt="Piktochart"
            />
          </b-button>
        </a>
      </b-col>

      <b-popover target="popover-Piktochart" triggers="hover" placement="top">
        Piktochart
      </b-popover>


       <b-col>
        <a href="https://venngage.com/" target="_blank">
          <b-button class="icon" id="popover-Venngage">
            <img
              src="https://venngage-wordpress.s3.amazonaws.com/uploads/2014/08/logo_03.png"
              class="Logo"
              alt="Venngage"
            />
          </b-button>
        </a>
      </b-col>

      <b-popover target="popover-Venngage" triggers="hover" placement="top">
        Venngage
      </b-popover>
    </b-row>
  </p>
    
  </div>
</template>
<style lang="scss"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BIcon, BIconBoxArrowRight, BPopover } from "bootstrap-vue";
@Component({
  components: {
    BIcon,
    BIconBoxArrowRight,
    BPopover,
  },
})
export default class InfographyTips extends Vue {}
</script>
