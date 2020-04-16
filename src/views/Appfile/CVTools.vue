<template>
  <div>
    <h3 id="toolCV">
      OUTILS D'AIDE À LA CONCEPTION DE CV
    </h3>

    <p>
      <strong>
        Modèles de CV classiques gratuits
      </strong>

      <a
        href="https://www.emploitic.com/conseils/modeles-de-cv"
        alt="emploitic"
        target="_blank"
        ><img class="Help_Builder" src="/picture_cv/CVTool1.png"/><b-icon
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
        ><img class="Help_Builder" src="/picture_cv/CVTool2.png"/><b-icon
          icon="box-arrow-right"
        ></b-icon
      ></a>
      <a
        href="https://www.cvmaker.fr/exemples-de-cv"
        alt="cvmaker"
        target="_blank"
        ><img class="Help_Builder" src="/picture_cv/CVTool3.png"/><b-icon
          icon="box-arrow-right"
        ></b-icon
      ></a>
      <a
        href="https://www.modeles-de-cv.com/"
        alt="modeles-de-cv"
        target="_blank"
        ><img class="Help_Builder" src="/picture_cv/CVTool4.png"/><b-icon
          icon="box-arrow-right"
        ></b-icon
      ></a>
      <a href="https://www.exempledecv.com/" alt="exempledecv" target="_blank"
        ><img class="Help_Builder" src="/picture_cv/CVTool5.png"/><b-icon
          icon="box-arrow-right"
        ></b-icon
      ></a>
    </p>
  </div>
</template>
<style lang="scss">
.Help_Builder {
  width: 10vw;
  height: 20vh;
  margin: 0 0 0 2vw;
  border: #bce8ff 5px solid;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BIcon,  BIconBoxArrowRight } from "bootstrap-vue";
@Component({
    components: {
        BIcon, BIconBoxArrowRight
    }
})
export default class CVTools extends Vue {}
</script>