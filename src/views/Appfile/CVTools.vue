<template>
  <div>
    <Header />
    <Menu />
    <h3 id="toolCV">
      OUTILS D'AIDE À LA CONCEPTION DE CV
    </h3>
    <p>
      Il vous faut parfois choisir entre un CV classique et facilement lisible
      ou un CV plus original et attractif qui vous permettra d'exprimer
      davantage votre créativité. Vous trouverez ci-dessous plusieurs sites de
      modèles pour vous aider à concevoir votre CV.
    </p>
    <div class="margin">
      <div>
        <strong>
          Modèles de CV classiques gratuits
        </strong>
      </div>

      <a
        href="https://www.emploitic.com/conseils/modeles-de-cv"
        alt="emploitic"
        class="link-help-builder"
        target="_blank"
        draggable="false"
      >
        <img
          class="Help_Builder"
          src="/picture_cv/CVTool1.jpg"
          draggable="false"
        />

        <img
          class="supperposition"
          src="../../assets/Boxarrowright.png"
          draggable="false"
        />
      </a>
    </div>

    <div class="margin">
      <div>
        <strong>
          Modèles de CV originaux gratuits
        </strong>
      </div>

      <a
        href="https://www.creeruncv.com/exemple-de-cv/gratuit/"
        alt="creeruncv"
        class="link-help-builder"
        target="_blank"
        draggable="false"
        ><img
          class="Help_Builder"
          draggable="false"
          src="/picture_cv/CVTool2.jpg"/>
        <img
          class="supperposition"
          src="../../assets/Boxarrowright.png"
          draggable="false"
      /></a>
      <a
        href="https://www.cvmaker.fr/exemples-de-cv"
        alt="cvmaker"
        class="link-help-builder"
        target="_blank"
        draggable="false"
        ><img
          class="Help_Builder"
          src="/picture_cv/CVTool3.jpg"
          draggable="false"/>
        <img
          class="supperposition"
          src="../../assets/Boxarrowright.png"
          draggable="false"
      /></a>
      <a
        href="https://www.modeles-de-cv.com/"
        alt="modeles-de-cv"
        class="link-help-builder"
        target="_blank"
        draggable="false"
        ><img
          class="Help_Builder"
          src="/picture_cv/CVTool4.jpg"
          draggable="false"/>
        <img
          class="supperposition"
          src="../../assets/Boxarrowright.png"
          draggable="false"
      /></a>
      <a
        href="https://www.exempledecv.com/"
        alt="exempledecv"
        class="link-help-builder"
        target="_blank"
        draggable="false"
        ><img class="Help_Builder" src="/picture_cv/CVTool5.jpg"/>
        <img
          class="supperposition"
          src="../../assets/Boxarrowright.png"
          draggable="false"
      /></a>
    </div>
    <NextPrevBtn v-bind:nxtprev-list="nxtprevCVTools" />
    <Footer />
  </div>
</template>
<style lang="scss"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BIcon, BIconBoxArrowRight } from "bootstrap-vue";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import NextPrevBtn from "@/components/NextPrevBtn.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    BIcon,
    BIconBoxArrowRight,
    Header,
    Menu,
    NextPrevBtn,
    Footer,
  },
})
export default class CVTools extends Vue {
  protected nxtprevCVTools = {
    BoolPrev: true,
    BoolNext: true,
    PrevImage: "/thumbnail2.png",
    NextImage: "/thumbnail4.png",
    PrevLink: "/CV/Exemples",
    NextLink: "/CV/CV_Video",
  };
}
</script>
