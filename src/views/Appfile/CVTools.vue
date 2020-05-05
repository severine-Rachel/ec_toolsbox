<template>
  <div>
    <h3 id="toolCV">
      OUTILS D'AIDE À LA CONCEPTION DE CV
    </h3>
    <p>
      Il faut parfois choisir entre un CV direct et compréhensif qui fera
      ressortir vos compétences ou un CV plus original qui vous permettra de
      vous exprimer davantage. Ces sites vous proposent plusieurs modèles afin
      de gagner du temps.
    </p>
    <p>
      <strong>
        Modèles de CV classiques gratuits
      </strong>

      <a
        href="https://www.emploitic.com/conseils/modeles-de-cv"
        alt="emploitic"
        target="_blank"
        ><img class="Help_Builder" src="/picture_cv/CVTool1.jpg"/><b-icon
          icon="box-arrow-right"
        ></b-icon
      ></a>
    </p>

    <p>
      <strong>
        Modèles de CV originaux gratuits
      </strong>
      <a
        href="https://www.creeruncv.com/exemple-de-cv/gratuit/"
        alt="creeruncv"
        target="_blank"
        ><img class="Help_Builder" src="/picture_cv/CVTool2.jpg"/><b-icon
          icon="box-arrow-right"
        ></b-icon
      ></a>
      <a
        href="https://www.cvmaker.fr/exemples-de-cv"
        alt="cvmaker"
        target="_blank"
        ><img class="Help_Builder" src="/picture_cv/CVTool3.jpg"/><b-icon
          icon="box-arrow-right"
        ></b-icon
      ></a>
      <a
        href="https://www.modeles-de-cv.com/"
        alt="modeles-de-cv"
        target="_blank"
        ><img class="Help_Builder" src="/picture_cv/CVTool4.jpg"/><b-icon
          icon="box-arrow-right"
        ></b-icon
      ></a>
      <a href="https://www.exempledecv.com/" alt="exempledecv" target="_blank"
        ><img class="Help_Builder" src="/picture_cv/CVTool5.jpg"/><b-icon
          icon="box-arrow-right"
        ></b-icon
      ></a>
    </p>
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
export default class CVTools extends Vue {}
</script>
