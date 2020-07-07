<template>
  <div>
    <Header />
    <Menu />
    <h3 id="exampleCV">
      EXEMPLES DE CV (IUT)
    </h3>
    <p>
      Chaque année, en France, des millions d'étudiants postulent à un stage ou
      à un premier emploi. À expérience et diplômes équivalents, ils peuvent
      faire la différence en personnalisant leur CV. Le plus important est
      de faire des compromis entre votre personnalité et la rigueur que le monde
      professionnel attend par rapport au domaine d'expertise. Ces exemples de
      CV réalisés par des étudiants d'IUT vous apporteront des pistes pour
      élaborer un CV personnalisé et attractif.
    </p>
    <Galery v-bind:galery-picture="cvIut" v-bind:classheight="'square'"></Galery>
    <NextPrevBtn v-bind:nxtprev-list="nxtprevCVExample" />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Galery from "@/components/Galery.vue";
import NextPrevBtn from "@/components/NextPrevBtn.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Galery,
    Header,
    Menu,
    NextPrevBtn,
    Footer,
  },
})
export default class CVExample extends Vue {
  protected cvIut: string[] = [
    "/picture_cv/example_CV_IUT1.jpg",
    "/picture_cv/example_CV_IUT2.jpg",
    "/picture_cv/example_CV_IUT3.jpg",
    "/picture_cv/example_CV_IUT4.jpg",
    "/picture_cv/example_CV_IUT55.png",
    "/picture_cv/example_CV_IUT6.jpg",
  ];
  protected nxtprevCVExample =
  {
    BoolPrev: true,
    BoolNext: true,
    PrevImage: "/thumbnail1.png",
    NextImage: "/thumbnail3.png",
    PrevLink: "/CV/Astuces",
    NextLink: "/CV/Outils",
  };
}
</script>
