<template>
  <div>
    <h3 id="exampleCV">
      EXEMPLES DE CV (IUT)
    </h3>
    <p>
      Chaque année, en France, des millions d'étudiants postulent à un stage ou
      à un premier emploi. À expérience et  diplômes équivalents,
      ils peuvent faire la différence en personnalisant bien leur CV. Le plus important
      est de faire des compromis entre votre personnalité et la rigueur que le
      monde professionnel attend par rapport au domaine d'expertise. Ces exemples
      de CV réalisés par des étudiants d'IUT vous apporteront des pistes pour élaborer un CV personnalisé et attractif.
    </p>
    <Galery v-bind:galery-picture="CVIUT"></Galery>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Galery from "@/components/Galery.vue";
@Component({
  components: {
    Galery,
  },
})
export default class CVExample extends Vue {
  public CVIUT: string[] = [
    "/picture_cv/example_CV_IUT1.jpg",
    "/picture_cv/example_CV_IUT2.jpg",
    "/picture_cv/example_CV_IUT3.jpg",
    "/picture_cv/example_CV_IUT4.jpg",
    "/picture_cv/example_CV_IUT55.jpg",
    "/picture_CV/example_CV_IUT6.jpg",
  ];
}
</script>
